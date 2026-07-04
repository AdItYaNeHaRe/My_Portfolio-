import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import { projects } from "../../data/Projects";
import { projectImages, FALLBACK_IMAGE } from "../../data/projectImages";

const humanizeKey = (key) =>
  key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (c) => c.toUpperCase())
    .trim();

const getImage = (project) => projectImages[project.id] || FALLBACK_IMAGE;

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "data", label: "Data Analytics" },
    { id: "ai", label: "AI + Analytics" },
  ];

  const countFor = (id) =>
    id === "all"
      ? projects.length
      : projects.filter((p) => p.category === id).length;

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featured = filtered.filter((p) => p.caseStudy);
  const rest = filtered.filter((p) => !p.caseStudy);

  return (
    <section
      id="projects"
      className="relative bg-primary py-20 overflow-hidden"
    >
      <div className="hero-grid-bg opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Featured Work"
          title="Projects and case studies"
          description="A mix of full-stack products, analytics dashboards, and AI-assisted reporting work."
        />

        <div className="mb-14 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                filter === category.id
                  ? "text-primary"
                  : "border border-border bg-surface text-text-muted hover:text-accent hover:border-accent/40"
              }`}
            >
              {filter === category.id && (
                <motion.span
                  layoutId="active-project-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">
                {category.label}
                <span className="ml-1.5 font-mono text-xs opacity-60">
                  {countFor(category.id)}
                </span>
              </span>
            </button>
          ))}
        </div>

        {/* Spotlight — deep-dive case studies, alternating sides */}
        <AnimatePresence mode="popLayout">
          {featured.length > 0 && (
            <div className="mb-16 flex flex-col gap-14">
              {featured.map((project, index) => {
                const reversed = index % 2 === 1;
                const metrics = project.metrics
                  ? Object.entries(project.metrics).slice(0, 3)
                  : [];

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className={`group flex flex-col gap-8 md:gap-10 ${
                      reversed ? "md:flex-row-reverse" : "md:flex-row"
                    }`}
                  >
                    {/* Image with viewfinder-style corner brackets on hover */}
                    <div className="relative md:w-1/2">
                      <div className="relative h-64 overflow-hidden rounded-2xl border border-border bg-surface md:h-full">
                        <img
                          src={getImage(project)}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

                        {[
                          "top-3 left-3",
                          "top-3 right-3",
                          "bottom-3 left-3",
                          "bottom-3 right-3",
                        ].map((pos, i) => (
                          <span
                            key={pos}
                            className={`pointer-events-none absolute ${pos} h-4 w-4 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                              i === 0
                                ? "border-l-2 border-t-2"
                                : i === 1
                                  ? "border-r-2 border-t-2"
                                  : i === 2
                                    ? "border-l-2 border-b-2"
                                    : "border-r-2 border-b-2"
                            }`}
                          />
                        ))}

                        <span className="badge badge-accent absolute right-3 top-3 backdrop-blur-sm">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center md:w-1/2">
                      <div className="flex items-center gap-2 font-mono text-xs text-text-dim">
                        <span>src/projects/{project.id}.jsx</span>
                        <span className="opacity-40">·</span>
                        <span>{project.date}</span>
                      </div>

                      <h3 className="mt-3 text-2xl font-semibold text-text md:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-text-muted">
                        {project.overview}
                      </p>

                      {metrics.length > 0 && (
                        <div className="mt-6 flex divide-x divide-border rounded-xl border border-border bg-surface">
                          {metrics.map(([key, value]) => (
                            <div key={key} className="flex-1 px-4 py-3">
                              <div className="font-mono text-lg font-semibold text-accent">
                                {value}
                              </div>
                              <div className="mt-0.5 text-[11px] uppercase tracking-wider text-text-dim">
                                {humanizeKey(key)}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center gap-5 border-t border-border pt-5">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
                          >
                            <FaGithub size={16} /> Code
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
                          >
                            <ExternalLink size={16} /> Demo
                          </a>
                        )}
                        {project.caseStudy && (
                          <a
                            href={`/case-study/${project.caseStudyId}`}
                            className="ml-auto flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-secondary"
                          >
                            Case study <ArrowRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>

        {/* Also shipped — denser grid, still image-led for visual consistency */}
        {rest.length > 0 && (
          <>
            {featured.length > 0 && (
              <div className="mb-6 flex items-center gap-3 font-mono text-xs text-text-dim">
                <span className="whitespace-nowrap">// also shipped</span>
                <span className="h-px flex-1 bg-border" />
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {rest.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="group"
                  >
                    <Card className="flex h-full flex-col overflow-hidden !p-0">
                      <div className="relative aspect-video overflow-hidden bg-surface">
                        <img
                          src={getImage(project)}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                        <span className="badge absolute right-3 top-3 backdrop-blur-sm">
                          {project.type}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <span className="font-mono text-[11px] text-text-dim">
                          {project.id}.py
                        </span>

                        <h3 className="mt-2 text-lg font-semibold leading-snug text-text">
                          {project.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-muted">
                          {project.overview}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span key={tech} className="tag">
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="tag opacity-60">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>

                        {(project.github || project.demo) && (
                          <div className="mt-5 flex items-center gap-4 border-t border-border pt-4">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-accent"
                              >
                                <FaGithub size={14} /> Code
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-accent"
                              >
                                <ExternalLink size={14} /> Demo
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <div className="empty-state">
            <p className="text-text-muted">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
