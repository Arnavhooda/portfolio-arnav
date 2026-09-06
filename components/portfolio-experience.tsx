'use client';

import Image from 'next/image';

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Copy,
  Download,
  Code2 as Github,
  BriefcaseBusiness as Linkedin,
  MapPin,
  Pause,
  Play,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { NeuralScene } from '@/components/neural-scene';

const github = 'https://github.com/Arnavhooda';
const linkedin = 'https://www.linkedin.com/in/arnav-hooda-87061486/';
const email = 'arnavhooda@gmail.com';
const projects = [
  {
    number: '01',
    category: 'Research',
    name: 'Language. Understood.',
    subtitle: 'Samsung PRISM',
    dates: 'April 2025 — February 2026',
    description:
      'Building the data foundation for spoken-language identification.',
    tags: ['NLP', 'Machine learning', 'Team leadership'],
    challenge:
      'Prepare usable language data for a spoken-language identification research system.',
    ownership:
      'Led dataset development, coordinated collection workflows, and organized preprocessing to support downstream machine-learning work.',
    result:
      'Completed an 11-month industry research engagement through the Samsung PRISM Research Program.',
    detail: 'Spoken Language Identification',
    visual: 'language',
  },
  {
    number: '02',
    category: 'Product',
    name: 'Smart Gig',
    subtitle: 'Freelancer marketplace',
    dates: 'June — November 2024',
    description: 'Connecting independent talent with the next opportunity.',
    tags: ['React', 'Node.js', 'Marketplace UX'],
    challenge:
      'Make project discovery and requirement posting simpler for freelancers and businesses.',
    ownership:
      'Built project-browsing and business requirement-posting flows with React, Node.js, and HTML.',
    result:
      'Took a two-sided marketplace from an idea to a working software project.',
    detail: 'Smart Gig',
    visual: 'product',
  },
  {
    number: '03',
    category: 'Venture',
    name: 'Elite Wristwear',
    subtitle: 'Independent e-commerce venture',
    dates: 'August 2023 — May 2024',
    description: 'From a retail idea to a customer-facing storefront.',
    tags: ['Shopify', 'E-commerce', 'Business strategy'],
    challenge:
      'Build and operate an independent retail business, from storefront to customer experience.',
    ownership:
      'Owned the storefront, product listings, customer engagement, and social-media-led marketing.',
    result:
      'Built practical experience across product presentation, customer communication, and business operations.',
    detail: 'Elite Wristwear',
    visual: 'venture',
  },
];
const skills = [
  {
    title: 'Language & applied AI',
    icon: BrainCircuit,
    description: 'Turning unstructured information into something useful.',
    tools: [
      'Machine Learning',
      'NLP',
      'LLMs & RAG',
      'Deep Learning',
      'Computer Vision',
    ],
    evidence: 'Samsung PRISM language-identification research.',
  },
  {
    title: 'Software engineering',
    icon: Code2,
    description: 'Making the research work outside the notebook.',
    tools: ['Python', 'React', 'Node.js', 'REST APIs', 'Data Structures'],
    evidence: 'Product delivery through the Smart Gig marketplace.',
  },
  {
    title: 'Data & product thinking',
    icon: Sparkles,
    description: 'Connecting technical decisions to real outcomes.',
    tools: ['SQL', 'Pandas', 'Scikit-learn', 'OpenCV', 'Git & GitHub'],
    evidence: 'Research coordination and independent entrepreneurship.',
  },
];

function Reveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top > window.innerHeight)
      el.dataset.hidden = 'true';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          delete el.dataset.hidden;
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const ref = useRef<HTMLElement>(null);
  return (
    <article
      className="project-card"
      ref={ref}
      onPointerMove={(event) => {
        if (
          event.pointerType !== 'mouse' ||
          matchMedia('(prefers-reduced-motion: reduce)').matches ||
          document.documentElement.dataset.motion !== 'on'
        )
          return;
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty(
          '--tilt-x',
          `${(-(event.clientY - rect.top - rect.height / 2) / rect.height) * 5}deg`,
        );
        event.currentTarget.style.setProperty(
          '--tilt-y',
          `${((event.clientX - rect.left - rect.width / 2) / rect.width) * 5}deg`,
        );
      }}
      onPointerLeave={() => {
        ref.current?.style.setProperty('--tilt-x', '0deg');
        ref.current?.style.setProperty('--tilt-y', '0deg');
      }}
    >
      <div className={`project-art ${project.visual}`} aria-hidden="true">
        <div className="art-meta">
          <span>{project.subtitle}</span>
          <span>/{project.number}</span>
        </div>
        {project.visual === 'language' && (
          <>
            <div className="language-glyphs">
              Aa<span>अ</span>語
            </div>
            <div className="waveform">
              {Array.from({ length: 36 }, (_, i) => (
                <i
                  key={i}
                  style={
                    {
                      '--bar': `${20 + ((i * 31) % 65)}%`,
                      '--delay': `${i * 0.07}s`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          </>
        )}
        {project.visual === 'product' && (
          <div className="marketplace-demo">
            <div>
              <span className="dot" /> Smart Gig <span>↗</span>
            </div>
            <p>
              Good work.
              <br />
              <strong>Great connections.</strong>
            </p>
            <div className="mock-tags">
              <span>Discover talent</span>
              <span>Find a project →</span>
            </div>
          </div>
        )}
        {project.visual === 'venture' && (
          <div className="venture-type">
            <span>ELITE</span>
            <strong>WRISTWEAR</strong>
            <small>AN INDEPENDENT VENTURE</small>
          </div>
        )}
      </div>
      <div className="project-body">
        <p className="micro">
          {project.category.toUpperCase()} / {project.number}
        </p>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Dialog>
          <DialogTrigger
            render={<Button variant="ghost" className="case-trigger" />}
          >
            <span>Explore the project</span>
            <ArrowUpRight size={19} />
          </DialogTrigger>
          <DialogContent className="case-dialog">
            <p className="micro">
              {project.category.toUpperCase()} · {project.dates}
            </p>
            <DialogTitle>{project.detail}</DialogTitle>
            <DialogDescription>{project.description}</DialogDescription>
            <dl>
              {[
                ['The challenge', project.challenge],
                ['What I owned', project.ownership],
                ['The outcome', project.result],
              ].map(([title, text]) => (
                <div key={title}>
                  <dt>{title}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a
              className="action-link"
              href={`mailto:${email}?subject=${encodeURIComponent(`Let's talk about ${project.detail}`)}`}
            >
              Discuss this project <ArrowUpRight size={17} />
            </a>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}

export function PortfolioExperience() {
  const [motion, setMotion] = useState(false);
  const [active, setActive] = useState('home');
  const [filter, setFilter] = useState('All');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setMotion(!media.matches);
    sync();
    media.addEventListener('change', sync);
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - innerHeight;
      document.documentElement.style.setProperty(
        '--scroll-progress',
        String(total > 0 ? scrollY / total : 0),
      );
      let current = 'home';
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= innerHeight * 0.4)
          current = section.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      media.removeEventListener('change', sync);
      window.removeEventListener('scroll', onScroll);
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = motion ? 'on' : 'off';
  }, [motion]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyError(false);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  }
  const filtered = projects.filter(
    (project) => filter === 'All' || project.category === filter,
  );
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="reading-progress" aria-hidden="true" />
      <header className="floating-nav">
        <a className="wordmark" href="#home" aria-label="Arnav Hooda home">
          arnav<span>.</span>
          <small>ENGINEERING THE NEXT.</small>
        </a>
        <nav aria-label="Main navigation">
          {[
            ['work', 'Work'],
            ['about', 'About'],
            ['expertise', 'Expertise'],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'location' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <Button
            variant="ghost"
            size="icon"
            className="motion-toggle"
            aria-label={motion ? 'Pause animations' : 'Enable animations'}
            aria-pressed={motion}
            onClick={() => setMotion(!motion)}
          >
            {motion ? <Pause size={15} /> : <Play size={15} />}
          </Button>
          <a className="nav-contact" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </header>
      <main id="main">
        <section className="hero wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="availability">
              <i /> OPEN TO AI/ML & SOFTWARE ROLES
            </p>
            <p className="hero-greeting">
              Hello, I’m Arnav Hooda <span>↗</span>
            </p>
            <h1 id="hero-title">
              Curiosity.
              <br />
              Code.
              <br />
              <span>Real impact.</span>
            </h1>
            <p className="hero-intro">
              I build intelligent systems—and make them useful. AI & ML
              engineering student, researcher, and a builder who connects the
              dots.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore my work <ArrowUpRight size={19} />
              </a>
              <a
                className="resume-link"
                href="/arnav-hooda-resume.pdf"
                download
              >
                Download résumé <Download size={16} />
              </a>
            </div>
            <div className="hero-foot">
              <span>
                <MapPin size={14} /> Chandigarh, India
              </span>
              <span className="hero-foot-divider" />
              <span>Research instinct. Product mindset.</span>
            </div>
          </div>
          <div className="hero-visual">
            <NeuralScene motion={motion} />
            <div className="visual-caption">
              <span>COMPLEX IDEAS. CONNECTED.</span>
              <span>
                DESIGNED TO BE EXPLORED <ArrowDown size={13} />
              </span>
            </div>
          </div>
          <div className="hero-footer">
            <a href="#work">
              <span className="scroll-indicator">
                <ArrowDown size={16} />
              </span>
              SCROLL TO EXPLORE
            </a>
            <p>
              At the intersection of{' '}
              <span>research, engineering & entrepreneurship.</span>
            </p>
          </div>
        </section>
        <div className="proof-strip">
          <div className="wrap proof-grid">
            <div>
              <strong>
                11<span> months</span>
              </strong>
              <p>Samsung PRISM research</p>
            </div>
            <div>
              <strong>03</strong>
              <p>Research, product & venture builds</p>
            </div>
            <div>
              <strong>2027</strong>
              <p>B.E. Computer Science · AI & ML</p>
            </div>
            <div className="proof-note">
              <span className="dot" /> IDEAS INTO
              <br />
              WORKING SYSTEMS.
            </div>
          </div>
        </div>
        <section
          id="work"
          className="section wrap"
          aria-labelledby="work-title"
        >
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="micro">
                  <span>01 /</span> SELECTED WORK
                </p>
                <h2 id="work-title">
                  Built with purpose<span>.</span>
                </h2>
              </div>
              <p>
                Different challenges.
                <br />
                The same instinct to build.
              </p>
            </div>
          </Reveal>
          <div className="work-toolbar">
            <div className="filters" aria-label="Filter projects">
              {['All', 'Research', 'Product', 'Venture'].map((label) => (
                <Button
                  key={label}
                  variant="ghost"
                  aria-pressed={filter === label}
                  onClick={() => setFilter(label)}
                >
                  {label}
                  {label === 'All' && <span>03</span>}
                </Button>
              ))}
            </div>
            <output className="project-count">
              {String(filtered.length).padStart(2, '0')} PROJECT
              {filtered.length === 1 ? '' : 'S'}
            </output>
          </div>
          <div className="project-grid">
            {filtered.map((project) => (
              <Reveal key={project.number}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <a
            className="github-link"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> Explore more on GitHub{' '}
            <ArrowUpRight size={16} />
          </a>
        </section>
        <section
          id="about"
          className="about-section"
          aria-labelledby="about-title"
        >
          <div className="wrap about-grid">
            <Reveal className="profile-visual">
              <div className="profile-frame">
                <Image
                  src="/arnav-hooda.jpg"
                  alt="Arnav Hooda wearing a navy suit"
                  width={480}
                  height={718}
                  loading="lazy"
                />
                <div className="profile-caption">
                  <span>ARNAV HOODA</span>
                  <span>ENGINEER / RESEARCHER / BUILDER</span>
                </div>
              </div>
              <div className="profile-label">
                <span className="dot" /> ALWAYS CURIOUS. ALWAYS BUILDING.
              </div>
            </Reveal>
            <Reveal>
              <p className="micro">
                <span>02 /</span> THE PERSON BEHIND THE CODE
              </p>
              <h2 id="about-title">
                Research discipline.
                <br />
                <span className="dim">Builder’s instinct.</span>
              </h2>
              <p className="about-lede">
                I like the space between “what if” and “it works.”
              </p>
              <p>
                I’m pursuing a B.E. in Computer Science Engineering with a
                specialization in Artificial Intelligence & Machine Learning at
                Chandigarh University.
              </p>
              <p>
                Leading research teams, building software, and running an
                independent venture have taught me to move forward even when the
                problem is still ambiguous. My strongest work connects technical
                curiosity with ownership beyond the code.
              </p>
              <div className="about-links">
                <a
                  className="action-link"
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={17} />
                </a>
                <a className="action-link muted" href={`mailto:${email}`}>
                  Say hello <ArrowUpRight size={17} />
                </a>
              </div>
            </Reveal>
          </div>
          <div className="wrap">
            <Reveal className="milestones">
              {[
                [
                  '01',
                  'Hack-Shastra winner',
                  'Building and presenting under pressure.',
                ],
                [
                  '02',
                  'NDA-151 · AIR 621',
                  'Discipline, resilience, and leadership.',
                ],
                [
                  '03',
                  'IIMUN presiding officer',
                  'Public speaking and diplomacy.',
                ],
                [
                  '04',
                  'Corporate advisory liaison',
                  'Stakeholder coordination · 2023–2024.',
                ],
              ].map(([number, title, text]) => (
                <div key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
        <section
          id="expertise"
          className="section wrap"
          aria-labelledby="expertise-title"
        >
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="micro">
                  <span>03 /</span> THE TOOLKIT
                </p>
                <h2 id="expertise-title">
                  Ideas need good tools<span>.</span>
                </h2>
              </div>
              <p>
                Skills grounded in real work.
                <br />
                Always adding to the stack.
              </p>
            </div>
          </Reveal>
          <div className="skills-grid">
            {skills.map(
              ({ title, icon: Icon, description, tools, evidence }) => (
                <Reveal key={title}>
                  <article className="skill-card">
                    <span className="skill-icon">
                      <Icon size={25} strokeWidth={1.3} />
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="skill-tags">
                      {tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                    <p className="skill-evidence">
                      <ArrowUpRight size={14} />
                      {evidence}
                    </p>
                  </article>
                </Reveal>
              ),
            )}
          </div>
          <Reveal className="credentials">
            <span className="micro">SELECTED CREDENTIALS</span>
            <span>
              <Check size={15} /> IBM Data Science Expert
            </span>
            <span>
              <Check size={15} /> Samsung PRISM
            </span>
            <span>
              <Check size={15} /> Programming with MATLAB
            </span>
          </Reveal>
        </section>
        <section
          id="contact"
          className="contact-section wrap"
          aria-labelledby="contact-title"
        >
          <Reveal>
            <p className="availability">
              <i /> AVAILABLE FOR THE RIGHT TEAM
            </p>
            <div className="contact-head">
              <h2 id="contact-title">
                Let’s build
                <br />
                what’s <span>next.</span>
              </h2>
              <a
                className="contact-orbit"
                href={`mailto:${email}`}
                aria-label="Email Arnav Hooda"
              >
                <ArrowUpRight strokeWidth={1} />
              </a>
            </div>
            <div className="contact-bottom">
              <div>
                <a className="email-link" href={`mailto:${email}`}>
                  {email}
                </a>
                <Button
                  className="copy-button"
                  variant="ghost"
                  size="icon"
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                  onClick={copyEmail}
                >
                  {copied ? <Check size={17} /> : <Copy size={17} />}
                </Button>
                <output className="copy-status">
                  {copied
                    ? 'Copied to clipboard.'
                    : copyError
                      ? 'Select the email address to copy it, or click to email me.'
                      : ''}
                </output>
              </div>
              <p>
                Open to internships & graduate roles
                <br />
                in AI/ML and software engineering.
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="wrap site-footer">
        <a className="wordmark" href="#home">
          arnav<span>.</span>
        </a>
        <p>© 2026 Arnav Hooda</p>
        <div>
          <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a href="#home">
            Back to top <ArrowRight size={15} className="up-arrow" />
          </a>
        </div>
      </footer>
    </>
  );
}
