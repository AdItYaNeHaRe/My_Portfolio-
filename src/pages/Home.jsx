import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import Projects from "../components/sections/Projects";
import Certifications from "../components/sections/Certifications";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <EducationSection />
      <ExperienceSection />
      <Projects />
      <Certifications />
      <Contact />
    </>
  );
};

export default Home;
