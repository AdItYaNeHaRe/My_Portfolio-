import { useEffect, useRef, useState } from "react";

const SectionHeader = ({ eyebrow, title, description }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="max-w-3xl mb-14">
      {/* Eyebrow with drafting crosshair + dimension line */}
      <div
        className={`flex items-center gap-3 mb-5 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="text-accent shrink-0"
        >
          <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1" />
          <path
            d="M7 1V4M7 10V13M1 7H4M10 7H13"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>

        <p className="text-xs font-mono uppercase tracking-[0.35em] text-accent">
          {eyebrow}
        </p>

        <span className="flex-1 h-px bg-line relative">
          <span className="absolute right-0 -top-[3px] w-px h-[7px] bg-line" />
        </span>
      </div>

      <h2
        className={`text-3xl md:text-[2.75rem] font-display font-semibold text-text leading-[1.1] tracking-tight mb-4 transition-all duration-700 ease-out delay-[80ms] ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        {title}
      </h2>

      <p
        className={`font-sans text-lg text-text-muted leading-relaxed max-w-2xl transition-all duration-700 ease-out delay-150 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
