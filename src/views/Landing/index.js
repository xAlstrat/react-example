import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import UseCases from './sections/UseCases';
import DisplayComponents from './sections/DisplayComponents';
import KeyFeatures from './sections/KeyFeatures';
import HowItWorks from './sections/HowItWorks';
import StudyCases from './sections/StudyCases';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import Footer from './sections/Footer';

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
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;