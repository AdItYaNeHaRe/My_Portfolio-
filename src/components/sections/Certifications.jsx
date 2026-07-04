import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ShieldCheck,
  ExternalLink,
  Code2,
  BarChart3,
  FileText,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import { certifications } from "../../data/certifications";

// NOTE ON DATA SHAPE:
// Splitting into categories keys off `cert.category`. Add this field to each
// entry in data/certifications.js, e.g.:
//   { category: "web", ... }   -> Web Development
//   { category: "data", ... }  -> Data Analysis
// Anything else (or missing) falls into "Other Certifications" below, so a
// typo in the category value never hides a certificate — it just surfaces
// in the fallback group where it's easy to spot and fix.
const isWeb = (cert) =>
  ["web", "web-development", "webdev"].includes(cert.category);
const isData = (cert) =>
  ["data", "data-analysis", "data-analytics"].includes(cert.category);

// Wraps a card with a subtle mouse-tracking 3D tilt + light sheen.
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], ["7deg", "-7deg"]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], ["-7deg", "7deg"]),
    springConfig,
  );

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px - 0.5);
    y.set(py - 0.5);
    ref.current.style.setProperty("--mx", `${px * 100}%`);
    ref.current.style.setProperty("--my", `${py * 100}%`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const CertCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
  >
    <TiltCard className="card-sheen h-full [transform-style:preserve-3d]">
      <Card glow className="relative flex h-full flex-col overflow-hidden">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {cert.provider}
            </p>
            <h3 className="mt-2 text-xl font-semibold leading-snug text-text">
              {cert.title}
            </h3>
          </div>
          <span className="badge badge-accent shrink-0 whitespace-nowrap">
            {cert.date}
          </span>
        </div>

        {cert.image && (
          <div className="relative my-5 flex justify-center">
            <a
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              className="group w-full max-w-[280px]"
            >
              <div className="relative overflow-hidden rounded-xl border border-border/70 bg-primary/40 p-4 shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between rounded-lg border border-accent/20 bg-surface/70 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
                        Certificate PDF
                      </p>
                      <p className="text-sm font-medium text-text">
                        Open certificate
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-text-dim transition-transform group-hover:translate-x-0.5"
                  />
                </div>

                <div className="mt-3 rounded-lg border border-dashed border-accent/20 bg-surface-light/70 p-4 text-center">
                  <p className="text-sm font-medium text-text">{cert.title}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-text-dim">
                    Click to view or download
                  </p>
                </div>

                <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full border border-accent/30 bg-primary/85 px-2.5 py-1 backdrop-blur-sm">
                  <ShieldCheck size={12} className="text-accent" />
                  <span className="text-[10px] font-medium text-accent">
                    Verified
                  </span>
                </div>
              </div>
            </a>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {cert.skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-secondary"
            >
              Verify credential
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </Card>
    </TiltCard>
  </motion.div>
);

const CategoryGroup = ({ icon: Icon, tone, title, description, items }) => {
  if (items.length === 0) return null;

  return (
    <div className="mb-16 last:mb-0">
      <div className="mb-8 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl border bg-surface-light ${tone}`}
        >
          <Icon size={18} />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-text">
            {title}
          </h3>
          <p className="text-sm text-text-dim">{description}</p>
        </div>
        <span className="badge ml-auto">
          {items.length} credential{items.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((cert, index) => (
          <CertCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </div>
  );
};

const Certifications = () => {
  const webCerts = certifications.filter(isWeb);
  const dataCerts = certifications.filter(isData);
  const otherCerts = certifications.filter((c) => !isWeb(c) && !isData(c));

  return (
    <section
      id="certifications"
      className="relative bg-primary py-20 overflow-hidden"
    >
      <div className="hero-grid-bg opacity-25" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications and learning milestones"
          description="A snapshot of the courses, simulations, and certifications that strengthen my technical and analytical toolkit."
        />

        <CategoryGroup
          icon={Code2}
          tone="text-accent border-accent/25"
          title="Web Development"
          description="Frontend, backend, and full-stack credentials"
          items={webCerts}
        />

        <CategoryGroup
          icon={BarChart3}
          tone="text-accent-tertiary border-accent-tertiary/25"
          title="Data Analysis"
          description="Analytics, visualization, and data tooling credentials"
          items={dataCerts}
        />

        <CategoryGroup
          icon={ShieldCheck}
          tone="text-accent-secondary border-accent-secondary/25"
          title="Other Certifications"
          description="Uncategorized — add a `category` field in data/certifications.js"
          items={otherCerts}
        />
      </div>
    </section>
  );
};

export default Certifications;
