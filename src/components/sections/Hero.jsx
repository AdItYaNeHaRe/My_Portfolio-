import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../ui/Button";
import { personal } from "../../data/personal";
import profileImage from "../../assets/My_Image.png";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const techOrbit = [
    { label: "React", icon: "⚛️" },
    { label: "Node.js", icon: "🟢" },
    { label: "MongoDB", icon: "🍃" },
    { label: "Python", icon: "🐍" },
  ];

  return (
    <section id="hero" className="hero bg-primary">
      <div className="hero-grid-bg" />
      <div className="hero-noise" />
      <div className="hero-blob hero-blob--accent" />
      <div className="hero-blob hero-blob--secondary" />
      <div className="hero-blob hero-blob--tertiary" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            className="space-y-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="badge badge-accent badge-dot">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open to Work
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="section-eyebrow mb-2">Portfolio / 2026</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05] text-text tracking-tight">
                {personal.name}
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="min-h-14 flex items-center"
            >
              <span className="text-text-dim font-mono text-lg md:text-xl mr-2">
                {"//"}
              </span>
              <TypeAnimation
                sequence={personal.roles.flatMap((role) => [role, 2500])}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="font-display text-2xl md:text-3xl text-gradient font-semibold"
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg leading-relaxed text-text-muted"
            >
              {personal.shortBio}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-3 pt-3">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={`mailto:${personal.contact.email}`}
                className="footer-social-icon"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto h-80 w-80 md:h-[26rem] md:w-[26rem]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="absolute inset-2 rounded-full border border-dashed border-accent/15" />

            <div className="card-glass relative z-10 h-full w-full overflow-hidden rounded-[2rem] border border-accent/20 shadow-[0_24px_90px_rgba(0,217,255,0.18)]">
              <img
                src={profileImage}
                alt={personal.name}
                className="h-full w-full object-cover"
              />
              <motion.div
                className="absolute inset-0 rounded-[2rem] border border-dashed border-accent/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {techOrbit.map((tech, index) => {
              const orbitRadius = 170;
              const angle = (index * Math.PI) / 2;
              const x = orbitRadius * Math.cos(angle);
              const y = orbitRadius * Math.sin(angle);

              return (
                <motion.div
                  key={tech.label}
                  className="skill-icon absolute left-1/2 top-1/2 z-0 !h-12 !w-12 -translate-x-1/2 -translate-y-1/2 text-lg"
                  animate={{
                    x: [0, x],
                    y: [0, y],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  whileHover={{ scale: 1.15 }}
                  title={tech.label}
                >
                  {tech.icon}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hero-scroll-indicator"
      >
        <span>Scroll</span>
        <span className="scroll-line" />
        <ArrowDown className="text-accent" size={14} />
      </motion.div>
    </section>
  );
};

export default Hero;
