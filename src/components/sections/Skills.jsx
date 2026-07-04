import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import { skills, skillCategories } from "../../data/skills";

// Presentational lookup only — maps a skill's id to a Font Awesome class + its
// signature brand color. Falls back to a generic glyph so nothing ever renders empty.
// Note: some tools (Mongo, Postgres, Tailwind, Vite, Vercel, Postman, Power BI,
// Django, Express, TypeScript) have no official FA brand glyph, so we use a
// solid icon that nods to the real logo/meaning instead.
const ICON_MAP = {
  react: { icon: "fa-brands fa-react", color: "#61DAFB" },
  tailwind: { icon: "fa-solid fa-wind", color: "#38BDF8" }, // "tailwind" -> wind
  html: { icon: "fa-brands fa-html5", color: "#E34F26" },
  css: { icon: "fa-brands fa-css3-alt", color: "#1572B6" },
  typescript: { icon: "fa-solid fa-code", color: "#3178C6" },
  nodejs: { icon: "fa-brands fa-node-js", color: "#3C873A" },
  express: { icon: "fa-solid fa-server", color: "#ffffff" },
  mongodb: { icon: "fa-solid fa-leaf", color: "#47A248" }, // Mongo's leaf mark
  postgresql: { icon: "fa-solid fa-elephant", color: "#4169E1" }, // Slonik the elephant
  sql: { icon: "fa-solid fa-database", color: "#00758F" },
  jwt: { icon: "fa-solid fa-key", color: "#D63AFF" },
  javascript: { icon: "fa-brands fa-js", color: "#F7DF1E" },
  python: { icon: "fa-brands fa-python", color: "#FFD43B" },
  vite: { icon: "fa-solid fa-bolt", color: "#646CFF" }, // Vite's lightning bolt
  git: { icon: "fa-brands fa-git-alt", color: "#F05032" },
  postman: { icon: "fa-solid fa-paper-plane", color: "#FF6C37" }, // Postman's paper plane
  docker: { icon: "fa-brands fa-docker", color: "#2496ED" },
  vercel: { icon: "fa-solid fa-caret-up", color: "#ffffff" }, // Vercel's triangle
  powerbi: { icon: "fa-solid fa-chart-column", color: "#F2C811" },
  django: { icon: "fa-solid fa-layer-group", color: "#0C4B33" },
  excel: { icon: "fa-solid fa-file-excel", color: "#217346" },
  numpy: { icon: "fa-solid fa-square-root-variable", color: "#4DABCF" },
  pandas: { icon: "fa-solid fa-table", color: "#150458" },
  matplotlib: { icon: "fa-solid fa-chart-line", color: "#11557C" },
  seaborn: { icon: "fa-solid fa-chart-area", color: "#3E9BB0" },
  scipy: { icon: "fa-solid fa-flask-vial", color: "#8CAAE6" },
  java: { icon: "fa-brands fa-java", color: "#F89820" },
  "scikit-learn": { icon: "fa-solid fa-diagram-project", color: "#F7931E" },
  tensorflow: { icon: "fa-solid fa-brain", color: "#FF6F00" },
  genai: { icon: "fa-solid fa-wand-magic-sparkles", color: "#A855F7" },
  nlp: { icon: "fa-solid fa-comments", color: "#22C1C3" },
};

const getSkillIcon = (skill) => {
  const key = (skill.id || skill.icon || skill.name || "")
    .toString()
    .toLowerCase()
    .trim();
  return (
    ICON_MAP[key] || { icon: "fa-solid fa-code", color: "var(--color-accent)" }
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative bg-primary py-20 overflow-hidden">
      {/* faint grid texture ties this section back to the hero's visual system */}
      <div className="hero-grid-bg opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Technical Stack"
          title="Skills that power my work"
          description="From full-stack delivery to analytics and automation, these are the tools I use daily."
        />

        {/* Category filter with a sliding active-pill indicator */}
        <div className="mb-12 flex flex-wrap gap-2">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? "text-primary"
                  : "border border-border bg-surface text-text-muted hover:text-accent hover:border-accent/40"
              }`}
            >
              {activeCategory === category.id && (
                <motion.span
                  layoutId="active-category-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {visibleSkills.map((skill) => {
              const { icon: iconClass, color } = getSkillIcon(skill);

              return (
                <motion.div
                  key={skill.id}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                    },
                  }}
                  exit={{ opacity: 0, y: -8 }}
                  whileHover={{ y: -6 }}
                  className="group h-full"
                >
                  <Card className="relative h-full overflow-hidden">
                    {/* Ambient glow that appears on hover, tinted to the tech's own brand color */}
                    <div
                      className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
                      style={{ background: color }}
                    />

                    <div className="relative mb-5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-light"
                          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                          transition={{ duration: 0.5 }}
                        >
                          <i
                            className={`${iconClass} text-2xl`}
                            style={{ color }}
                            aria-hidden="true"
                          />
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-semibold text-text leading-tight">
                            {skill.name}
                          </h3>
                          {skill.category && (
                            <span className="text-xs font-mono uppercase tracking-wider text-text-dim">
                              {skill.category}
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="font-mono text-sm text-accent shrink-0">
                        {skill.proficiency}%
                      </span>
                    </div>

                    <div className="progress-bar mb-4">
                      <motion.div
                        className="progress-bar__fill"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.proficiency / 100 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: [0.34, 1.56, 0.64, 1],
                          delay: 0.15,
                        }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>

                    <p className="relative text-sm leading-6 text-text-muted">
                      {skill.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
