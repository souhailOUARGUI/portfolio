import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Clubs from '@/components/Clubs';
import AwardsActivities from '@/components/AwardsActivities';
import ProfessionalMindmap from '@/components/ProfessionalMindmap';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { personalInfo, projects, education, experiences, awards, activities, skills, clubs } from '@/data/portfolio';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section id="home">
          <Hero personalInfo={personalInfo} />
        </section>

        <About personalInfo={personalInfo} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Education education={education} />
        <Experience experiences={experiences} />
        <Clubs clubs={clubs} />
        <AwardsActivities awards={awards} activities={activities} />
        <ProfessionalMindmap personalInfo={personalInfo} projects={projects} skills={skills} />
        <Contact personalInfo={personalInfo} />
      </main>

      <Footer personalInfo={personalInfo} />
    </div>
  );
}
