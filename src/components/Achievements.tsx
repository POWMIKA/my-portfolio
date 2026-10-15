"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const paperUrl =
  "https://ieeexplore.ieee.org/document/10627921";

const certificateUrl =
  "https://drive.google.com/file/d/18YiFqCxPYcxhZ0HKOdgKVwIGRpOcnmCW/view";

export default function Achievements() {
  const [showDetails, setShowDetails] = useState(false);

  

useEffect(() => {
  if (!showDetails) return;

  const scrollY = window.scrollY;
  const body = document.body;

  const prev = {
    position: body.style.position,
    top: body.style.top,
    width: body.style.width,
    overflow: body.style.overflow,
  };

  body.style.position = "fixed";
  body.style.top = `-${scrollY}px`;
  body.style.width = "100%";
  body.style.overflow = "hidden";

  return () => {
    body.style.position = prev.position;
    body.style.top = prev.top;
    body.style.width = prev.width;
    body.style.overflow = prev.overflow;
    window.scrollTo(0, scrollY);
  };
}, [showDetails]);



  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#f8f3eb] px-5 py-16 sm:px-8 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#b17b50]" />
            <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[#9a6945]">
              06 / Achievements & Publications
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.045em] text-[#172033] sm:text-4xl md:text-[2.8rem]">
            Research with{" "}
            <motion.span
              className="inline-block text-[#a8754c]"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              purpose.
            </motion.span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#71685f] sm:text-base">
            An academic research publication focused on deep learning
            for diabetic retinopathy detection.
          </p>
        </motion.div>

        {/* Publication card */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          whileHover={{ y: -5 }}
          className="group relative mt-9 overflow-hidden rounded-2xl border border-white bg-[#fffdf8] p-5 shadow-[0_6px_24px_rgba(65,48,30,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_38px_rgba(65,48,30,0.12)] sm:p-7 md:p-8"
        >
          {/* Decorative background */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-14 h-48 w-48 rounded-full bg-[#f0dfc9]/70 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -12, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative grid gap-6 md:grid-cols-[minmax(0,1fr)_200px] md:items-center md:gap-10">
            {/* Publication information */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#f3e6d6] px-3 py-1.5 text-xs font-semibold text-[#986b45]">
                  IEEE Conference Publication
                </span>

                <span className="rounded-full border border-[#e9dfd2] px-3 py-1.5 text-xs font-medium text-[#71685f]">
                  2024
                </span>
              </div>

              <h3 className="mt-5 max-w-2xl text-xl font-semibold leading-snug tracking-[-0.03em] text-[#172033] sm:text-2xl">
                Diabetic Retinopathy Detection Using Deep Learning
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#71685f]">
                Research on automated diabetic retinopathy detection
                and severity grading from retinal fundus images using
                deep learning techniques.
              </p>

              <p className="mt-3 text-sm font-medium text-[#9a6945]">
                IConSCEPT 2024
              </p>

              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#a8754c] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:gap-3 hover:bg-[#895b38] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                View details <span aria-hidden="true">→</span>
              </button>
            </div>

            {/* Publication illustration */}
            <motion.div
              whileHover={{ rotate: 2, scale: 1.035 }}
              transition={{ duration: 0.35 }}
              className="relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-2xl border border-[#eadbc8] bg-gradient-to-br from-[#f8eddf] via-[#f3e5d3] to-[#e9d5bd] p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-[#986b45]">
                  RESEARCH
                </span>
                <span className="text-2xl text-[#b58b64]">✳</span>
              </div>

              <div>
                <p className="text-3xl font-semibold tracking-[-0.06em] text-[#76543a]">
                  IEEE
                </p>
                <div className="mt-3 h-1 w-12 rounded-full bg-[#b58b64]" />
                <p className="mt-3 text-xs leading-5 text-[#765f4a]">
                  Deep Learning · Medical Image Analysis
                </p>
              </div>

              <span className="absolute -bottom-8 -right-5 text-8xl font-bold text-white/35">
                01
              </span>
            </motion.div>
          </div>
        </motion.article>
      </div>

      {/* Publication details popup */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden overscroll-none bg-[#172033]/60 p-4 backdrop-blur-sm sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setShowDetails(false);
              }
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="publication-title"
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            className="max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-3xl border border-white bg-[#fffdf8] shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
            >
              {/* Popup header */}
              <div className="relative bg-[#f3e6d6] px-6 py-7 sm:px-8">
                <button
                  type="button"
                  onClick={() => setShowDetails(false)}
                  aria-label="Close publication details"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-xl text-[#604b39] transition hover:rotate-90 hover:bg-white"
                >
                  ×
                </button>

                <span className="inline-block rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-[#986b45]">
                  IEEE Conference Publication
                </span>

                <h3
                  id="publication-title"
                  className="mt-4 pr-5 text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#172033] sm:text-3xl"
                >
                  Diabetic Retinopathy Detection Using Deep Learning
                </h3>

                <p className="mt-3 text-sm text-[#765f4a]">
                  IConSCEPT 2024 · IEEE Xplore
                </p>
              </div>

              {/* Popup content */}
              <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#9a6945]">
                    About the research
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-[#536078]">
                    This research presents DRNet, a deep learning approach
                    for automated detection and grading of diabetic
                    retinopathy from retinal fundus images. It combines
                    ResNet for feature extraction with U-Net for lesion
                    segmentation, incorporating image quality assessment,
                    lesion detection, and disease severity grading.
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#9a6945]">
                    Publication details
                  </h4>

                  <dl className="mt-3 space-y-3 text-sm">
                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-3">
                      <dt className="text-[#8990a0]">Conference</dt>
                      <dd className="text-[#354057]">
                        International Conference on Signal Processing,
                        Computation, Electronics, Power and Telecommunication
                        (IConSCEPT 2024)
                      </dd>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-3">
                      <dt className="text-[#8990a0]">Publisher</dt>
                      <dd className="text-[#354057]">IEEE</dd>
                    </div>

                    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-3">
                      <dt className="text-[#8990a0]">DOI</dt>
                      <dd className="break-all text-[#354057]">
                        10.1109/IConSCEPT61884.2024.10627921
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* External links */}
                <div className="grid gap-3 border-t border-[#e9e1d7] pt-5 sm:grid-cols-2">
                  <a
                    href={paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#a8754c] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#895b38]"
                  >
                    Read IEEE paper <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href={certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-[#dfcbb5] bg-white px-4 py-3 text-sm font-semibold text-[#895b38] transition hover:bg-[#f8eddf]"
                  >
                    View certificate <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}