import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";

const actions = [
  { label: "View Projects", href: "#projects" },
  { label: "Contact Me", href: "#contact" },
  { label: "Download MERN Resume", href: "/resume-mern.pdf" },
  { label: "Download Data Resume", href: "/resume-data.pdf" },
];

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredActions = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return actions;

    return actions.filter((action) =>
      action.label.toLowerCase().includes(value),
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-modal flex items-start justify-center bg-black/70 px-4 py-16 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search size={18} className="text-accent" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search actions..."
            className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-dim"
          />
          <span className="rounded-full border border-border px-2 py-1 text-xs text-text-dim">
            Esc
          </span>
        </div>

        <div className="p-2">
          {filteredActions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-text transition-colors hover:bg-surface-light"
            >
              <span>{action.label}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-text-dim">
                Go
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
