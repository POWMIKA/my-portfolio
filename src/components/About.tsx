"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
     className="bg-[#F1F8F6] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[#4E9F78]">
            01 / About
          </p>
        </motion.div>

        {/* Main statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
         className="mt-7 max-w-6xl text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-[#172033] sm:mt-8 sm:text-4xl sm:leading-[1.08] md:text-6xl lg:mt-10 lg:text-8xl lg:leading-[1]"
        >
          I build useful digital products,
          scalable applications and
          <span className="text-[#4E9F78]"> technology-driven solutions.</span>
        </motion.h2>

        {/* Divider */}
       <div className="my-10 h-px bg-[#cddfd7] sm:my-14 lg:my-20" />

        {/* About content */}
       <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="max-w-2xl text-base leading-7 text-[#596579] sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
              I&apos;m Kalaipowmika K, a software developer interested
              in building modern web applications, backend systems,
              real-time platforms and practical technology solutions.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#596579] sm:mt-6 sm:text-lg sm:leading-8 lg:mt-7 lg:text-xl lg:leading-9">
              I enjoy learning across different areas of software
              development and working with technologies that solve
              real-world problems.
            </p>
          </motion.div>

          {/* Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[#8792a3]">
              Open to opportunities
            </p>

            <h3 className="mt-4 text-xl font-medium leading-snug text-[#172033] sm:mt-5 sm:text-2xl">
              Exploring roles across software & technology
            </h3>

            <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Software Engineering",
                "Machine Learning",
                "Deep Learning",
                "Frontend Development",
                "Backend Development",
                "API Development & Integration",
                "Full Stack Development",
                 "Real-Time Systems & WebSockets",
               "Cloud Deployment & DevOps",
                "Web Development",
                "QA / Software Testing",
                "Product Engineering",
                "Other Technology Roles",
              ].map((role) => (
                <div
                  key={role}
                  className="flex items-center gap-3 text-[#596579]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4E9F78]" />
                  <span>{role}</span>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="mt-10 border-t border-[#cddfd7] pt-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#8792a3]">
                Location
              </p>

              <div className="mt-3 flex items-center gap-2">
               <p className="text-base leading-6 text-[#172033] sm:text-lg">
                  Open to opportunities worldwide
                </p>

                <ArrowUpRight
                  size={18}
                  className="text-[#4E9F78]"
                />
              </div>

              <p className="mt-2 text-sm text-[#8792a3]">
                India · Remote · International opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}