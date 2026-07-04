import { useParams, Link } from "react-router-dom";
import { projects } from "../data/Projects";
import { projectImages } from "../data/projectImages";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";

const CaseStudyPage = () => {
  const { id } = useParams();
  const project = projects.find((entry) => entry.id === id);

  if (!project) {
    return (
      <section className="px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold text-text">
          Case study not found.
        </h1>
        <Link to="/" className="mt-4 inline-block text-accent">
          Back to home
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Link to="/" className="mb-6 inline-block text-accent">
          ← Back to portfolio
        </Link>
        <SectionHeader
          eyebrow="Case Study"
          title={project.title}
          description={project.overview}
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <img
              src={projectImages[project.id] || projectImages.placeholder}
              alt={project.title}
              className="mb-4 h-56 w-full rounded-xl object-cover"
            />
            <p className="text-text-muted">{project.problem}</p>
          </Card>

          <Card>
            <h3 className="mb-3 text-xl font-semibold text-text">Highlights</h3>
            <ul className="space-y-3 text-text-muted">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-accent">•</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-primary px-3 py-1 text-sm text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPage;
