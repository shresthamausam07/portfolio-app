import Hero3D from "@/components/Hero3D";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Projects3D from "@/components/Projects3D";
import Education from "@/components/Education";
import SkillsChart from "@/components/SkillsChart";
import Contact from "@/components/Contact";
import NavigationOrb from "@/components/NavigationOrb";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationOrb />
      <div id="home">
        <Hero3D />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <ExperienceTimeline />
      </div>
      <div id="projects">
        <Projects3D />
      </div>
      <div id="skills">
        <SkillsChart />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
