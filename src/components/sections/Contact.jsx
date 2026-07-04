import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Download,
  ArrowRight,
  User,
  MessageSquare,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { personal } from "../../data/personal";
import mernResume from "../../Resume/Aditya_Resume_MERN_Stack_Developer.pdf";
import dataResume from "../../Resume/Aditya_Resume_Data_Analyst.pdf";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Job Opportunity",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xzbpknkz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "Job Opportunity",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personal.contact.email,
      href: `mailto:${personal.contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.contact.phone,
      href: `tel:${personal.contact.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.contact.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative bg-surface py-20 overflow-hidden">
      <div className="hero-grid-bg opacity-20" />
      <div className="hero-blob hero-blob--tertiary !opacity-[0.12]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Let's build something meaningful"
          description="I'm open to freelance projects, full-time roles, and collaborations."
        />

        <div className="mb-6 inline-flex">
          <div className="badge badge-accent badge-dot">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Usually responds within 24 hours
          </div>
        </div>

        <div className="mb-10 grid gap-6 md:grid-cols-3">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="hover-lift"
              >
                <Card className="h-full text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="mb-2 text-sm font-mono uppercase tracking-wider text-text-dim">
                    {info.label}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium text-text transition-colors hover:text-accent"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-text">{info.value}</p>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="card-glass">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="form-field !mb-0">
                    <User
                      size={16}
                      className="pointer-events-none absolute left-4 top-4 text-text-dim"
                    />
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="form-input !pl-11"
                    />
                    <label className="form-label !left-11">Your name</label>
                  </div>

                  <div className="form-field !mb-0">
                    <Mail
                      size={16}
                      className="pointer-events-none absolute left-4 top-4 text-text-dim"
                    />
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="form-input !pl-11"
                    />
                    <label className="form-label !left-11">Your email</label>
                  </div>
                </div>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Freelance">Freelance Project</option>
                  <option value="General Query">General Query</option>
                </select>

                <div className="form-field !mb-0">
                  <MessageSquare
                    size={16}
                    className="pointer-events-none absolute left-4 top-4 text-text-dim"
                  />
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="form-textarea !pl-11 resize-none"
                  />
                  <label className="form-label !left-11">
                    Tell me about your idea...
                  </label>
                </div>

                {status === "success" && (
                  <p className="form-status form-status--success">
                    Thank you! Your message has been sent.
                  </p>
                )}
                {status === "error" && (
                  <p className="form-status form-status--error">
                    Something went wrong. Please email me directly.
                  </p>
                )}

                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  className="w-full"
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    Send Message
                    <Send size={16} />
                  </span>
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <h3 className="mb-1 text-xl font-semibold text-text">
                Resume Downloads
              </h3>
              <p className="mb-5 text-sm leading-6 text-text-muted">
                Pick the version that fits your opportunity.
              </p>
              <div className="space-y-3">
                <a
                  href={mernResume}
                  download="Aditya_Resume_MERN_Stack_Developer.pdf"
                  className="group flex items-center justify-between rounded-lg border border-accent/30 px-4 py-3 font-medium text-accent transition-colors hover:bg-accent/10"
                >
                  <span>MERN Stack Resume</span>
                  <Download
                    size={16}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </a>
                <a
                  href={dataResume}
                  download="Aditya_Resume_Data_Analyst.pdf"
                  className="group flex items-center justify-between rounded-lg border border-accent/30 px-4 py-3 font-medium text-accent transition-colors hover:bg-accent/10"
                >
                  <span>Data Analyst Resume</span>
                  <Download
                    size={16}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                </a>
              </div>
            </Card>

            <Card>
              <h3 className="mb-4 text-xl font-semibold text-text">
                Quick Links
              </h3>
              <div className="space-y-1">
                <a
                  href="https://github.com/AdItYaNeHaRe"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-text-muted transition-colors hover:bg-surface-light hover:text-accent"
                >
                  <FaGithub size={16} />
                  <span className="flex-1">GitHub</span>
                  <ArrowRight
                    size={14}
                    className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
                <a
                  href="https://linkedin.com/in/aditya-nehare"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-text-muted transition-colors hover:bg-surface-light hover:text-accent"
                >
                  <FaLinkedin size={16} />
                  <span className="flex-1">LinkedIn</span>
                  <ArrowRight
                    size={14}
                    className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
                <a
                  href="#projects"
                  className="group flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-text-muted transition-colors hover:bg-surface-light hover:text-accent"
                >
                  <ArrowRight size={16} />
                  <span className="flex-1">View Projects</span>
                  <ArrowRight
                    size={14}
                    className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
