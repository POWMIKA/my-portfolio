"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const chipColors = [
  { bg: "#e3ecff", text: "#3556b8", dot: "#4d7cfe" },
  { bg: "#ece4ff", text: "#6a4fc4", dot: "#8b6cf0" },
  { bg: "#ddf5e8", text: "#2a7a55", dot: "#3fb37f" },
  { bg: "#fff0d6", text: "#a8650f", dot: "#f0a431" },
  { bg: "#ffe3ea", text: "#b3395a", dot: "#f06a8e" },
  { bg: "#dcf3fb", text: "#1f7894", dot: "#35b4d8" },
];

const projects = [
  {
    title: "SemiconMart",
    category: "B2B Semiconductor Platform",
    description:
      "A technology-driven platform for semiconductor procurement, sourcing and supply-chain operations.",
    details:
      "SemiconMart is a B2B marketplace that connects buyers and suppliers in the semiconductor industry. I built the Phase 1 frontend, focusing on a clean, responsive interface for browsing components, sourcing and procurement enquiries.",
    features: [
      "Responsive B2B storefront for semiconductor sourcing",
      "Smooth animated interface built with Framer Motion",
      "Enquiry and contact flow using Nodemailer",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Framer Motion",
      "Nodemailer",
    ],
    image: "/images/projects/semiconmart-site.png",
    logo: "/images/projects/semiconmart-logo.png",
    link: "https://semiconmart.io/",
    linkText: "Visit website",
    accent: "#4d7cfe",
    soft: "#edf2ff",
    gradient:
      "linear-gradient(135deg, #d6e2ff 0%, #e8eeff 55%, #efe6ff 100%)",
    glow: "#b7c9ff",
  },
  {
    title: "WintenseCare",
    category: "Real-Time Healthcare Platform",
    description:
      "A real-time wearable health monitoring platform with live dashboards, telemetry and ECG visualization.",
    details:
      "WintenseCare is a real-time patient monitoring platform that receives data from connected wearable medical devices and shows it live to care teams. It is currently in development.",
    features: [
    "Patient Dashboard for health readings, telemetry, and monitoring",
    "Doctor Dashboard for patient monitoring, ECG visualization, and health alerts",
    "NOC Dashboard for centralized device monitoring and alert management",
    "REST APIs for authentication, patient data, devices, and dashboard operations",
    "WebSockets for real-time telemetry updates and ECG data streaming",
    "Shared backend connecting all dashboards through centralized services",
    "PostgreSQL database integration using Prisma ORM",
  ],
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "WebSockets",
      "RESTful APIs",
      "Docker",
      "Kubernetes",
      "Thunder Client",
      "Framer Motion",
      "Material UI",
      "JWT Authentication",
      

    ],
    image: "/images/projects/wintensecare-site.png",
    logo: "/images/projects/wintensecare-logo.png",
    link: "#",
    linkText: "In development",
    accent: "#3f9d70",
    soft: "#e8f6ee",
    gradient:
      "linear-gradient(135deg, #cdeedb 0%, #e5f5ec 55%, #dcf3fb 100%)",
    glow: "#b4e4c8",
  },
  {
    title: "Itonus",
    category: "MERN Stack Web Application",
    description:
      "A full-stack web application with authentication and responsive interfaces.",
    details:
      "Itonus is a full-stack web application built on the MERN stack. It includes user authentication, a REST API backend and responsive interfaces that work across desktop and mobile.",
    features: [
      "User authentication and protected routes",
      "REST API with Express and MongoDB",
      "Fully responsive React interface",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Nodemailer",],
    image: "/images/projects/itonus-site.png",
    logo: "/images/projects/itonus-logo.webp",
    link: "https://www.itonus.co.in/",
    linkText: "Visit website",
    accent: "#8466c4",
    soft: "#f3edfb",
    gradient:
      "linear-gradient(135deg, #e6dbf8 0%, #f3edfb 55%, #fde9ee 100%)",
    glow: "#d9c3f2",
  },
  {
    title: "Prasiddhi Vidyodaya",
    category: "School Website",
    description:
      "A responsive school website presenting academics, activities and announcements.",
    details:
      "A modern website for Prasiddhi Vidyodaya school that presents academics, activities, announcements and institutional information to parents and students, with a Node.js and MongoDB backend.",
    features: [
      "Clear sections for academics, activities and announcements",
      "Responsive layout for parents on mobile devices",
      "Express and MongoDB backend for dynamic content",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Express", "Node.js", "MongoDB"],
    image: "/images/projects/prasiddhi-site.png",
    logo: "/images/projects/prasiddhi-logo.png",
    link: "https://www.prasiddhividyodaya.com/",
    linkText: "Visit website",
    accent: "#d0883f",
    soft: "#fff3e3",
    gradient:
      "linear-gradient(135deg, #ffe6c7 0%, #fff3e3 55%, #ffe3ea 100%)",
    glow: "#ffd3a1",
  },
];

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected =
    selectedIndex === null
      ? null
      : {
          ...projects[selectedIndex],
          accent: "#8063ad",
          soft: "#f3f0fa",
          gradient:
            "linear-gradient(135deg, #e8eeff 0%, #f3edfb 55%, #f7f8fa 100%)",
        };

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const updateScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  useEffect(() => {
    updateScroll();
    window.addEventListener("resize", updateScroll);
    return () => window.removeEventListener("resize", updateScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const current = Math.round(progress * (projects.length - 1));

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
      <section
      id="projects"
      className="relative overflow-hidden bg-[#e6edf4] py-20 md:py-28"
    >
      {/* soft background glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#4d7cfe]/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading row */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-[#2d628c]"
              />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#2d628c]">
                04 / Selected Work
              </p>
            </motion.div>

          <motion.h2
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  className="mt-5 text-[clamp(2.5rem,5.5vw,5rem)] font-medium leading-[1.02] tracking-[-0.05em] text-[#0f1f2e]"
>
  <span className="block overflow-hidden pb-2">
    <motion.span
      className="block"
      variants={{
        hidden: { y: "110%" },
        show: {
          y: 0,
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      Things I&apos;ve
    </motion.span>
  </span>

  <span className="block overflow-hidden py-2 -mt-2">
    <motion.span
      className="block text-[#2d628c]"
      variants={{
        hidden: { y: "110%" },
        show: {
          y: 0,
          transition: {
            duration: 0.9,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
        <motion.span
        className="inline-block"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        built.
      </motion.span>
    </motion.span>
  </span>
</motion.h2>
          </div>

                  {/* Arrows */}
         <div className="flex shrink-0 translate-y-7 gap-2">
            <motion.button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              tabIndex={canPrev ? 0 : -1}
              aria-hidden={!canPrev}
              aria-label="Previous projects"
              animate={{ opacity: canPrev ? 1 : 0, scale: canPrev ? 1 : 0.8 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.3 }}
              style={{ pointerEvents: canPrev ? "auto" : "none" }}
              className="flex h-12 w-16 items-center justify-center rounded-full border border-[#0f1f2e] text-[#0f1f2e] transition-colors duration-300 hover:bg-[#0f1f2e] hover:text-white"
            >
              <ArrowLeft size={18} />
            </motion.button>

            <motion.button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              tabIndex={canNext ? 0 : -1}
              aria-hidden={!canNext}
              aria-label="Next projects"
              animate={{ opacity: canNext ? 1 : 0, scale: canNext ? 1 : 0.8 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.3 }}
              style={{ pointerEvents: canNext ? "auto" : "none" }}
              className="flex h-12 w-16 items-center justify-center rounded-full border border-[#0f1f2e] text-[#0f1f2e] transition-colors duration-300 hover:bg-[#0f1f2e] hover:text-white"
            >
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* Cards carousel */}
        <div
          ref={scrollerRef}
          onScroll={updateScroll}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => {
            const live = project.link !== "#";

            return (
              <motion.article
                key={project.title}
                data-card
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)]"
              >
                               {/* Image */}
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`View ${project.title} details`}
                  className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#cfdae6] bg-[#dbe5ee] text-left"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} website`}
                    fill
                    sizes="(max-width: 768px) 85vw, 33vw"
                    className="object-contain transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />

                  {/* status */}
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-[#344256] shadow-sm backdrop-blur">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        live ? "bg-emerald-500" : "bg-amber-500"
                      }`}
                    />
                    {live ? "Live" : "In development"}
                  </span>

                  {/* hover arrow */}
                  <span className="absolute right-3 top-3 flex h-10 w-10 -translate-y-2 items-center justify-center rounded-full bg-white text-[#0f1f2e] opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </span>
                </button>

                {/* Text */}
                <div className="mt-5">
                                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#cfdae6] bg-white p-1.5">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={32}
                        height={32}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="inline-flex rounded-full border border-[#0f1f2e] px-3 py-1 text-[11px] uppercase tracking-[0.06em] text-[#0f1f2e]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-[#0f1f2e] md:text-[1.7rem]">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-[15px] leading-6 text-[#5b6b7b]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      className="group/link inline-flex items-center gap-2 border-b border-[#2d628c] pb-0.5 text-sm font-medium text-[#2d628c]"
                    >
                      View details
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      >
                        →
                      </span>
                    </button>

                    {live && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-[#5b6b7b] transition-colors hover:text-[#0f1f2e]"
                      >
                        Visit website
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Progress + counter */}
        <div className="mt-8 flex items-center gap-6">
          <span className="text-xs tabular-nums tracking-[0.18em] text-[#5b6b7b]">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
          <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-[#c5d1de]">
            <div
              className="h-full origin-left bg-[#2d628c] transition-transform duration-300"
              style={{ transform: `scaleX(${Math.max(progress, 0.25)})` }}
            />
          </div>
        </div>
      </div>

      {/* Details popup */}
        <AnimatePresence>
          {selected && (
            <motion.div
              key="project-modal"
             data-lenis-prevent
              className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#11182a]/55 p-4 backdrop-blur-sm sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) setSelectedIndex(null);
              }}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative my-auto max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/80 bg-white shadow-2xl"
              >
                {/* Header */}
                <div
                  className="relative px-6 py-6 sm:px-8"
                  style={{ background: selected.gradient }}
                >
                  <div className="flex items-center gap-4 pr-10">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
                      <Image
                        src={selected.logo}
                        alt={`${selected.title} logo`}
                        width={44}
                        height={44}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-[0.14em]"
                        style={{ color: selected.accent }}
                      >
                        {selected.category}
                      </p>
                      <h3
                        id="project-modal-title"
                        className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-[#172033] sm:text-3xl"
                      >
                        {selected.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedIndex(null)}
                    aria-label="Close project details"
                    className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-xl text-[#354057] transition hover:rotate-90 hover:bg-white"
                  >
                    ×
                  </button>
                </div>

                {/* Body */}
                <div
                  className="space-y-6 px-6 py-6 sm:px-8"
                  style={{
                    background: `linear-gradient(180deg, ${selected.soft} 0%, #ffffff 60%)`,
                  }}
                >
                  <div className="relative h-52 overflow-hidden rounded-xl shadow-md ring-4 ring-white sm:h-60">
                    <Image
                      src={selected.image}
                      alt={`${selected.title} website`}
                      fill
                      sizes="(max-width: 768px) 100vw, 640px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#8790a1]">
                      About the project
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-[#536078]">
                      {selected.details}
                    </p>
                  </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#8790a1]">
                    Key features
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {selected.features.map((f, i) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-3 text-sm leading-6 text-[#45516a]"
                      >
                        <span
                          className="mt-2 h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: selected.accent }}
                        />
                        <span>{f}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#8790a1]">
                    Technologies used
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                                      {selected.tech.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.04 }}
                        whileHover={{ y: -2 }}
                        className="inline-flex items-center rounded-full bg-[#f1f3fa] px-3.5 py-1.5 text-xs font-semibold text-[#4f5b72] ring-1 ring-[#e6e9f3]"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap justify-end gap-2 border-t border-[#e8e8ed] pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(null)}
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#45516a] ring-1 ring-[#e1e4ec] transition hover:bg-[#f6f7fa]"
                  >
                    Close
                  </button>

                  {selected.link !== "#" ? (
                    <a
                      href={selected.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-85"
                      style={{ backgroundColor: selected.accent }}
                    >
                      Visit website
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-[#eef0f5] px-5 py-2.5 text-sm font-medium text-[#8790a1]">
                      In development
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}