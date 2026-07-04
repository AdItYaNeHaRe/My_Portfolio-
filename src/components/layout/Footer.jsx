import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "../../data/personal";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-text">Aditya Nehare</p>
          <p>
            © {year} — Building polished web experiences with code and data.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={`mailto:${personal.contact.email}`}
            className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
