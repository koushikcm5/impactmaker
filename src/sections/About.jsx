import speakerImg from '../assets/about/IMG-20221221-WA0017.jpg';
import { Target, Quote as QuoteIcon, Zap, Brain, Heart, PenTool, Mic, Activity, BookOpen, Star } from 'lucide-react';
import './About.css';

const iconMap = {
  PenTool,
  Mic,
  Activity,
  Zap,
  BookOpen
};

const About = ({ data }) => {
  return (
    <section className="about" id="about">
      <div className="about-backdrop" aria-hidden="true">
        <div className="backdrop-blob" />
      </div>
      
      <div className="container">
        <div className="about-layout-grid">
          {/* Main Narrative Area */}
          <div className="about-narrative-panel">
            <div className="about-header">
              <div className="mission-badge">
                <Target size={16} />
                <span>Our Mission</span>
              </div>
              <h2 className="about-main-title">{data.title}</h2>
              <p className="about-intro-lead">{data.intro}</p>
            </div>

            <div className="about-philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-icon-box orange">
                  <Zap size={22} />
                </div>
                <div className="philosophy-text">
                  <h4>Creative Habits</h4>
                  <p>Enabling students to take risks and learn through experimentation.</p>
                </div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon-box blue">
                  <Brain size={22} />
                </div>
                <div className="philosophy-text">
                  <h4>Mindset Shift</h4>
                  <p>Transforming how teachers perceive their vision and work style.</p>
                </div>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon-box navy">
                  <Heart size={22} />
                </div>
                <div className="philosophy-text">
                  <h4>Lasting Impact</h4>
                  <p>Creating stories that engage and touch the hearts of learners.</p>
                </div>
              </div>
            </div>

            <div className="about-long-narrative">
              {data.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="narrative-para">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Founder Profile Area */}
          <div className="about-founder-panel">
            <div className="founder-card-premium">
              <div className="founder-img-container">
                <img src={speakerImg} alt={data.founder.name} className="founder-portrait" />
                <div className="founder-badge">
                  <span>Founder & CEO</span>
                </div>
              </div>
              
              <div className="founder-body">
                <h3>{data.founder.name}</h3>
                <span className="founder-kicker">{data.founder.title}</span>
                
                <div className="founder-accent-quote">
                  <QuoteIcon size={20} className="accent-quote-icon" />
                  <p>{data.founder.quote}</p>
                </div>
                
                <p className="founder-bio-text">{data.founder.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trainer USP Section */}
        {data.usp && (
          <div className="trainer-usp-section">
            <div className="usp-header">
              <div className="usp-badge">
                <Star size={16} />
                <span>Excellence</span>
              </div>
              <h3 className="usp-title">Trainer's USP</h3>
            </div>
            <div className="usp-grid">
              {data.usp.map((item, idx) => {
                const Icon = iconMap[item.icon] || Star;
                return (
                  <div key={idx} className="usp-card">
                    <div className="usp-icon-wrapper">
                      <Icon size={24} />
                    </div>
                    <div className="usp-content">
                      <h4>{item.title}</h4>
                      <p>
                        {item.description.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < item.description.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
