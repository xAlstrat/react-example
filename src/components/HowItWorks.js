import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    { title: "Input Command", description: "Enter your coding request or query" },
    { title: "AI Analysis", description: "Pluscoder analyzes your input and context" },
    { title: "Generate Solution", description: "AI generates a tailored solution" },
    { title: "Review & Implement", description: "Review the output and implement in your project" }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How Pluscoder Works</h2>
      <div className="workflow">
        <svg className="workflow-svg" viewBox="0 0 800 200" aria-hidden="true">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" />
            </marker>
          </defs>
          <line x1="100" y1="100" x2="700" y2="100" stroke="#ccc" strokeWidth="2" markerEnd="url(#arrowhead)" />
        </svg>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number" aria-hidden="true">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;