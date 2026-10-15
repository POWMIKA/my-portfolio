
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  BriefcaseBusiness,
  Code2,
  ArrowUpRight,
} from "lucide-react";

const contacts = [
  {
    label: "EMAIL",
    value: "kalaipowmika@gmail.com",
    href: "mailto:kalaipowmika@gmail.com",
    icon: Mail,
  },
  {
    label: "PHONE",
    value: "6382161604",
    href: "tel:6382161604",
    icon: Phone,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/kalaipowmika-k-9987ab205",
    href: "https://www.linkedin.com/in/kalaipowmika-k-9987ab205",
    icon: BriefcaseBusiness,
  },
  {
    label: "GITHUB",
    value: "github.com/POWMIKA",
    href: "https://github.com/POWMIKA",
    icon: Code2,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#111111] px-6 py-24 text-white sm:px-10 md:px-16 md:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
            08 / Get in Touch
          </p>

          <h2 className="mt-8 max-w-5xl text-5xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
            Let&apos;s connect
            <br />
            <span className="text-white/45">
              and build something meaningful.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
            Have an opportunity or a project in mind?
            Get in touch. I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-x-12 gap-y-0 border-t border-white/15 sm:grid-cols-2">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={
                  contact.label === "LINKEDIN" ||
                  contact.label === "GITHUB"
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.label === "LINKEDIN" ||
                  contact.label === "GITHUB"
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group flex min-w-0 items-center gap-5 border-b border-white/15 py-7 sm:py-9"
              >
                <Icon
                  size={25}
                  strokeWidth={1.5}
                  className="shrink-0 text-white/50 transition-colors group-hover:text-white"
                />

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                    {contact.label}
                  </p>

                  <p className="mt-3 break-all text-sm font-medium text-white/85 transition-colors group-hover:text-white sm:text-base md:text-lg">
                    {contact.value}
                  </p>
                </div>

                <ArrowUpRight
                  size={19}
                  className="shrink-0 text-white/35 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </motion.a>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 text-xs text-white/35 sm:flex-row sm:items-center">
          <p>© 2026 Kalaipowmika K. All rights reserved.</p>

          <a
            href="#home"
            className="w-fit uppercase tracking-[0.14em] transition-colors hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
