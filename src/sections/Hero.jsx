import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { Lightbulb } from 'lucide-react';
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

      <div className="hero-brain-overlay" aria-hidden="true">
        <svg viewBox="0 0 180 220" xmlns="http://www.w3.org/2000/svg" className="hero-brain-svg">
          <path
            d="M90 6C53 6 24 35 24 72C24 95 36 114 55 130L55 158C55 162 58 165 62 165L118 165C122 165 125 162 125 158L125 130C144 114 156 95 156 72C156 35 127 6 90 6Z"
            fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round"
          />
          <rect x="62" y="169" width="56" height="7" rx="3.5" fill="none" stroke="currentColor" strokeWidth="2.5"/>
          <rect x="67" y="180" width="46" height="7" rx="3.5" fill="none" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M82 165 L82 153 L90 145 L98 153 L98 165" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path
            d="M63 78 C58 65 65 52 76 54 C73 46 83 40 91 46 C94 39 105 39 108 46 C117 44 124 54 120 63 C127 68 125 81 118 84 C120 92 114 98 106 96 C103 104 92 104 89 96 C83 101 72 97 72 88 C65 88 59 84 63 78Z"
            fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          />
          <path d="M90 46 C88 60 88 75 90 96" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M76 54 C78 64 76 72 72 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M63 78 C70 74 72 66 68 58" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M108 46 C106 57 108 68 112 76" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M120 63 C114 68 112 76 118 84" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M48 52 C56 36 72 26 88 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        </svg>
      </div>

      <div className="container relative-z10">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              <span className="hero-heading-name">{data.title}</span>
            </h1>

            <div className="hero-subtitle-badge">
              <span className="hero-badge-pill">Executive Corporate Trainer</span>
              <p className="hero-subtitle-text">{data.subtitle}</p>
            </div>

            <div className="hero-heading-spacer" aria-hidden="true" />

            <div className="hero-cta">
              <Button variant="primary" href="#enquiry">{data.cta}</Button>
              <Button variant="outline" href="#about">{data.ctaSecondary}</Button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-scene">
              <div className="scene-glow" />
              <div className="scene-orbit scene-orbit-one" />
              <div className="scene-orbit scene-orbit-two" />

              <div className="scene-core">
                <div className="scene-core-subtitle">My Innovative DNA</div>
                <div className="scene-core-icon">
                  <Lightbulb size={64} strokeWidth={2} />
                </div>
                <div className="scene-core-tagline">Driven by Passion, Excellence Assured</div>
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
