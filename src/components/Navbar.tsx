"use client";

import { useEffect, useRef, useState } from "react";
import { House, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home", icon: true },
   { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const glass: React.CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(220,238,255,0.38) 50%, rgba(255,255,255,0.6) 100%)",
  backdropFilter: "blur(18px) saturate(180%)",
  WebkitBackdropFilter: "blur(18px) saturate(180%)",
  boxShadow:
    "0 10px 40px rgba(45,98,140,0.16), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(45,98,140,0.08)",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${
          max > 0 ? y / max : 0
        })`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));

    const update = () => {
      // top of page is always Home
      if (window.scrollY < 80) {
        setActive("home");
        return;
      }

      const line = window.innerHeight * 0.35;
      let current = "home";
      let lastFound = "home";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        lastFound = id;
        if (el.getBoundingClientRect().top <= line) current = id;
      }

      // bottom of page: highlight the last section
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = lastFound;

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="relative w-full xl:w-auto">
        <nav
          style={glass}
          className="relative flex h-14 items-center justify-between gap-2 overflow-hidden rounded-full border border-white/70 pl-2 pr-2 xl:justify-center"
        >
          {/* mirror sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.55)_48%,transparent_60%)]"
          />

          {/* mobile: home button */}
          <a
            href="#home"
            aria-label="Home"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#2d628c] xl:hidden"
          >
            <House size={18} />
          </a>

          {/* desktop links */}
          <ul className="relative hidden items-center gap-1 xl:flex">
            {links.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`flex items-center gap-2 rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.12em] transition-all duration-300 ${
                      isActive
                        ? "bg-white/80 text-[#2d628c] shadow-[0_2px_10px_rgba(45,98,140,0.12)]"
                        : "text-[#4a5b6c] hover:bg-white/50 hover:text-[#2d628c]"
                    }`}
                  >
                    {l.icon && <House size={14} />}
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="relative flex items-center gap-2 xl:ml-2">
            <a
              href="/resume.pdf"
              className="hidden rounded-full bg-[#2d628c] px-5 py-2.5 text-[11px] uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-[#0f2a40] sm:block"
            >
              Resume
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#0f1f2e] hover:bg-white/60 xl:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* scroll progress */}
          <div className="pointer-events-none absolute inset-x-8 bottom-0 h-[2px] overflow-hidden rounded-full">
            <div
              ref={progressRef}
              className="h-full origin-left bg-[#4d7cfe]"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </nav>

        {/* mobile menu */}
        {open && (
          <ul
            style={glass}
            className="mt-2 flex flex-col gap-1 rounded-3xl border border-white/70 p-4 xl:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.16em] ${
                    active === l.href.slice(1)
                      ? "bg-white/80 text-[#2d628c]"
                      : "text-[#0f1f2e]"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                className="mt-2 block rounded-2xl bg-[#2d628c] px-4 py-3 text-center text-sm uppercase tracking-[0.16em] text-white"
              >
                Resume
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}