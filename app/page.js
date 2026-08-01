import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import ServicesGrid from '@/components/ServicesGrid';
import StatsBand from '@/components/StatsBand';
import GetStartedSteps from '@/components/GetStartedSteps';
import SpecializationGrid from '@/components/SpecializationGrid';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import AboutStrip from '@/components/AboutStrip';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <ServicesGrid />
      <StatsBand />
      <GetStartedSteps />
      <SpecializationGrid />
      <WhyUs />
      <Testimonials />
      <AboutStrip />
    </main>
  );
}
