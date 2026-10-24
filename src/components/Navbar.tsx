
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
    "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(220,238,255,0.82))",
  backdropFilter: "blur(18px) saturate(180%)",
  WebkitBackdropFilter: "blur(18px) saturate(180%)",
  boxShadow: "0 10px 40px rgba(45,98,140,0.16)",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        max > 0 ? window.scrollY / max : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((link) => link.href.slice(1));

    const updateActiveLink = () => {
      if (window.scrollY < 80) {
        setActive("home");
        return;
      }

      let current = "home";
      const line = window.innerHeight * 0.35;

      for (const id of ids) {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= line) {
          current = id;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (atBottom) current = ids[ids.length - 1];

      setActive(current);
    };

    updateActiveLink();
    window.addEventListener("scroll", updateActiveLink, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("resize", updateActiveLink);
    };
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
      <div className="relative w-full max-w-6xl xl:w-auto xl:max-w-none">
        <nav
          aria-label="Main navigation"
          style={glass}
          className="relative flex h-14 items-center justify-between gap-2 rounded-full border border-white/80 px-2 sm:px-3 xl:justify-center"
        >
          {/* Home button on mobile and tablet */}
          <a
            href="#home"
            aria-label="Home"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#2d628c] transition hover:bg-white xl:hidden"
          >
            <House size={19} />
          </a>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-1 xl:flex">
            {links.map((link) => {
              const isActive = active === link.href.slice(1);

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex items-center gap-2 rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.1em] transition-colors ${
                      isActive
                        ? "bg-white/90 text-[#2d628c] shadow-sm"
                        : "text-[#4a5b6c] hover:bg-white/60 hover:text-[#2d628c]"
                    }`}
                  >
                    {link.icon && <House size={14} />}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-2 xl:ml-2">
            <a
              href="/resume.pdf"
              className="hidden rounded-full bg-[#2d628c] px-4 py-2.5 text-[10px] uppercase tracking-[0.12em] text-white transition hover:bg-[#0f2a40] sm:inline-flex sm:px-5 sm:text-[11px]"
            >
              Resume
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#0f1f2e] transition hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2d628c] xl:hidden"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* Scroll progress */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-7 bottom-0 h-[2px] overflow-hidden rounded-full"
          >
            <div
              ref={progressRef}
              className="h-full origin-left bg-[#4d7cfe]"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            style={glass}
            className="mt-2 max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain rounded-3xl border border-white/80 p-3 shadow-xl sm:p-4 xl:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => {
                const isActive = active === link.href.slice(1);

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex min-h-11 items-center rounded-2xl px-4 py-3 text-xs font-medium uppercase tracking-[0.12em] transition-colors sm:text-sm ${
                        isActive
                          ? "bg-white/90 text-[#2d628c]"
                          : "text-[#0f1f2e] hover:bg-white/60"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}

              <li className="pt-1 sm:hidden">
                <a
                  href="/resume.pdf"
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center justify-center rounded-2xl bg-[#2d628c] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#0f2a40]"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
