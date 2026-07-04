import { motion } from "framer-motion";
import { Briefcase, Sparkle, Code2 } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Adwaijra Technologies Pvt. Ltd., Hyderabad",
    period: "Jan 2025 – Dec 2025",
    tools: [
      "React",
      "MongoDB",
      "Express.js",
      "JavaScript",
      "Git",
      "API Integration",
      "Node.js",
      "Docker",
      "Vercel",
      "TypeScript",
      "Tailwind CSS",
      "Postman",
      "Vite",
      "Authentication",
      "Responsive Design",
      "Performance Optimization",
      "Agile Methodology",
    ],
    summary:
      "Built and optimized a scalable MERN Stack e-learning platform focused on interactive online learning experiences.",
    bullets: [
      "Developed and optimized a scalable MERN-based e-learning platform using MongoDB, Express.js, React.js, and Node.js.",
      "Built secure REST APIs for authentication, course management, progress tracking, and backend communication.",
      "Designed responsive interfaces that improved accessibility and user engagement across devices.",
      "Improved application performance by 35% through code optimization, efficient API handling, database tuning, and lazy loading.",
    ],
  },
  {
    role: "Python Developer & Machine Learning Intern",
    company: "iBase Electrosoft LLP, Amravati, Maharashtra",
    period: "Jul 2021 – Sep 2021",
    tools: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Excel",
      "SQL",
      "Git",
      "Jupyter Notebook",
      "SQL",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scipy",
      "TensorFlow",
      "PyTorch",
    ],
    summary:
      "Created end-to-end data processing pipelines and machine learning workflows for practical model training and evaluation.",
    bullets: [
      "Built data processing pipelines for cleaning, transforming, and preparing datasets for ML model training.",
      "Performed feature engineering, model training, and evaluation with Scikit-learn and Pandas, achieving 82% classification accuracy.",
      "Generated structured reports documenting findings and recommendations for operational improvements.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-primary py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,107,74,0.16),_transparent_38%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Building practical products with modern web technologies"
          description="My experience spans full-stack product development and machine learning workflows, with a strong focus on performance, reliability, and user-centered design."
        />

        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <Card className="overflow-hidden border-border/70 bg-surface/80 transition-all duration-300 hover:border-accent/35">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent-secondary/25 bg-accent-secondary/10 text-accent-secondary">
                      {index === 0 ? (
                        <Briefcase size={22} />
                      ) : (
                        <Code2 size={22} />
                      )}
                    </div>

                    <div>
                      <p className="text-sm font-mono uppercase tracking-[0.25em] text-accent-secondary">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-text">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-base text-text-muted">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                    {index === 0 ? "Product Engineering" : "Data & ML"}
                  </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <p className="text-sm leading-7 text-text-muted">
                      {item.summary}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-6 text-text-muted"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[1.5rem] border border-border/60 bg-surface-light/60 p-5">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                      <Sparkle size={16} />
                      Tools & stack
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-border/70 bg-surface/70 px-3 py-1.5 text-sm text-text-muted"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
