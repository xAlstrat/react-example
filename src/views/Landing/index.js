import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import DisplayComponents from './components/DisplayComponents';
import KeyFeatures from './components/KeyFeatures';
import HowItWorks from './components/HowItWorks';
import StudyCases from './components/StudyCases';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <UseCases />
        <KeyFeatures id="key-features" />
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