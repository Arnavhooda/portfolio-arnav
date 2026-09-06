import Image from 'next/image';
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';

const linkedin = 'https://www.linkedin.com/in/arnav-hooda-87061486/';
const github = 'https://github.com/Arnavhooda';
const email = 'mailto:arnavhooda@gmail.com';

const skills = [
  {
    icon: BrainCircuit,
    title: 'Language & applied AI',
    items: [
      'Machine Learning',
      'NLP',
      'LLMs & RAG',
      'Deep Learning',
      'Computer Vision',
    ],
    evidence: 'Applied through Samsung PRISM language-identification research.',
  },
  {
    icon: Code2,
    title: 'Software engineering',
    items: ['Python', 'React', 'Node.js', 'REST APIs', 'Data Structures'],
    evidence:
      'Used to take Smart Gig from an idea to a working marketplace project.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Data & product delivery',
    items: ['SQL', 'Pandas', 'Scikit-learn', 'OpenCV', 'Git & GitHub'],
    evidence:
      'Backed by research delivery, team coordination, and an independent venture.',
  },
];

const highlights = [
  { value: '11 months', label: 'Samsung PRISM research engagement' },
  { value: '3', label: 'Research, software & business builds' },
  { value: '2027', label: 'B.E. Computer Science · AI & ML' },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner wrap">
          <a href="#main" className="wordmark" aria-label="Arnav Hooda home">
            AH<span>/26</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work"><span>01</span> Work</a>
            <a href="#about"><span>02</span> Profile</a>
            <a href="#expertise"><span>03</span> Expertise</a>
          </nav>
          <a className="header-contact" href={email}>
            Start a conversation <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <p className="eyebrow">
              <span className="status-dot" /> AVAILABLE FOR SELECT ROLES
            </p>
            <span className="hero-index">PORTFOLIO / 2026</span>
          </div>

          <div className="hero-stage">
            <div className="hero-copy">
              <p className="hero-discipline">AI ENGINEER · RESEARCHER · BUILDER</p>
              <h1 id="hero-title">
                Building intelligence
                <br />
                <span>into useful things.</span>
              </h1>
              <div className="hero-copy-bottom">
                <p className="hero-intro">
                  I&apos;m <strong>Arnav Hooda</strong>. I work across language
                  AI, machine learning, and product engineering—turning fuzzy
                  questions into systems people can actually use.
                </p>
                <div className="hero-actions">
                  <a className="button primary" href="#work">
                    Explore my work <ArrowDown size={17} />
                  </a>
                  <a
                    className="button text-button"
                    href="/arnav-hooda-resume.pdf"
                    download
                  >
                    Download résumé <Download size={17} />
                  </a>
                </div>
              </div>
            </div>

            <aside className="portrait-composition" aria-label="About Arnav Hooda">
              <div className="portrait-halo" aria-hidden="true">AH</div>
              <div className="portrait-frame">
                <Image
                  src="/arnav-hooda.jpg"
                  alt="Arnav Hooda wearing a navy suit"
                  width={480}
                  height={718}
                  priority
                />
                <div className="portrait-status">
                  <Sparkles size={14} />
                  <span>Language AI / Product systems</span>
                </div>
              </div>
              <div className="portrait-notes">
                <div>
                  <span>BASED IN</span>
                  <strong><MapPin size={13} /> Chandigarh, India</strong>
                </div>
                <div>
                  <span>FOCUS</span>
                  <strong>Research → Product</strong>
                </div>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Arnav Hooda on LinkedIn"
                >
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </aside>
          </div>

          <div className="hero-proof" aria-label="Career highlights">
            {highlights.map((highlight, index) => (
              <div key={highlight.value}>
                <span className="proof-index">0{index + 1}</span>
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="focus-strip" aria-label="Areas of focus">
          <div className="wrap">
            <span>LANGUAGE AI</span>
            <span aria-hidden="true">✳</span>
            <span>APPLIED MACHINE LEARNING</span>
            <span aria-hidden="true">✳</span>
            <span>PRODUCT ENGINEERING</span>
            <span aria-hidden="true">✳</span>
            <span>TEAM LEADERSHIP</span>
          </div>
        </div>

        <section
          id="work"
          className="section wrap"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 id="work-title">
                Work with context<span>.</span>
              </h2>
            </div>
            <p>
              Not just what I made—
              <br />
              what I owned and delivered.
            </p>
          </div>

          <article className="featured-project">
            <div className="research-panel">
              <div className="panel-top">
                <span>SAMSUNG R&D INSTITUTE INDIA</span>
                <span className="small-dot" />
              </div>
              <div className="research-type">
                Language.
                <br />
                <span>Understood.</span>
              </div>
              <div className="language-row" aria-hidden="true">
                <span>Aa</span>
                <span>अ</span>
                <span>語</span>
              </div>
              <div className="signal-bars" aria-hidden="true">
                {[
                  18, 42, 68, 34, 78, 54, 88, 44, 70, 28, 62, 38, 76, 50, 24,
                ].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="research-process">
                <span>COLLECT</span>
                <span>→</span>
                <span>PREPROCESS</span>
                <span>→</span>
                <span>MODEL SUPPORT</span>
              </div>
            </div>

            <div className="project-copy">
              <div className="project-meta">
                <span>RESEARCH / TEAM LEAD</span>
                <span>2025–2026</span>
              </div>
              <h3>
                Spoken Language
                <br />
                Identification
              </h3>
              <p className="project-org">Samsung PRISM Research Program</p>
              <p>
                Led dataset development for a spoken-language identification
                system, coordinating data collection and preprocessing to
                support downstream machine-learning work.
              </p>
              <dl className="case-notes">
                <div>
                  <dt>Challenge</dt>
                  <dd>
                    Prepare usable language data for an NLP research system.
                  </dd>
                </div>
                <div>
                  <dt>Ownership</dt>
                  <dd>
                    Team leadership, collection workflow, and preprocessing.
                  </dd>
                </div>
                <div>
                  <dt>Delivery</dt>
                  <dd>Completed an 11-month industry research engagement.</dd>
                </div>
              </dl>
              <div className="tags">
                <span>NLP</span>
                <span>Dataset development</span>
                <span>Machine Learning</span>
                <span>Team leadership</span>
              </div>
              <div className="project-footer">
                <span>April 2025 — February 2026</span>
                <span>01 / FEATURED</span>
              </div>
            </div>
          </article>

          <div className="project-grid">
            <article className="project-card">
              <div className="project-meta">
                <span>PRODUCT ENGINEERING</span>
                <span>02</span>
              </div>
              <h3>Smart Gig</h3>
              <p className="project-lede">
                A two-sided marketplace designed to make project discovery and
                business hiring simpler.
              </p>
              <dl className="case-notes compact">
                <div>
                  <dt>Built</dt>
                  <dd>Project-browsing and requirement-posting flows.</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>React, Node.js, and HTML.</dd>
                </div>
              </dl>
              <div className="tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Marketplace UX</span>
              </div>
              <div className="project-footer">
                <span>June — November 2024</span>
                <span>Freelancer marketplace</span>
              </div>
            </article>

            <article className="project-card accent-card">
              <div className="project-meta">
                <span>FOUNDER / E-COMMERCE</span>
                <span>03</span>
              </div>
              <h3>Elite Wristwear</h3>
              <p className="project-lede">
                An independent venture that moved from a retail idea to a
                customer-facing storefront.
              </p>
              <dl className="case-notes compact">
                <div>
                  <dt>Owned</dt>
                  <dd>
                    Storefront, listings, customer engagement, and marketing.
                  </dd>
                </div>
                <div>
                  <dt>Platform</dt>
                  <dd>Shopify and social-media-led acquisition.</dd>
                </div>
              </dl>
              <div className="tags">
                <span>Shopify</span>
                <span>E-commerce</span>
                <span>Business strategy</span>
              </div>
              <div className="project-footer">
                <span>August 2023 — May 2024</span>
                <span>Independent venture</span>
              </div>
            </article>
          </div>

          <div className="work-cta">
            <div>
              <p className="eyebrow">CODE & CONTEXT</p>
              <p>Explore my public work and follow what I build next.</p>
            </div>
            <a
              className="button outline"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <Code2 size={17} />
            </a>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="wrap about-grid">
            <div className="about-copy">
              <p className="eyebrow">02 / BUILDER PROFILE</p>
              <h2>
                Technical curiosity.
                <br />
                <span>Ownership beyond code.</span>
              </h2>
              <p className="about-text">
                I&apos;m pursuing a B.E. in Computer Science Engineering with a
                specialization in Artificial Intelligence & Machine Learning at
                Chandigarh University.
              </p>
              <p className="about-text">
                My strongest work sits where research, engineering, and
                coordination overlap. Leading a research team, building a
                marketplace, and operating an online venture taught me to make
                progress when the problem is still ambiguous—not just when the
                specification is complete.
              </p>
              <div className="profile-links">
                <a
                  className="inline-link"
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRight size={17} />
                </a>
                <a
                  className="inline-link muted-link"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            <div className="milestones" aria-label="Selected achievements">
              <div className="milestone featured-milestone">
                <span className="milestone-label">RECOGNITION / 2025</span>
                <h3>Hack-Shastra winner</h3>
                <p>
                  Recognized for building under pressure and presenting a
                  working solution.
                </p>
              </div>
              <div className="milestone">
                <span className="milestone-label">NATIONAL ACHIEVEMENT</span>
                <h3>NDA-151 · All India Rank 621</h3>
                <p>
                  Cleared the UPSC National Defence Academy selection process.
                </p>
              </div>
              <div className="milestone">
                <span className="milestone-label">
                  PUBLIC SPEAKING & DIPLOMACY
                </span>
                <h3>European Union presiding officer</h3>
                <p>
                  IIMUN leadership experience, alongside debate and extempore
                  recognition.
                </p>
              </div>
              <div className="milestone">
                <span className="milestone-label">
                  COLLABORATION / 2023–2024
                </span>
                <h3>Corporate advisory board liaison</h3>
                <p>
                  Worked across stakeholders with an emphasis on communication
                  and coordination.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="expertise"
          className="section wrap"
          aria-labelledby="expertise-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / PROVEN TOOLKIT</p>
              <h2 id="expertise-title">
                Skills tied to evidence<span>.</span>
              </h2>
            </div>
            <p>
              Tools matter most when they
              <br />
              help move real work forward.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, items, evidence }) => (
              <article className="skill-group" key={title}>
                <Icon size={25} strokeWidth={1.4} />
                <h3>{title}</h3>
                <p>{evidence}</p>
                <div className="skill-list">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="certifications">
            <p className="eyebrow">SELECTED CREDENTIALS</p>
            <div>
              <span>
                <CheckCircle2 size={15} /> IBM Data Science Expert Certification
              </span>
              <span>
                <CheckCircle2 size={15} /> Samsung PRISM Research Program
              </span>
              <span>
                <CheckCircle2 size={15} /> Programming with MATLAB
              </span>
            </div>
          </div>
        </section>

        <section
          className="contact-section wrap"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">
            <span className="status-dot" /> AVAILABLE FOR THE RIGHT TEAM
          </p>
          <div className="contact-row">
            <h2 id="contact-title">
              From research questions
              <br />
              to useful products<span>.</span>
            </h2>
            <a
              className="contact-arrow"
              href={email}
              aria-label="Email Arnav Hooda"
            >
              <ArrowUpRight strokeWidth={1} />
            </a>
          </div>
          <div className="contact-bottom">
            <a className="email-link" href={email}>
              <Mail size={19} /> arnavhooda@gmail.com
            </a>
            <p>
              Exploring opportunities in AI/ML,
              <br />
              data science, and software engineering.
            </p>
          </div>
        </section>
      </main>

      <footer className="wrap site-footer">
        <a href="#main" className="wordmark">
          arnav<span>.</span>
        </a>
        <span>© 2026 Arnav Hooda</span>
        <div>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub <Code2 size={14} />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href="/arnav-hooda-resume.pdf" download>
            Resume <Download size={14} />
          </a>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
