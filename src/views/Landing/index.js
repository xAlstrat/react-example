import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import UseCases from './sections/UseCases';
// Remove unused imports
import Pricing from './sections/Pricing';
import Footer from './sections/Footer';
import FAQ from './sections/FAQ';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <UseCases />
        {/* <KeyFeatures id="key-features" /> */}
        {/* <DisplayComponents /> */}
        {/* <HowItWorks />
        <StudyCases />
        <Testimonials /> */}
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;