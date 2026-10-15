
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "DIKITE Pvt Ltd",
    period: "Oct 2025 — Present",
    location: "Chennai, India",
    logo: "/images/experience/dikite-logo.png",
    accent: "#5577c5",
       soft: "#edf2ff",
    gradient:
      "linear-gradient(135deg, #d6e2ff 0%, #e8eeff 55%, #efe6ff 100%)",
    glow: "#b7c9ff",
    summary:
      "Building full-stack applications, responsive interfaces, backend APIs, and real-time healthcare solutions.",
  
responsibilities: [
  "Developed the Phase 1 frontend of SemiconMart, a B2B semiconductor platform, using Next.js, Tailwind CSS, and Framer Motion, with backend integration using Node.js, Express.js, and NodeMailer.",

  "Contributed to a real-time wearable healthcare monitoring platform featuring patient dashboards, ECG visualizations, telemetry, vitals,  REST APIs, and WebSockets.",

  "Developed full-stack features for Itonus, a MERN stack web application, including authentication, role-based authorization, REST APIs, and responsive user interfaces.",

  "Developed and maintained the Prasiddhi Vidyodaya School website using Next.js, React, Tailwind CSS, Node.js, Express.js, and MongoDB.",

  "Worked on Android applications using Kotlin and integrated wearable medical device data with backend services.",

  "Worked with React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Docker, and Kubernetes across application development and deployment workflows.",

  "Contributed to application deployment and maintenance using Vercel, Hostinger, and Render, and supported Play Store publishing activities. Used Git and GitHub for version control.",
],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "RestFul APIs",
      "GraphQL",
      "WebSockets",
      "Kotlin",
      "Tailwind css",
      "Framer Motion",
      "Docker",
      "Prisma ORM",
      "Kubernetes",
      "NodeMailer",
      "Git",
      "Github",
      "Vercel",
      "Render",
      "Hostinger",
      "Play store",
    ],
  },
  {
    role: "Data Analyst",
    company: "Straive",
    period: "Jun 2025 — Oct 2025",
    location: "Chennai, India",
    logo: "/images/experience/straive-logo.webp",
    accent: "#8966b9",
        soft: "#f3edfb",
    gradient:
      "linear-gradient(135deg, #e6dbf8 0%, #f3edfb 55%, #fde9ee 100%)",
    glow: "#d9c3f2",
    summary:
      "Worked on editing and styling content, focusing on formatting, consistency, and presentation.",
    responsibilities: [
      "Edited content and applied styling to improve readability and presentation.",
      "Worked on content formatting and layout consistency.",
    ],
    technologies: ["Content Editing", "Styling", "Formatting", "Quality Checks"],
  },
];

const chipColors = [
  { bg: "#e3ecff", text: "#3556b8", dot: "#4d7cfe" },
  { bg: "#ece4ff", text: "#6a4fc4", dot: "#8b6cf0" },
  { bg: "#ddf5e8", text: "#2a7a55", dot: "#3fb37f" },
  { bg: "#fff0d6", text: "#a8650f", dot: "#f0a431" },
  { bg: "#ffe3ea", text: "#b3395a", dot: "#f06a8e" },
  { bg: "#dcf3fb", text: "#1f7894", dot: "#35b4d8" },
];

