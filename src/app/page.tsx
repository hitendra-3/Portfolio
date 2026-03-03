import AboutMe from "./components/home/about-me"
import Contact from "./components/home/contact"
import EducationSkills from "./components/home/education-skills"
import ExperienceSec from "./components/home/experience-sec"
import HeroSection from "./components/home/hero-section"
import ContactBar from "./components/home/hero-section/contact-bar"
import LatestWork from "./components/home/latest-work"

const page = () => {
  return (
    <>
      <main>
        <HeroSection />
        {/* Update your contact links in public/data/page-data.json */}
        <ContactBar />
        <AboutMe />
        <ExperienceSec />
        <EducationSkills />
        {/* Update your projects/work details in public/data/work-data.json */}
        <LatestWork />
        <Contact />
      </main>
    </>
  )
}

export default page