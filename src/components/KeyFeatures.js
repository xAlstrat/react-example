import React from 'react';
import './KeyFeatures.css';

const KeyFeatures = () => {
  return (
    <section id="key-features" className="key-features">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature">
          <div className="feature-icon">🤖</div>
          <h3>Copilot Functionality</h3>
          <p>AI-powered coding assistance to boost your productivity.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🔄</div>
          <h3>Automated Agent Workflows</h3>
          <p>Streamline your development process with intelligent automation.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🧠</div>
          <h3>Specialized Knowledge</h3>
          <p>Access domain-specific expertise for your projects.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;