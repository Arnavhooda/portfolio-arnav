'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const forms = ['Neural knot', 'Signal core', 'Orbital system'];

export function NeuralScene({ motion }: { motion: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  const api = useRef<{
    setForm: (index: number) => void;
    rotate: (direction: number) => void;
    reset: () => void;
  } | null>(null);
  const motionRef = useRef(motion);
  const [form, setForm] = useState(0);
  const [status, setStatus] = useState<'loading' | 'ready' | 'unavailable'>(
    'loading',
  );
  useEffect(() => {
    motionRef.current = motion;
  }, [motion]);

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    let disposed = false;
    let cleanup = () => {};
    async function init() {
      const [T, { OrbitControls }, { RoomEnvironment }] = await Promise.all([
        import('three'),
        import('three/addons/controls/OrbitControls.js'),
        import('three/addons/environments/RoomEnvironment.js'),
      ]);
      if (disposed || !element) return;
      const renderer = new T.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'low-power',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      element.appendChild(renderer.domElement);
      renderer.domElement.setAttribute('aria-hidden', 'true');
      const scene = new T.Scene();
      const camera = new T.PerspectiveCamera(37, 1, 0.1, 100);
      camera.position.set(0, 0.2, 8.5);
      const pmrem = new T.PMREMGenerator(renderer);
      const room = new RoomEnvironment();
      const environment = pmrem.fromScene(room, 0.04);
      scene.environment = environment.texture;
      room.dispose();
      pmrem.dispose();
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.enableDamping = false;
      controls.minPolarAngle = 0.45;
      controls.maxPolarAngle = Math.PI - 0.45;
      controls.saveState();
      // Preserve vertical touch scrolling. Touch and keyboard buttons rotate the figure.
      renderer.domElement.style.touchAction = 'pan-y';
      controls.touches.ONE = T.TOUCH.PAN;
      controls.touches.TWO = T.TOUCH.DOLLY_PAN;
      scene.add(new T.AmbientLight(0xffffff, 0.5));
      const key = new T.DirectionalLight(0xdfffaa, 5);
      key.position.set(-3, 4, 3);
      scene.add(key);
      const rim = new T.PointLight(0x967bff, 70, 15);
      rim.position.set(3, 0, 3);
      scene.add(rim);
      const material = new T.MeshPhysicalMaterial({
        color: 0xa9bca8,
        metalness: 0.94,
        roughness: 0.19,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        iridescence: 0.6,
        iridescenceIOR: 1.5,
      });
      const glow = new T.MeshBasicMaterial({ color: 0xc5ff79 });
      const dark = new T.MeshPhysicalMaterial({
        color: 0x4e5860,
        metalness: 1,
        roughness: 0.22,
        clearcoat: 1,
      });
      const root = new T.Group();
      scene.add(root);
      const knot = new T.Group();
      knot.add(
        new T.Mesh(
          new T.TorusKnotGeometry(1.13, 0.34, 180, 24, 2, 3),
          material,
        ),
      );
      knot.rotation.set(0.25, 0, -0.4);
      const core = new T.Group();
      const crystal = new T.Mesh(new T.IcosahedronGeometry(1.45, 0), material);
      core.add(crystal);
      const edges = new T.LineSegments(
        new T.EdgesGeometry(crystal.geometry),
        new T.LineBasicMaterial({ color: 0xc5ff79 }),
      );
      edges.scale.setScalar(1.003);
      core.add(edges);
      const orbit = new T.Group();
      orbit.add(new T.Mesh(new T.SphereGeometry(0.78, 40, 24), dark));
      for (let i = 0; i < 3; i++) {
        const ring = new T.Mesh(
          new T.TorusGeometry(1.3 + i * 0.21, 0.04, 12, 110),
          i === 1 ? glow : material,
        );
        ring.rotation.set(i * 0.9 + 0.55, i * 0.55, i * 0.6);
        orbit.add(ring);
      }
      const models = [knot, core, orbit];
      models.forEach((model, index) => {
        model.visible = index === 0;
        root.add(model);
      });
      const satellites = new T.Group();
      scene.add(satellites);
      for (let i = 0; i < 5; i++) {
        const satellite = new T.Mesh(
          new T.OctahedronGeometry(i === 0 ? 0.2 : 0.1),
          i % 2 ? material : glow,
        );
        const angle = (i * Math.PI * 2) / 5;
        satellite.position.set(
          Math.cos(angle) * 2.25,
          Math.sin(angle) * 1.75,
          Math.sin(i * 3) * 0.7,
        );
        satellites.add(satellite);
      }
      const particlesGeometry = new T.BufferGeometry();
      const points: number[] = [];
      for (let i = 0; i < 110; i++) {
        const angle = i * 2.39996;
        const radius = 2.3 + (i % 13) / 8;
        points.push(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          ((i % 9) - 4) * 0.35,
        );
      }
      particlesGeometry.setAttribute(
        'position',
        new T.Float32BufferAttribute(points, 3),
      );
      const particles = new T.Points(
        particlesGeometry,
        new T.PointsMaterial({
          color: 0xa8b7a3,
          size: 0.015,
          transparent: true,
          opacity: 0.65,
        }),
      );
      scene.add(particles);
      const render = () => renderer.render(scene, camera);
      const resize = new ResizeObserver(() => {
        if (!element.clientWidth || !element.clientHeight) return;
        camera.aspect = element.clientWidth / element.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(element.clientWidth, element.clientHeight);
        render();
      });
      resize.observe(element);
      let inView = true;
      const observer = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting;
        },
        { rootMargin: '80px' },
      );
      observer.observe(element);
      let frame = 0;
      let previous = 0;
      let elapsed = 0;
      const animate = (time: number) => {
        frame = requestAnimationFrame(animate);
        const delta = Math.min((time - previous) / 1000, 0.05);
        previous = time;
        if (!inView || document.hidden || !motionRef.current) return;
        elapsed += delta;
        root.rotation.y += delta * 0.16;
        root.position.y = Math.sin(elapsed * 0.7) * 0.12;
        satellites.rotation.z += delta * 0.055;
        satellites.children.forEach((child) => {
          child.rotation.y += delta * 0.3;
        });
        particles.rotation.z -= delta * 0.01;
        render();
      };
      frame = requestAnimationFrame(animate);
      controls.addEventListener('change', render);
      api.current = {
        setForm(index) {
          models.forEach((model, i) => {
            model.visible = i === index;
          });
          render();
        },
        rotate(direction) {
          root.rotation.y += direction * 0.3;
          render();
        },
        reset() {
          root.rotation.set(0, 0, 0);
          controls.reset();
          render();
        },
      };
      const contextLost = (event: Event) => {
        event.preventDefault();
        setStatus('unavailable');
      };
      renderer.domElement.addEventListener('webglcontextlost', contextLost);
      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        resize.disconnect();
        controls.dispose();
        renderer.domElement.removeEventListener(
          'webglcontextlost',
          contextLost,
        );
        scene.traverse((object) => {
          if (
            object instanceof T.Mesh ||
            object instanceof T.Points ||
            object instanceof T.LineSegments
          ) {
            object.geometry.dispose();
            const materials = Array.isArray(object.material)
              ? object.material
              : [object.material];
            materials.forEach((m) => m.dispose());
          }
        });
        environment.dispose();
        renderer.dispose();
        renderer.domElement.remove();
        api.current = null;
      };
      render();
      setStatus('ready');
    }
    void init().catch(() => {
      if (!disposed) setStatus('unavailable');
    });
    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div className="scene-shell">
      <div className="scene-meta">
        <span>
          <i /> INTERACTIVE OBJECT / 0{form + 1}
        </span>
        <span>AH—LAB</span>
      </div>
      <div className="scene-grid" aria-hidden="true" />
      <div ref={host} className="scene-canvas" aria-hidden="true" />
      {status === 'loading' && (
        <output className="scene-fallback">Initializing 3D experience…</output>
      )}
      {status === 'unavailable' && (
        <div className="scene-fallback">
          <Image
            src="/arnav-hooda.jpg"
            width={180}
            height={230}
            alt="Arnav Hooda"
          />
          <p>
            3D is unavailable in this browser.
            <br />
            Explore my projects below.
          </p>
        </div>
      )}
      <div className="scene-bottom">
        <p id="scene-instructions">
          {status === 'ready'
            ? 'Drag to explore · Use arrows to rotate'
            : 'AI / ML / PRODUCT ENGINEERING'}
        </p>
        <div className="scene-tools">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Rotate figure left"
            disabled={status !== 'ready'}
            onClick={() => api.current?.rotate(-1)}
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Reset figure"
            disabled={status !== 'ready'}
            onClick={() => api.current?.reset()}
          >
            <RotateCcw />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Rotate figure right"
            disabled={status !== 'ready'}
            onClick={() => api.current?.rotate(1)}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
      <div className="form-selector" aria-label="Choose a 3D figure">
        {forms.map((label, index) => (
          <Button
            key={label}
            variant="ghost"
            aria-pressed={form === index}
            disabled={status !== 'ready'}
            onClick={() => {
              setForm(index);
              api.current?.setForm(index);
            }}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
