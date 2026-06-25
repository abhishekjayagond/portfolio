import { useState, useEffect } from "react";
import imgInterviewMain from "../screenshots/interview_ui_2026-05-17_19-17-02.png";
import imgInterviewHover from "../screenshots/interview_ui_2026-05-17_19-17-22.png";

// ─── Icons ────────────────────────────────────────────────────────────────────
const IconGithub = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconMenu = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ─── Typography Design System ───
const TYPO = {
  sectionTitle: "text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight",
  bodyText: "text-zinc-400 text-[15px] md:text-base leading-relaxed",
  mutedText: "text-zinc-500 text-xs md:text-sm tracking-wide",
  labelText: "text-xs font-semibold tracking-[0.18em] text-zinc-500 uppercase",
  chipText: "text-xs tracking-wide"
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "JavaScript (ES6+)", "Java", "C", "C++"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    label: "Computer Vision & ML",
    items: ["OpenCV", "DeepFace", "TensorFlow", "Matplotlib"],
  },
  {
    label: "Backend & Databases",
    items: ["MySQL", "JDBC", "REST APIs"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Vite", "Vercel"],
  },
  {
    label: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
];

const projects = [
  {
    number: "01",
    title: "Emotion-Aware Interview Coach",
    subtitle: "Emotion-aware interview simulator with adaptive flow and behavioral analytics.",
    description:
      "A local-first Python interview simulator that pairs real-time facial emotion analysis with an adaptive state-machine flow. To maintain UI responsiveness, the application isolates video capture and ML inference workloads into separate threads, minimizing frame-rate drops. Uses OpenCV and DeepFace/TensorFlow for live analytics, applying temporal smoothing heuristics to stabilize emotion detection, with session data persisted locally to generate performance reports.",
    tags: ["Python", "OpenCV", "DeepFace", "TensorFlow", "Matplotlib"],
    features: [
      "State-machine driven interview simulator with adaptive flow and questioning",
      "Multi-threaded model inference with temporal smoothing for real-time tracking stability",
      "Cinematic interface rendered directly in camera frames via OpenCV + Pillow (PIL)",
      "Local-first session analytics and Matplotlib-generated behavioral summaries"
    ],
    github: "https://github.com/abhishekjayagond/emotion-aware-interview-coach",
    demo: null,
    featured: true,
    image: imgInterviewMain,
    hoverImage: imgInterviewHover,
  },
  {
    number: "02",
    title: "Smart Parking Management System",
    description:
      "A desktop-based application implementing parking slot allocation logic for multiple vehicle classes (cars, bikes, EVs) with real-time tracking of entry/exit states. Utilizes a Java Swing UI workflow for operations and handles record persistence via JDBC integrations, executing prepared SQL statements against a normalized MySQL database to compute duration-based billing fees on exit.",
    tags: ["Java Swing", "MySQL", "JDBC"],
    github: "#",
    demo: null,
  },
  {
    number: "03",
    title: "Portfolio Web Project",
    description:
      "A responsive portfolio website developed using a modular React component structure and Vite for fast development and build compilation. Styled with Tailwind CSS for a custom, responsive dark-theme design, the application focuses on high performance, clean layout architecture, and version-controlled automated deployment workflows on Vercel.",
    tags: ["React", "Tailwind CSS", "Vite", "Vercel"],
    github: "https://github.com/abhishekjayagond/portfolio",
    demo: "https://abhishekjayagond.vercel.app/",
  },
];

// ─── Helper: Section label ─────────────────────────────────────────────────────
const SectionLabel = ({ text }) => (
  <p className={`${TYPO.labelText} mb-4`}>
    {text}
  </p>
);

// ─── Helper: Link button (ghost) ──────────────────────────────────────────────
const GhostLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-sm text-zinc-400 border border-zinc-800 rounded-md px-3 py-1.5 hover:text-white hover:border-zinc-600 transition-colors"
  >
    {children}
  </a>
);

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "About",    id: "about"    },
    { label: "Skills",   id: "skills"   },
    { label: "Projects", id: "projects" },
    { label: "Contact",  id: "contact"  },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-400 selection:bg-indigo-900/60 selection:text-white">

      {/* ── Navbar ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-zinc-800/60 backdrop-blur-xl bg-[#09090b]/80" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <button
            onClick={() => goto("hero")}
            className="text-white font-semibold text-base tracking-tight hover:text-zinc-300 transition-colors"
          >
            Abhishek Jayagond.
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => goto(id)}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden border-t border-zinc-800/60 bg-[#09090b] px-6 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => goto(id)}
                className="text-left py-3 text-zinc-300 hover:text-white text-base font-medium border-b border-zinc-800/40 last:border-none transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Main ── */}
      <main className="max-w-6xl mx-auto px-6">

        {/* ── Hero ── */}
        <section
          id="hero"
          className="min-h-screen flex items-center pt-16"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20">
            {/* Left */}
            <div>
              <p className="text-sm font-medium text-indigo-400 mb-5 tracking-wide">
                Hi, I'm Abhishek Jayagond. 👋
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                Building practical<br />software & systems.
              </h1>

              <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-10">
                CS student focusing on React frontend development, Python computer vision experimentation, and database-driven software.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => goto("projects")}
                  className="px-5 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors"
                >
                  View Projects
                </button>
                <button
                  onClick={() => goto("contact")}
                  className="px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-200 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>

            <div className="hidden md:flex justify-end">
              <div className="relative w-[320px] h-[360px]">
                {/* Very subtle glow — only here */}
                <div className="absolute inset-0 rounded-2xl bg-indigo-600/[0.15] blur-3xl scale-110"></div>
                <div className="relative w-full h-full rounded-2xl border border-zinc-700 bg-zinc-900/75 p-5 flex flex-col justify-between overflow-hidden text-left">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[10px] font-mono tracking-wider text-zinc-300">CV_INFERENCE_ENGINE</span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500">FPS: 30 / 12ms</span>
                  </div>

                  {/* Main visual panel */}
                  <div className="my-4 flex-1 flex flex-col justify-center gap-4">
                    {/* Face mesh box simulator */}
                    <div className="relative border border-zinc-800/50 rounded-lg h-[145px] bg-zinc-950/85 overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(#1f1f23_1px,transparent_1px)] [background-size:12px_12px] opacity-40"></div>
                      <div className="relative w-[75%] h-[75%] border border-indigo-500/20 rounded flex items-center justify-center">
                        {/* Reticle corners */}
                        <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-indigo-400/40 rounded-tl-sm"></div>
                        <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-indigo-400/40 rounded-tr-sm"></div>
                        <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-indigo-400/40 rounded-bl-sm"></div>
                        <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-indigo-400/40 rounded-br-sm"></div>
                        
                        <span className="text-[9px] font-mono text-indigo-400/80 tracking-wider">TRACKING [FACE_01]</span>
                      </div>
                    </div>

                    {/* Metric bars representing confidence ratings */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[10px] font-mono mb-1">
                          <span className="text-zinc-400">ATTENTIVENESS</span>
                          <span className="text-zinc-300 font-semibold">94.2%</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800/80 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full" style={{ width: "94.2%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-mono mb-1">
                          <span className="text-zinc-400">EMOTION ANALYSIS</span>
                          <span className="text-zinc-300 font-semibold">86.7%</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800/80 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500/60 rounded-full" style={{ width: "86.7%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer status */}
                  <div className="border-t border-zinc-800/80 pt-3 flex justify-between items-center text-[9px] font-mono text-zinc-500">
                    <span>MODEL: DEEPFACE (VGG-FACE)</span>
                    <span>STATE: ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <hr className="border-zinc-800" />

        {/* ── About ── */}
        <section id="about" className="py-32">
          <SectionLabel text="About" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <h2 className={TYPO.sectionTitle}>
              Engineering practical<br />software systems.
            </h2>
            <div className={`space-y-5 ${TYPO.bodyText}`}>
              <p>
                I am a Computer Science undergraduate focused on engineering practical, interactive software systems. My experience ranges from developing responsive web frontends in React to building multi-threaded computer vision applications in Python and database-driven desktop systems in Java.
              </p>
              <p>
                I design software with a structured approach, bridging clean interface design with organized backend logic. Grounded in core CS fundamentals—including Data Structures, OOP, DBMS, and Computer Networks—I prioritize robust logic and efficient structure over decorative complexity.
              </p>
              <p>
                Currently seeking engineering internships to contribute to frontend development, computer vision systems, or database-driven backend workflows.
              </p>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <hr className="border-zinc-800" />

        {/* ── Skills ── */}
        <section id="skills" className="py-24">
          <SectionLabel text="Skills & Tools" />
          <h2 className={`${TYPO.sectionTitle} mb-10`}>
            My stack.
          </h2>

          <div className="divide-y divide-white/[0.06]">
            {skillGroups.map(({ label, items }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0 py-5"
              >
                {/* Left: category label */}
                <div className="sm:w-52 shrink-0 pt-1">
                  <span className={TYPO.labelText}>
                    {label}
                  </span>
                </div>

                {/* Right: pills */}
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className={`${TYPO.chipText} text-zinc-300 border border-zinc-800/80 rounded-md px-3 py-1.5 hover:text-white hover:border-zinc-600 transition-colors duration-150 cursor-default bg-zinc-900/20`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <hr className="border-zinc-800" />

        {/* ── Foundations & Certifications ── */}
        <section id="certifications" className="py-24">
          <SectionLabel text="Foundations & Certifications" />
          <h2 className={`${TYPO.sectionTitle} mb-10`}>
            Academic & Technical Pillars
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-12">
            {/* Left Column: Academic Foundations */}
            <div className="md:col-span-6 space-y-6">
              <div>
                <h3 className={`${TYPO.labelText} mb-2.5`}>Core CS Foundations</h3>
                <p className={TYPO.bodyText}>
                  Solid grounding in core computer science curriculum topics: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, and Computer Networks.
                </p>
              </div>
              <div>
                <h3 className={`${TYPO.labelText} mb-2.5`}>Problem Solving & Practice</h3>
                <p className={TYPO.bodyText}>
                  Continuous development through active problem solving, resolving 50+ DSA and algorithmic problems across LeetCode and HackerRank to refine optimization and analytical skill.
                </p>
              </div>
            </div>

            {/* Right Column: Industry Certifications */}
            <div className="md:col-span-5 md:col-start-8 space-y-4">
              <h3 className={`${TYPO.labelText} mb-4`}>Certifications</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-[15px] md:text-base font-medium text-zinc-200 block">Cloud Computing & Internet of Things</span>
                    <span className={TYPO.mutedText}>NPTEL (IIT Certified) • 2025 - 2026</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-[15px] md:text-base font-medium text-zinc-200 block">Introduction to Networks & Operating Systems</span>
                    <span className={TYPO.mutedText}>Cisco Networking Academy • 2025 - 2026</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                  <div>
                    <span className="text-[15px] md:text-base font-medium text-zinc-200 block">Data Visualization Job Simulation</span>
                    <span className={TYPO.mutedText}>Tata Group (via Forage) • 2026</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <hr className="border-zinc-800" />

        {/* ── Projects ── */}
        <section id="projects" className="py-32">
          <SectionLabel text="Selected Projects" />
          <h2 className={`${TYPO.sectionTitle} mb-14`}>
            Things I've Built.
          </h2>

          <div className="space-y-8">
            {projects.map((p) =>
              p.featured ? (
                /* ── Featured card ── */
                <div
                  key={p.number}
                  className="group relative rounded-xl border border-indigo-500/25 bg-indigo-950/10 hover:bg-indigo-950/20 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden flex flex-col lg:flex-row"
                  style={{ boxShadow: "0 0 0 1px rgba(99,102,241,0.08), 0 4px 32px -8px rgba(99,102,241,0.12)" }}
                >
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-indigo-500/60 group-hover:bg-indigo-400/80 transition-colors duration-300 z-10" />

                  <div className="p-8 md:p-9 pl-9 md:pl-11 flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div className="flex items-baseline gap-3">
                        <span className="text-[11px] font-mono text-indigo-500/70 shrink-0 mt-0.5">{p.number}</span>
                        <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors leading-snug">
                          {p.title}
                        </h3>
                      </div>
                      {/* Subtle badge */}
                      <span className="shrink-0 text-[10px] font-semibold tracking-widest uppercase text-indigo-400/70 border border-indigo-500/25 px-2 py-0.5 rounded-full bg-indigo-500/[0.06] mt-0.5">
                        Featured
                      </span>
                    </div>

                    {/* Description */}
                    {p.subtitle && (
                      <p className={`${TYPO.mutedText} mb-4 pl-6 font-medium text-indigo-300/80`}>
                        {p.subtitle}
                      </p>
                    )}
                    <p className={`${TYPO.bodyText} max-w-2xl mb-6 pl-6`}>
                      {p.description}
                    </p>

                    {/* Feature pills */}
                    <div className="pl-6 flex flex-wrap gap-2 mb-8">
                      {p.features.map((f) => (
                        <span
                          key={f}
                          className={`inline-flex items-center gap-1.5 ${TYPO.chipText} text-indigo-300/80 bg-indigo-500/[0.08] border border-indigo-500/20 px-2.5 py-1 rounded-md`}
                        >
                          <span className="w-1 h-1 rounded-full bg-indigo-400/60 shrink-0" />
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="pl-6 flex flex-wrap items-center gap-4 mt-2">
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`inline-flex items-center gap-1 ${TYPO.chipText} font-mono text-zinc-500 bg-zinc-900 border border-white/[0.07] px-2.5 py-1 rounded-md`}
                          >
                            <span className="w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-2 shrink-0">
                        <GhostLink href={p.github}>
                          <IconGithub />
                          GitHub
                        </GhostLink>
                        {p.demo && (
                          <GhostLink href={p.demo}>
                            <IconArrow />
                            Live Demo
                          </GhostLink>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Optional Image / Support */}
                  {(p.image || p.imagePlaceholder) && (
                    <div className="lg:w-[48%] bg-zinc-900/30 border-t lg:border-t-0 lg:border-l border-indigo-500/10 flex items-center justify-center p-8 lg:p-8">
                      {p.image ? (
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-indigo-500/20 shadow-xl group/img bg-black/40">
                          <img 
                            src={p.image} 
                            alt={p.title} 
                            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500" 
                          />
                          {p.hoverImage && (
                            <img 
                              src={p.hoverImage} 
                              alt={`${p.title} overlay`} 
                              className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" 
                            />
                          )}
                        </div>
                      ) : (
                        <div className="w-full aspect-video rounded-lg border border-dashed border-indigo-500/30 bg-indigo-500/5 flex items-center justify-center text-center p-6 transition-all hover:bg-indigo-500/10 hover:border-indigo-500/50">
                          <div className="flex flex-col items-center gap-3 opacity-60">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                              <circle cx="8.5" cy="8.5" r="1.5"></circle>
                              <polyline points="21 15 16 10 5 21"></polyline>
                            </svg>
                            <span className="text-xs font-mono text-indigo-300">{p.imagePlaceholder}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                /* ── Standard card ── */
                <div
                  key={p.number}
                  className="group rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.14] transition-all duration-200"
                >
                  <div className="p-7 md:p-8">
                    {/* Header row: number + title */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-baseline gap-3">
                        <span className="text-[11px] font-mono text-zinc-600 shrink-0 mt-0.5">{p.number}</span>
                        <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors leading-snug">
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className={`${TYPO.bodyText} max-w-2xl mb-6 pl-6`}>
                      {p.description}
                    </p>

                    {/* Footer row */}
                    <div className="pl-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`inline-flex items-center gap-1 ${TYPO.chipText} font-mono text-zinc-500 bg-zinc-900 border border-white/[0.07] px-2.5 py-1 rounded-md`}
                          >
                            <span className="w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <GhostLink href={p.github}>
                          <IconGithub />
                          GitHub
                        </GhostLink>
                        {p.demo && (
                          <GhostLink href={p.demo}>
                            <IconArrow />
                            Live Demo
                          </GhostLink>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* ── Divider ── */}
        <hr className="border-zinc-800" />

        {/* ── Contact ── */}
        <section id="contact" className="py-32 pb-40">
          <SectionLabel text="Contact" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className={`${TYPO.sectionTitle} mb-4`}>
                Let's work together.
              </h2>
              <p className={`${TYPO.bodyText} max-w-sm`}>
                I'm open to internships, collaborative projects, and any interesting opportunities. Reach out — I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email row */}
              <a
                href="mailto:abhishekjaygond@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group"
              >
                <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors">
                  <IconMail />
                </span>
                <div>
                  <p className={`${TYPO.mutedText} mb-0.5 text-zinc-600`}>Email</p>
                  <p className="text-sm font-medium text-zinc-200">abhishekjaygond@gmail.com</p>
                </div>
              </a>

              {/* GitHub row */}
              <a
                href="https://github.com/abhishekjayagond"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group"
              >
                <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors">
                  <IconGithub />
                </span>
                <div>
                  <p className={`${TYPO.mutedText} mb-0.5 text-zinc-600`}>GitHub</p>
                  <p className="text-sm font-medium text-zinc-200">github.com/abhishekjayagond</p>
                </div>
              </a>

              {/* LinkedIn row */}
              <a
                href="https://www.linkedin.com/in/abhishek-jayagond-b94760330"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all group"
              >
                <span className="text-zinc-500 group-hover:text-indigo-400 transition-colors">
                  <IconLinkedin />
                </span>
                <div>
                  <p className={`${TYPO.mutedText} mb-0.5 text-zinc-600`}>LinkedIn</p>
                  <p className="text-sm font-medium text-zinc-200">linkedin.com/in/abhishek-jayagond</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-600 text-sm">
          <span className={TYPO.mutedText}>Abhishek Jayagond — CS Undergraduate & Developer</span>
          <span className={`${TYPO.mutedText} font-mono`}>Built with React + Tailwind</span>
        </div>
      </footer>

    </div>
  );
}
