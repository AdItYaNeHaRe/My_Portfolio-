import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

// Ordered as a resume narrative: who you are, what you've done, how you
// trained, what you know, what you built, proof, then contact.
// NOTE: "experience" href assumes your section is id="experience" — update
// this if your actual section id differs (was "experence" in your draft).
const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(null);
  const reduceMotion = useReducedMotion();

  // Elevate the bar once the page has actually scrolled, so it reads
  // differently from the resting state instead of looking static forever.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section is currently in view.
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`sticky top-0 z-40 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-primary/95 shadow-lg shadow-black/20"
          : "border-b border-border/70 bg-primary/80"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo styled as a self-closing component tag — reads as "code",
            matching the src/projects/*.jsx labels used elsewhere on the site */}
        <a
          href="#hero"
          className="group flex shrink-0 items-center font-mono text-lg tracking-tight text-text-dim transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded-md"
        >
          <span className="transition-colors group-hover:text-accent">
            &lt;
          </span>
          <span className="font-display text-text">
            <span className="text-accent">Aditya</span>.Dev
          </span>
          <span className="transition-colors group-hover:text-accent">
            {" "}
            /&gt;
          </span>
        </a>

        {/* Desktop links with a sliding underline under the active section.
            Collapses at lg instead of md — 7 items need more room before
            the row starts fighting the logo and CTA for space. */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative whitespace-nowrap rounded-md px-2.5 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 ${
                  isActive ? "text-text" : "text-text-muted hover:text-accent"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute inset-x-2.5 -bottom-[1px] h-[2px] rounded-full bg-accent"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 30 }
                    }
                  />
                )}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden shrink-0 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 xl:inline-block"
        >
          Let’s Talk
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 rounded-full border border-border p-2 text-text-muted transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-[65px] z-30 bg-primary/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-x-0 top-full z-40 max-h-[calc(100vh-65px)] overflow-y-auto border-b border-border bg-primary/95 backdrop-blur-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-5">
                {links.map((link, index) => {
                  const isActive = activeHref === link.href;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-3 text-base transition-colors ${
                        isActive
                          ? "bg-accent/10 text-accent"
                          : "text-text-muted hover:bg-surface hover:text-text"
                      }`}
                    >
                      <span className="font-mono text-xs text-text-dim">
                        0{index + 1}
                      </span>
                      {link.label}
                    </a>
                  );
                })}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-full border border-accent/30 bg-accent/10 px-4 py-3 text-center text-sm font-medium text-accent transition-colors hover:bg-accent/20"
                >
                  Let’s Talk
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
