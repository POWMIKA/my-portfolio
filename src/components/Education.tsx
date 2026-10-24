
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const education = [
  {
    type: "Higher Education",
    name: "National Institute of Technology Puducherry",
    location: "Karaikal, Puducherry",
    period: "2020 — 2024",
    description: "B.Tech — Computer Science & Engineering",
    image: "/images/education/college.webp",
    logo: "/images/education/college-logo.png",
    bg: "bg-gradient-to-br from-[#d3e1ff] via-[#e6eeff] to-[#efe6ff]",
    accent: "text-[#3b5fc4]",
    line: "bg-[#4d7cfe]",
    chip: "bg-[#4d7cfe]/15 text-[#3b5fc4]",
    ring: "ring-[#4d7cfe]/40",
    glow: "bg-[#a9c0ff]/60",
  },
  {
    type: "School Education",
    name: "Amalorpavam Higher Secondary School",
    location: "Puducherry",
    period: "LKG — XII",
    description: "School education completed from LKG through Class XII.",
    image: "/images/education/school.jpeg",
    logo: "/images/education/school-logo.png",
    bg: "bg-gradient-to-br from-[#cdeedb] via-[#e5f5ec] to-[#fcf0d2]",
    accent: "text-[#2f7a55]",
    line: "bg-[#4e9f78]",
    chip: "bg-[#4e9f78]/15 text-[#2f7a55]",
    ring: "ring-[#4e9f78]/40",
    glow: "bg-[#b4e4c8]/70",
  },
];

export default function Education() {
  return (
    <section
      id="education"
          className="relative overflow-hidden bg-[#f8f6f1] px-4 py-14 sm:px-8 sm:py-16 md:py-20 lg:px-10"
    >
      {/* Animated background glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-24 h-48 w-48 rounded-full bg-[#d9e2ff]/70 blur-3xl"
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

              <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          className="mb-7 sm:mb-9 md:mb-11"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#6d82b8]">
            02 / Education
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-[1.2] tracking-[-0.04em] text-[#172033] sm:text-4xl md:text-[2.8rem]">
            Education{" "}
            <motion.span
              animate={{ x: [0, 8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block text-[#6d82b8]"
            >
              journey.
            </motion.span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#596579] sm:text-base">
            The institutions that shaped my academic journey and technical
            foundation.
          </p>
        </motion.div>

           {/* Education cards */}
        <div className="space-y-5">
          {education.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
             className={`group relative overflow-hidden rounded-2xl ${item.bg} p-4 transition-shadow duration-500 hover:shadow-lg sm:p-6 lg:p-7`}
            >
                     {/* Accent bar */}
              <div
                className={`absolute bottom-0 left-0 top-0 w-1.5 ${item.line}`}
              />

              {/* Moving decorative circle */}
              <motion.div
                animate={{
                  x: [0, 15, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute -right-16 -top-16 h-44 w-44 rounded-full ${item.glow}`}
              />

               <div className="relative grid min-w-0 grid-cols-1 gap-4 sm:gap-5 md:grid-cols-[175px_minmax(0,1fr)_190px] md:items-center md:gap-6">
                {/* Period */}
                <div>
                  <p
                    className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${item.chip}`}
                  >
                    {item.type}
                  </p>
                  <p className="mt-3 text-sm font-medium text-[#596579]">
                    {item.period}
                  </p>
                  <p className="mt-1 text-sm text-[#718096]">
                    {item.location}
                  </p>
                </div>

                {/* Institution */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300 }}
                                                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm ring-2 ${item.ring}`}
                  >
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </motion.div>

                  <div className="min-w-0">
                   <h3 className="text-lg font-medium leading-snug tracking-[-0.02em] text-[#172033] sm:text-xl md:text-[1.4rem]">
                      {item.name}
                    </h3>
                    <motion.p
                      whileHover={{ x: 4 }}
                        className={`mt-1.5 text-sm font-medium ${item.accent}`}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>

                {/* Campus image */}
                   <div className="relative h-36 w-full overflow-hidden rounded-xl shadow-md ring-4 ring-white/80 sm:h-44 md:h-32">
                  <Image
                    src={item.image}
                    alt={`${item.name} campus`}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172033]/25 to-transparent" />
                 
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Animated bottom divider */}
        <div className="mt-10 flex items-center gap-3">
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px flex-1 origin-left bg-[#deded9]"
          />

          <motion.span
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#7188c2]"
          />

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px flex-1 origin-right bg-[#deded9]"
          />
        </div>
      </div>
    </section>
  );
}
