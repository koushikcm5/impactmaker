import { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, FileText, Eye, Download, ChevronDown } from 'lucide-react';
import NetworkCanvas from '../components/NetworkCanvas';
import gameChangerImg from '../assets/Gallery/others/f0e5ee81-4645-4133-a12e-f5104b7e1658.png';
import { domains } from '../data/workshopData';
import pdf1 from '../assets/pdf/J-Impact Creative Learning Services Brochure.pdf?url';
import pdf2 from '../assets/pdf/Quantum minds - A One Day Creative Teaching Workshop - Brochure.pdf?url';
import pdf3 from '../assets/pdf/Quantum minds Creative Teaching  (Flyer).pdf?url';
import './Workshops.css';

const brochures = [
  {
    title: 'J-Impact Creative Learning Services',
    subtitle: 'Company Brochure',
    url: pdf1,
    filename: 'J-Impact Creative Learning Services Brochure.pdf',
  },
  {
    title: 'Quantum Minds',
    subtitle: 'A One Day Creative Teaching Workshop — Brochure',
    url: pdf2,
    filename: 'Quantum Minds Creative Teaching Workshop Brochure.pdf',
  },
  {
    title: 'Quantum Minds',
    subtitle: 'Creative Teaching — Flyer',
    url: pdf3,
    filename: 'Quantum Minds Creative Teaching Flyer.pdf',
  },
];

const Workshops = () => {
  const sectionRef = useRef(null);
  const [brochureOpen, setBrochureOpen] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gamechanger-workshops" className="workshops">
      <NetworkCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <div className="game-changer-section" id="game-changer" ref={sectionRef} style={{ marginBottom: 0 }}>
          <div className="game-changer-header">
            <span className="workshops-pill">Holistic Transformation</span>
            <h2 className="game-changer-title">The Game-Changer Corporate Workshops</h2>
          </div>

          <div className="game-changer-content">
            <div className="game-changer-image-wrapper">
              <div className="game-changer-image">
                <img src={gameChangerImg} alt="Game-Changer Workshops" loading="lazy"  width="800" height="600" />
                <div className="image-badge">
                  <Sparkles size={16} />
                  <span>Transformative Learning</span>
                </div>
              </div>
            </div>

            <div className="game-changer-details">
              <p className="intro-text">
                These game-changing workshops enable <strong>holistic transformation</strong> for
                corporates, educators, and student learners by unlocking their{' '}
                <strong>creative thinking capacity</strong> through proven methodologies and{' '}
                <strong>ancient practices</strong>.
              </p>

              <div className="offerings-section">
                <h3 className="offerings-title">What we offer?</h3>
                <ul className="offerings-list">
                  {[
                    'New Age Technology Workshops (Gen AI, ML, Data Science, Programming & Analytics etc.)',
                    'Design Thinking | Art of Business Story Telling | Domain Knowledge',
                    'Agile & Digital Transformation, Clearing the Digital Blur.',
                    'Building Entrepreneurial Thought Leadership Development.',
                    'Creative Teaching Formulas - Faculty Development Workshops.',
                    'Placement & Transformative Skill Enablement Workshops.',
                  ].map((item, idx) => (
                    <li key={idx} className="offerings-item" style={{ '--delay': `${0.35 + idx * 0.08}s` }}>
                      <CheckCircle2 className="offerings-tick" size={17} />
                      <div className="offerings-text">{item}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="game-changer-cta">
                <a href="#enquiry" className="cta-primary">
                  <span>Explore Workshops</span>
                  <ArrowRight size={20} />
                </a>
                <a href="#testimonials" className="cta-secondary">
                  <span>Success Stories</span>
                </a>
              </div>

              {/* Brochure dropdown */}
              <div className="ws-brochure-wrap">
                <button
                  className={`ws-brochure-trigger${brochureOpen ? ' open' : ''}`}
                  onClick={() => setBrochureOpen((v) => !v)}
                  aria-expanded={brochureOpen}
                >
                  <FileText size={18} />
                  <span>Download Brochures</span>
                  <span className="ws-brochure-count">3 PDFs</span>
                  <ChevronDown size={16} className="ws-brochure-chevron" />
                </button>

                {brochureOpen && (
                  <div className="ws-brochure-list">
                    {brochures.map(({ title, subtitle, url, filename }) => (
                      <div key={filename} className="ws-brochure-item">
                        <div className="ws-brochure-item-icon">
                          <FileText size={20} />
                        </div>
                        <div className="ws-brochure-item-info">
                          <strong>{title}</strong>
                          <span>{subtitle}</span>
                        </div>
                        <div className="ws-brochure-item-actions">
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ws-brochure-btn ws-brochure-btn-view"
                            title="View PDF"
                          >
                            <Eye size={15} />
                            View
                          </a>
                          <a
                            href={url}
                            download={filename}
                            className="ws-brochure-btn ws-brochure-btn-dl"
                            title="Download PDF"
                          >
                            <Download size={15} />
                            Download
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="domain-expertise-row">
            <div className="domain-row-header">
              <div className="domain-divider" />
              <span className="domain-section-label">Domain Expertise</span>
              <div className="domain-divider" />
            </div>
            <div className="domain-cards-grid">
              {domains.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.label}
                    className="domain-card"
                    style={{ '--delay': `${0.5 + i * 0.06}s` }}
                  >
                    <div className="domain-card-icon"><Icon size={16} /></div>
                    <span className="domain-card-label">{d.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Workshops;
