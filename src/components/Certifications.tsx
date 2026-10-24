
"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";


const certifications = [
  {
    title: "Web Development",
    issuer: "AcmeGrade",
    category: "Web Development",
    year: "2022",
    certificateUrl:
      "https://drive.google.com/file/d/1N2bWcDIZb4LC8Fm7AQl59Stz2pnDHY43/view",
    accent: "#7186c9",
    background: "#edf0ff",
  },
  {
    title: "Data Science Foundations",
    issuer: "Great Learning",
    category: "Data Science",
    year: "2023",
    certificateUrl:
      "https://drive.google.com/file/d/1slTajvb_qi3P8n0ZqcvBpqFi3k2ZgGo_/view",
    accent: "#4e9b83",
    background: "#e9f5ee",
  },
];


export default function Certifications() {
  return (
    <section
      id="certifications"
     className="bg-[#f8f6f0] px-4 py-14 sm:px-8 sm:py-16 md:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#7186c9]">
            07 / Certifications
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#172033] sm:text-4xl">
            Learning & Certifications
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#647080] sm:text-base">
            Certifications that reflect my commitment to learning
            and developing practical technical skills.
          </p>
        </motion.div>

       <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-9 sm:gap-5 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              whileHover={{ y: -5 }}
             className="flex min-w-0 items-start gap-3 rounded-2xl border border-white bg-white/80 p-4 shadow-[0_7px_20px_rgba(31,41,55,0.06)] transition-shadow hover:shadow-[0_14px_28px_rgba(31,41,55,0.1)] sm:gap-5 sm:p-7"
            >
              <div
               className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-14 sm:w-14"
                style={{ backgroundColor: cert.background }}
              >
              <Award className="h-6 w-6 sm:h-[30px] sm:w-[30px]" color={cert.accent} />
              </div>

              <div className="min-w-0 flex-1">
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: cert.background,
                    color: cert.accent,
                  }}
                >
                  {cert.category}
                </span>

                <h3 className="mt-3 text-lg font-semibold text-[#172033]">
                  {cert.title}
                </h3>

                <p className="mt-1 text-sm text-[#647080]">
                  Issued by {cert.issuer}
                </p>

                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#5269a8] transition-colors hover:text-[#354a85]"
                  >
                    View certificate
                    <ExternalLink size={15} />
                  </a>
                ) : (
                  <p className="mt-4 text-xs text-[#8990a0]">
                    Certificate link to be added
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
