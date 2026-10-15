"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#f7fafc] px-6 pt-28 lg:px-10"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between">

        {/* Main content */}
      <div className="grid items-center gap-12 py-8 lg:gap-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">

          {/* ================= LEFT ================= */}
          <div>

            {/* Hello */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 text-sm text-[#596579]"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="whitespace-nowrap text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[#172033]"
            >
              Kalaipowmika.K
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-[#4d7cfe]" />

              <p className="text-lg font-medium text-[#4d7cfe] md:text-xl">
                Software Engineer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 max-w-xl text-base leading-7 text-[#596579] md:text-lg"
            >
              I build thoughtful digital products, scalable web
              applications and real-time systems across the full stack.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 border-b border-[#4d7cfe] pb-1 text-sm font-medium text-[#3157d5]"
              >
                View selected work

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="/resume.pdf"
                className="text-sm text-[#596579] transition-colors duration-300 hover:text-[#172033]"
              >
                Download resume
              </a>
            </motion.div>
          </div>

          {/* ================= PHOTO ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:ml-auto"
          >
            <div className="relative h-[480px] overflow-hidden rounded-sm border border-[#dde4ea] bg-[#dceeff] lg:h-[calc(100vh-17rem)] lg:min-h-[520px]">
              <Image
                src="/images/profile.jpeg"
                alt="Kalaipowmika.K"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>

            
          </motion.div>
        </div>

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex items-center justify-between border-t border-[#dde4ea] py-5"
        >
         

          <a
            href="#about"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#596579] transition-colors hover:text-[#3157d5]"
          >
            Scroll
            <ArrowDown size={14} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}