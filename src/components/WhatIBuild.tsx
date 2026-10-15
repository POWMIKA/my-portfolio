"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Activity,
  Database,
  ArrowUpRight,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: Code2,
    title: "Web Applications",
    description:
      "Modern, responsive interfaces built with React, Next.js and TypeScript.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    number: "02",
    icon: Server,
    title: "Backend Systems",
    description:
      "Scalable APIs and backend services designed for real-world applications.",
    technologies: ["Node.js", "Express", "REST APIs", "Prisma"],
  },
  {
    number: "03",
    icon: Activity,
    title: "Real-Time Applications",
    description:
      "Live dashboards, telemetry systems and real-time communication.",
    technologies: ["WebSockets", "Live Data", "Dashboards"],
  },
  {
    number: "04",
    icon: Database,
    title: "Data & Databases",
    description:
      "Structured data systems with reliable schemas, relationships and APIs.",
    technologies: ["PostgreSQL", "MongoDB", "Prisma ORM"],
  },
];

export default function WhatIBuild() {
  return (
    <section
      id="what-i-build"
      className="relative bg-black py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-violet-400">
            What I Build
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            From idea to{" "}
            <span className="text-gray-500">
              production.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I work across the stack to turn ideas into reliable,
            scalable and user-focused software.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-violet-400/30 hover:bg-white/[0.04]"
              >
                {/* Number */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-600">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
                  />
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-400 transition-colors group-hover:border-violet-400/20 group-hover:bg-violet-400/10">
                  <Icon size={21} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[11px] text-gray-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Hover glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}