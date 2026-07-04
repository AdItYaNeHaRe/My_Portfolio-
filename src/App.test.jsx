import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import EducationSection from "./components/sections/EducationSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import Certifications from "./components/sections/Certifications";

vi.mock("./components/ui/SectionHeader", () => ({
  default: ({ title, description }) => (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  ),
}));

vi.mock("./components/ui/Card", () => ({
  default: ({ children }) => <div>{children}</div>,
}));

describe("Career sections", () => {
  it("renders the education and experience content", () => {
    render(
      <>
        <EducationSection />
        <ExperienceSection />
        <Certifications />
      </>,
    );

    expect(screen.getByText(/education milestones/i)).toBeInTheDocument();
    expect(
      screen.getByText(/building practical products/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/MERN Stack Development Course/i),
    ).toBeInTheDocument();
  });
});
