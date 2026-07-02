import AboutSection from '../components/sections/AboutSection'
import PageLayout from '../components/layout/PageLayout'
import HeroSection from '../components/sections/HeroSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ProcessSection from '../components/sections/ProcessSection'
import SkillsSection from '../components/sections/SkillsSection'
import CertificationsSection from '../components/sections/CertificationsSection'
import PrinciplesSection from '../components/sections/PrinciplesSection'
import ContactSection from '../components/sections/ContactSection'
import Seo from '../seo/Seo'

function HomePage() {
  return (
    <PageLayout>
      <Seo />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <SkillsSection />
      <CertificationsSection />
      <PrinciplesSection />
      <ContactSection />
    </PageLayout>
  )
}

export default HomePage
