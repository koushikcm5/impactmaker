import { useState, useEffect } from 'react';
import Button from '../components/Button';
import './Hero.css';

import img1 from '../assets/home/3-1.jpg.jpeg';
import img2 from '../assets/home/IMG-20220819-WA0013.jpg.jpeg';
import img3 from '../assets/home/IMG-20220819-WA0014.jpg.jpeg';

const heroImages = [img1, img2, img3];

const Hero = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-slider" aria-hidden="true">
        {heroImages.map((img, idx) => (
          <div
            key={idx}
            className={`hero-bg-slide ${idx === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
            role="img"
            aria-hidden="true"
          />
        ))}
        <div className="hero-bg-overlay" />
      </div>

      <div className="container relative-z10">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              <span className="hero-heading-name">{data.title}</span>
            </h1>

            <div className="hero-subtitle-badge">
              <span className="hero-badge-pill">AI Enabler</span>
              <p className="hero-subtitle-text">{data.subtitle}</p>
            </div>

            <div className="hero-heading-spacer" aria-hidden="true" />

            <div className="hero-cta">
              <Button variant="primary" href="#contact">{data.cta}</Button>
              <Button variant="outline" href="#about">{data.ctaSecondary}</Button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-scene">
              <div className="scene-glow" />
              <div className="scene-orbit scene-orbit-one" />
              <div className="scene-orbit scene-orbit-two" />

              <div className="scene-core">
                <div className="scene-core-label">AI</div>
                <div className="scene-core-tagline">Driven by Passion, Excellence Assured</div>
                <div className="scene-core-subtitle">My Innovative DNA</div>
              </div>

              <div className="scene-panel scene-panel-left">
                <span>IT Consultancy &amp; Leadership</span>
                <strong>Gen AI for Functional Roles</strong>
              </div>

              <div className="scene-panel scene-panel-featured">
                <span>IT, HR, Marketing, Business &amp; MSME</span>
                <strong>Agentic AI - Business Workflow Automation</strong>
              </div>

              <div className="scene-panel scene-panel-bottom">
                <span>Enterprise Agile &amp; Design Thinking</span>
                <strong>Gamified Learning for Gen Z</strong>
              </div>

              <div className="scene-node scene-node-one" />
              <div className="scene-node scene-node-two" />
              <div className="scene-node scene-node-three" />
              <div className="scene-node scene-node-four" />
              <div className="scene-beam scene-beam-one" />
              <div className="scene-beam scene-beam-two" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
