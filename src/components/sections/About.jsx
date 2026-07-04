import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  FolderGit2,
  TrendingUp,
  Award,
  Sparkles,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import { personal } from "../../data/personal";

const AnimatedCounter = ({
  end,
  suffix = "",
  duration = 1400,
  start = true,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frameId;
    let startTime;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * end));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    frameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frameId);
  }, [end, duration, start]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
};

// Local presentational data only — icon + accent color per metric, so each
// stat card reads distinctly instead of four identical cyan tiles.
const metrics = [
  {
    value: 1,
    suffix: "+",
    label: "Year of Experience",
    icon: Calendar,
    tone: "accent",
  },
  {
    value: 15,
    suffix: "+",
    label: "Projects Built",
    icon: FolderGit2,
    tone: "secondary",
  },
  {
    value: 35,
    suffix: "%",
    label: "Performance Gains",
    icon: TrendingUp,
    tone: "tertiary",
  },
  {
    value: 8,
    suffix: "+",
    label: "Certifications",
    icon: Award,
    tone: "success",
  },
];

const TONE_STYLES = {
  accent: "bg-accent/10 text-accent border-accent/25",
  secondary:
    "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/25",
  tertiary:
    "bg-accent-tertiary/10 text-accent-tertiary border-accent-tertiary/25",
  success:
    "bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/25",
};

const TONE_TEXT = {
  accent: "text-accent",
  secondary: "text-accent-secondary",
  tertiary: "text-accent-tertiary",
  success: "text-[var(--color-success)]",
};

const About = () => {
  const [statsInView, setStatsInView] = useState(false);

  return (
    <section id="about" className="relative bg-surface py-20 overflow-hidden">
      <div className="hero-grid-bg opacity-20" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="About Me"
          title="I build products and insights"
          description="I combine modern web development with data-led thinking to create useful, polished experiences."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="card-glass relative h-full overflow-hidden">
              <Sparkles
                size={20}
                className="absolute right-6 top-6 text-accent/30"
              />

              <p className="section-eyebrow !text-[11px] mb-4">
                A little more context
              </p>

              <p className="text-lg leading-8 text-text-muted">
                {personal.fullBio}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {personal.roles.slice(0, 3).map((role) => (
                  <span key={role} className="tag">
                    {role}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            onViewportEnter={() => setStatsInView(true)}
            viewport={{ once: true, amount: 0.4 }}
          >
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="hover-lift"
                >
                  <Card className="stat-card !text-center h-full">
                    <div
                      className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border ${TONE_STYLES[metric.tone]}`}
                    >
                      <Icon size={18} />
                    </div>
                    <div
                      className={`stat-card__number !text-3xl ${TONE_TEXT[metric.tone]}`}
                    >
                      <AnimatedCounter
                        end={metric.value}
                        suffix={metric.suffix}
                        start={statsInView}
                      />
                    </div>
                    <p className="stat-card__label !mt-2 !text-xs">
                      {metric.label}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
