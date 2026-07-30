import WhyIBuildSection from '../components/sections/WhyIBuildSection'
import PageLayout from '../components/layout/PageLayout'
import HeroSection from '../components/sections/HeroSection'
import ProductsSection from '../components/sections/ProductsSection'
import HowIBuildSection from '../components/sections/HowIBuildSection'
import TechnologiesSection from '../components/sections/TechnologiesSection'
import CertificationsSection from '../components/sections/CertificationsSection'
import PrinciplesSection from '../components/sections/PrinciplesSection'
import ContactSection from '../components/sections/ContactSection'
import Seo from '../seo/Seo'

function HomePage() {
  return (
    <PageLayout>
      <Seo />
      <HeroSection />
      <WhyIBuildSection />
      <HowIBuildSection />
      <ProductsSection />
      <PrinciplesSection />
      <TechnologiesSection />
      <CertificationsSection />
      <ContactSection />
    </PageLayout>
  )
}

export default HomePage