export default function Experience() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected =
    selectedIndex === null ? null : experiences[selectedIndex];

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
      id="experience"
      className="relative overflow-hidden bg-[#f1f3fa] px-5 py-16 sm:px-8 md:py-20"
    >
      {/* Background decoration */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full bg-[#dedfff]/70 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#8966b9]" />
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#8063ad]">
              03 / Experience
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.045em] text-[#172033] sm:text-4xl md:text-[2.8rem]">
            My professional{" "}
            <motion.span
              className="inline-block text-[#8063ad]"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              journey.
            </motion.span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#667087] sm:text-base">
            A look at the roles, projects, and skills shaping my career.
          </p>
        </motion.div>

      
{/* Vertical animated timeline */}
<div className="relative mt-9">
  {/* Timeline track */}
  <div className="absolute bottom-10 left-[15px] top-10 w-px bg-[#d4d9e8] sm:left-[19px]" />

  {/* Animated line */}
  <motion.div
    className="absolute left-[15px] top-10 w-[2px] origin-top bg-gradient-to-b from-[#6686d5] via-[#9a79cb] to-[#b8a4dc] sm:left-[19px]"
    initial={{ scaleY: 0 }}
    whileInView={{ scaleY: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.4, ease: "easeInOut" }}
    style={{ height: "calc(100% - 5rem)" }}
  />

  <div className="space-y-7">
    {experiences.map((item, index) => (
      <div key={item.company} className="relative pl-10 sm:pl-12">
        {/* Timeline node */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.25 + index * 0.25,
            type: "spring",
            stiffness: 220,
          }}
          className="absolute left-[7px] top-7 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white shadow-sm sm:left-[11px]"
          style={{ backgroundColor: item.accent }}
        />

        {/* Experience card */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.55,
            delay: index * 0.15,
            ease: "easeOut",
          }}
          whileHover={{ x: 4, y: -3 }}
                    className="relative isolate overflow-hidden rounded-2xl border border-white/70 p-5 shadow-[0_6px_24px_rgba(36,48,85,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_32px_rgba(36,48,85,0.13)] sm:p-6"
          style={{ background: item.gradient }}
        >
          <div
            className="absolute left-0 top-0 h-full w-1"
            style={{ backgroundColor: item.accent }}
          />

                  <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-14 -top-16 -z-10 h-44 w-44 rounded-full blur-2xl"
            style={{ backgroundColor: item.glow, opacity: 0.6 }}
            animate={{ x: [0, -14, 0], y: [0, 12, 0], scale: [1, 1.15, 1] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.8,
            }}
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex min-w-0 flex-1 items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#e9eaf1] bg-white p-2 shadow-sm">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: item.accent }}
                >
                  {item.period}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#172033] sm:text-2xl">
                  {item.role}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#596579]">
                  {item.company}
                </p>

                <p className="mt-1 text-xs text-[#8790a1]">
                  {item.location}
                </p>
              </div>
            </div>

          </div>

             <p className="mt-4 text-sm leading-6 text-[#4f5b72]">
            {item.summary}
          </p>

          <button
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: item.accent }}
          >
            View details <span aria-hidden="true">→</span>
          </button>
        </motion.article>
      </div>
    ))}
  </div>
</div>


        <p className="mt-5 text-center text-xs text-[#8991a2]">
          Select a role to explore responsibilities and technologies.
        </p>
      </div>

      {/* Details popup */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="experience-modal"
                       data-lenis-prevent
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#11182a]/55 p-4 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedIndex(null);
              }
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="experience-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative my-auto max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/80 bg-[#fffefa] shadow-2xl"
            >
              {/* Modal header */}
              <div
                className="relative overflow-hidden px-6 py-6 sm:px-8 sm:py-7"
                 style={{ background: selected.gradient }}
              >
                <div className="flex items-start gap-4 pr-10">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white bg-white p-2 shadow-sm">
                    <Image
                      src={selected.logo}
                      alt={`${selected.company} logo`}
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
                      {selected.period}
                    </p>

                    <h3
                      id="experience-modal-title"
                      className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#172033] sm:text-3xl"
                    >
                      {selected.role}
                    </h3>

                    <p className="mt-1 font-medium text-[#596579]">
                      {selected.company}
                    </p>

                    <p className="mt-1 text-sm text-[#788397]">
                      {selected.location}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Close experience details"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-white/80 text-xl text-[#354057] transition hover:rotate-90 hover:bg-white"
                >
                  ×
                </button>
              </div>

              {/* Modal body */}
                          <div
                className="space-y-7 px-6 py-6 sm:px-8 sm:py-8"
                style={{
                  background: `linear-gradient(180deg, ${selected.soft} 0%, #ffffff 65%)`,
                }}
              >
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#8790a1]">
                    Overview
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-[#536078]">
                    {selected.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#8790a1]">
                    Responsibilities and contributions
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {selected.responsibilities.map((responsibility, i) => (
                      <motion.li
                        key={responsibility}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-3 text-sm leading-6 text-[#45516a]"
                      >
                        <span
                          className="mt-2 h-2 w-2 shrink-0 rounded-full"
                          style={{ backgroundColor: selected.accent }}
                        />
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#8790a1]">
                    Technologies and skills
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                                      {selected.technologies.map((technology, i) => {
                      const c = chipColors[i % chipColors.length];
                      return (
                        <motion.span
                          key={technology}
                          initial={{ opacity: 0, y: 8, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: 0.25 + i * 0.04 }}
                          whileHover={{ y: -3, scale: 1.06 }}
                          className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold shadow-sm ring-1 ring-white"
                          style={{ backgroundColor: c.bg, color: c.text }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: c.dot }}
                          />
                          {technology}
                        </motion.span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-end border-t border-[#e8e8ed] pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(null)}
                    className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-85"
                    style={{ backgroundColor: selected.accent }}
                  >
                    Close details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
