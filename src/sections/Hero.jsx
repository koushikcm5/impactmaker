import Button from '../components/Button';
import './Hero.css';

const Hero = ({ data, metrics = [] }) => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-eyebrow">AI-inspired learning experiences</span>
            <h1>{data.title}</h1>
            <p className="hero-subtitle">{data.subtitle}</p>
            <div className="hero-list">
              {data.content.map((item, index) => (
                <p key={index} className="hero-item">{item}</p>
              ))}
            </div>
            <blockquote className="hero-quote">{data.quote}</blockquote>
            <div className="hero-cta">
              <Button variant="primary" href="#contact">{data.cta}</Button>
              <Button variant="outline" href="#about">{data.ctaSecondary}</Button>
            </div>
            <div className="hero-metrics">
              {metrics.map((metric) => (
                <div key={metric.label} className="hero-metric">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
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
                <span className="scene-core-copy">Creative Thinking Engine</span>
              </div>
              <div className="scene-panel scene-panel-left">
                <span>Adaptive flow</span>
                <strong>Teacher and student energy aligned</strong>
              </div>
              <div className="scene-panel scene-panel-right">
                <span>Live workshop layer</span>
                <strong>Interactive delivery for teams and campuses</strong>
              </div>
              <div className="scene-panel scene-panel-bottom">
                <span>Insight signal</span>
                <strong>Ancient practices translated into modern action</strong>
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
