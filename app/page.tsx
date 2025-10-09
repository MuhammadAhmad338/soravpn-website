import Hero from '@/components/hero';
import Clients from '@/components/clients';
import Section from '@/components/section';
import Features from '@/components/features';
import GlobalNetwork from '@/components/globalnetwork';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section background="light" padding="large" id="hero" isHeroSection={true}>
        <Hero />
      </Section>

      {/* Features Section */}
      <Section background="light" padding="large" id="features">
       <Features />
      </Section>

      {/* Pricing Section */}
      <Section background="light" padding="medium" id="pricing">
        <GlobalNetwork />
      </Section>

      <Section background="light" padding="medium" id="cta">
        <Clients />
      </Section>
    </>
  );
}