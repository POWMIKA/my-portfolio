
"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiHtml5,
  SiCss,
  SiPython,
  SiCplusplus,
  SiKotlin,
  SiPostman,
  SiVercel,
SiRender,
SiMysql,
SiGoogleplay,
SiC,
SiKubernetes,
} from "react-icons/si";
import { Brain, Network, Plug, FlaskConical } from "lucide-react";
import type { ComponentType } from "react";

type Skill = {
  name: string;
  color: string;
  icon?: ComponentType<{
    size?: number;
    color?: string;
    className?: string;
  }>;
  letter?: string;
};

const skills: Skill[] = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#E8C900" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Express.js", icon: SiExpress, color: "#374151" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Prisma ORM", icon: SiPrisma, color: "#334155" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
   { name: "Vercel", icon: SiVercel, color: "#111827" },
  { name: "Render", icon: SiRender, color: "#46E3B7" },
  { name: "Google Play Store", icon: SiGoogleplay, color: "#34A853" },
   { name: "Hostinger", letter: "H", color: "#673DE6" },
     { name: "MySQL", icon: SiMysql, color: "#4479A1" },
       { name: "Thunder Client", letter: "TC", color: "#7C3AED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "RESTful APIs", icon: Plug, color: "#0D9488" },
  { name: "WebSockets", icon: Network, color: "#2563EB" },
  { name: "C", icon: SiC, color: "#A8B9CC" },
  { name: "Machine Learning", icon: Brain, color: "#8B5CF6" },
  { name: "Deep Learning", icon: FlaskConical, color: "#D97706" },
];

export default function Skills() {
  return (
    <section
      id="skills"
     className="bg-[#edf1f4] px-4 py-14 sm:px-8 sm:py-16 md:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#56a6aa]">
            05 / Skills
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
            Technologies I Use
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#647080] sm:text-base">
            Tools and technologies I use to build responsive web
            applications, backend services, and mobile experiences.
          </p>
        </motion.div>

        {/* Technology cards */}
        <div className="mt-7 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:mt-9 sm:gap-4 lg:grid-cols-4">
          {skills.map((skill, index) => {
          const Icon = "icon" in skill ? skill.icon : null;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: (index % 4) * 0.07,
                }}
                whileHover={{ y: -5, scale: 1.015 }}
               className="group flex min-h-[84px] min-w-0 items-center gap-3 rounded-xl border border-white/80 bg-[#f8fafb] px-3 py-4 shadow-[0_7px_16px_rgba(31,41,55,0.07)] transition-shadow duration-300 hover:shadow-[0_13px_24px_rgba(31,41,55,0.12)] min-[400px]:gap-4 min-[400px]:px-4 sm:min-h-[104px] sm:gap-5 sm:px-6 sm:py-5"
              >
               <div className="flex h-10 w-10 shrink-0 items-center justify-center sm:h-14 sm:w-14">
                 {Icon ? (
  <Icon
    size={36}
    color={skill.color}
   className="h-9 w-9 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
  />
) : (
  <span
    className="text-3xl font-black transition-transform duration-300 group-hover:scale-110"
    style={{ color: skill.color }}
  >
    {skill.letter}
  </span>
)}
                </div>

                <span className="min-w-0 break-words text-sm font-semibold leading-snug text-[#273142] sm:text-base">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
