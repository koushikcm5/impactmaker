import Button from '../components/Button';
import './Hero.css';

const Hero = ({ data }) => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-heading">
              <span className="hero-heading-name">{data.title}</span>
              <span className="hero-heading-gradient">{data.subtitle}</span>
            </h1>
            <div className="hero-heading-spacer" aria-hidden="true" />
            <div className="hero-cta">
              <Button variant="primary" href="#contact">{data.cta}</Button>
              <Button variant="outline" href="#about">{data.ctaSecondary}</Button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-scene">
              <div className="scene-orbit scene-orbit-one" />
              <div className="scene-orbit scene-orbit-two" />
              <div className="scene-grid-plane" />
              <div className="scene-glow" />
              <div className="scene-core">
                <span className="scene-core-label">AI</span>
                <span className="scene-core-copy">
                  <strong>Driven by Passion, Excellence Assured</strong>
                  <small>My Innovative DNA</small>
                </span>
              </div>
              <div className="scene-panel scene-panel-left">
                <span>IT Consultancy &amp; Leadership</span>
                <strong>Gen AI for Functional Roles</strong>
              </div>
              <div className="scene-panel scene-panel-right">
                <span>IT, HR, Marketing, Business &amp; MSME</span>
                <strong>Agentic AI – Business Workflow Automation</strong>
              </div>
              <div className="scene-panel scene-panel-bottom">
                <span>Enterprise Agile &amp; Design Thinking</span>
                <strong>Gamified Learning for Gen Z</strong>
              </div>
              <span className="scene-node scene-node-one" />
              <span className="scene-node scene-node-two" />
              <span className="scene-node scene-node-three" />
              <span className="scene-node scene-node-four" />
              <span className="scene-beam scene-beam-one" />
              <span className="scene-beam scene-beam-two" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
