import { useEffect, useRef } from 'react';
import speakerImg from '../assets/about/IMG-20221221-WA0017.jpg';
import { Target, Quote as QuoteIcon, CheckCircle2 } from 'lucide-react';
import './About.css';


const arunBio = `Apart from his rich IT Leadership expertise, He is also a social worker, who loves to mentor the youth of today in channelizing their vibrant energy into value additions to the society. He has an incredible passion to understand, integrate and deepen the transformative changes needed in the conventional methods of education. Over thousands of Corporates, Ed-tech professionals and Students across the country and abroad have been benefited in the Action-packed creativity enabling workshops he pioneered. His in-person workshops are fuelled by new-age modernized approaches with a touch of ancient practices that triggers a completely new perspective of looking at life.`;

const About = ({ data }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); observer.unobserve(el); } },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about-impact-maker" ref={sectionRef}>
      <span id="about" aria-hidden="true" style={{ position: 'absolute', top: 0 }} />
      <div className="about-backdrop" aria-hidden="true">
        <div className="backdrop-blob" />
      </div>

      <div className="container">

        {/* Header */}
        <div className="about-section-header">
          <div className="mission-badge">
            <Target size={16} />
            <span>Our Mission</span>
          </div>
          <h2 className="about-main-title">{data.title}</h2>
          <p className="about-intro-lead">{data.intro}</p>
        </div>

        <div className="about-layout-grid">

          {/* Left — Bio + USP */}
          <div className="about-narrative-panel">
            <p className="arun-bio-para" style={{ '--delay': '0.25s' }}>
              {arunBio}
            </p>

            {data.usp && (
              <div className="usp-inline-section">
                <h3 className="usp-inline-title">Dr. Arun Divakaran's USP</h3>
                <ul className="usp-list">
                  {data.usp.map((item, idx) => (
                    <li
                      key={idx}
                      className="usp-item"
                      style={{ '--delay': `${0.35 + idx * 0.08}s` }}
                    >
                      <CheckCircle2 className="usp-tick" size={17} />
                      <div className="usp-text">
                        <strong>{item.title}:</strong> {item.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right — Founder */}
          <div className="about-founder-panel">
            <div className="founder-card-premium">
              <div className="founder-img-container">
                <img src={speakerImg} alt={data.founder.name} className="founder-portrait" />
                <div className="founder-badge">
                  <span>Co-Founder & Executive Trainer</span>
                </div>
              </div>
              <div className="founder-body">
                <h3>{data.founder.name}</h3>
                <span className="founder-kicker">{data.founder.title || 'Founder'}</span>
                <div className="founder-accent-quote">
                  <QuoteIcon size={20} className="accent-quote-icon" />
                  <p>{data.founder.quote}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width — Narrative paragraphs span both columns */}
          {data.content && data.content.trim() && (
            <div className="about-long-narrative">
              {data.content.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="narrative-para"
                  style={{ '--delay': `${0.4 + index * 0.1}s` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default About;
