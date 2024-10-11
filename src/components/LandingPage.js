import React from 'react';
import Header from './Header';
import Hero from './Hero';
import KeyFeatures from './KeyFeatures';
import HowItWorks from './HowItWorks';
import UseCases from './UseCases';
import Footer from './Footer';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <KeyFeatures />
        <HowItWorks />
        <UseCases />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;