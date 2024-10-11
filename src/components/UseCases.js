import React, { useState, useEffect } from 'react';
import './UseCases.css';

const UseCases = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const useCases = [
    {
      title: "Beginners",
      description: "Pluscoder helps beginners learn coding concepts and best practices through interactive assistance.",
      example: "Generate explanations for complex code snippets or suggest improvements for beginner-level code."
    },
    {
      title: "Experienced Developers",
      description: "Boost productivity by automating repetitive tasks and getting AI-powered suggestions for complex problems.",
      example: "Refactor legacy code or generate unit tests for existing functions with a single command."
    },
    {
      title: "Automated Workflows",
      description: "Set up intelligent agents to handle routine development tasks without manual intervention.",
      example: "Automatically review pull requests, suggest code optimizations, or generate documentation for your project."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  return (
    <section id="use-cases" className="use-cases">
      <h2>Use Cases</h2>
      <div className={`use-cases-container ${isMobile ? 'mobile' : ''}`}>
        {isMobile ? (
          <div className="carousel">
            <div className="case-card">
              <h3>{useCases[currentSlide].title}</h3>
              <p>{useCases[currentSlide].description}</p>
              <p><strong>Example:</strong> {useCases[currentSlide].example}</p>
            </div>
            <div className="carousel-controls">
              <button onClick={prevSlide}>&lt;</button>
              <button onClick={nextSlide}>&gt;</button>
            </div>
          </div>
        ) : (
          useCases.map((useCase, index) => (
            <div key={index} className="case-card">
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
              <p><strong>Example:</strong> {useCase.example}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default UseCases;