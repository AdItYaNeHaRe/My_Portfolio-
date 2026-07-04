import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Sparkles } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Engineering",
    institution: "Rashtrasant Tukadoji Maharaj Nagpur University",
    period: "Nov 2022 – Jun 2025",
    highlight:
      "Advanced studies in software engineering, web development, and intelligent systems.",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Arvi",
    period: "Aug 2019 – Jul 2022",
    highlight:
      "Built a strong foundation in programming, networking, and computer fundamentals.",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-surface py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,217,255,0.16),_transparent_42%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Education"
          title="A foundation built for modern development"
          description="My academic journey blended hands-on technical learning with problem-solving, preparing me to build polished products and scalable solutions."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-border/70 bg-gradient-to-br from-surface via-surface/90 to-surface-light/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent">
                  Academic path
                </p>
                <h3 className="text-xl font-semibold text-text">
                  Education milestones
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {education.map((item, index) => (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group border-accent/20 bg-surface/70 transition-all duration-300 hover:border-accent/40">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                        <BookOpen size={18} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-mono uppercase tracking-[0.25em] text-accent">
                            {item.period}
                          </p>
                          <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-text-muted">
                            {index === 0 ? "Degree" : "Diploma"}
                          </span>
                        </div>
                        <h4 className="mt-2 text-lg font-semibold text-text">
                          {item.degree}
                        </h4>
                        <p className="mt-1 text-sm text-text-muted">
                          {item.institution}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-text-muted">
                          {item.highlight}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2rem] border border-border/70 bg-surface/70 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-tertiary/30 bg-accent-tertiary/10 text-accent-tertiary">
                <Sparkles size={22} />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent-tertiary">
                  Strengths
                </p>
                <h3 className="text-xl font-semibold text-text">
                  What the education shaped
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Strong fundamentals",
                  text: "Programming, data structures, databases, and systems thinking from the ground up.",
                },
                {
                  title: "Practical execution",
                  text: "Hands-on labs, projects, and internships that bridged theory with real-world delivery.",
                },
                {
                  title: "Problem-solving mindset",
                  text: "A consistent focus on building reliable, intuitive, and user-centered software.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[1.25rem] border border-border/60 bg-surface-light/60 p-5"
                >
                  <h4 className="text-base font-semibold text-text">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-text-muted">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
