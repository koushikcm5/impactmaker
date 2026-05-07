import { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight, FileText, Eye, Download, ChevronDown } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import SEOHead from '../components/SEOHead';
import { siteData } from '../data/siteData';
import { domains } from '../data/workshopData';
import gameChangerImg from '../assets/Gallery/others/f0e5ee81-4645-4133-a12e-f5104b7e1658.png';
import { PAGE_SEO, makeBreadcrumb, makeServiceSchema } from '../utils/seoConfig';
import pdf1 from '../assets/pdf/J-Impact Creative Learning Services Brochure.pdf?url';
import pdf2 from '../assets/pdf/Quantum minds - A One Day Creative Teaching Workshop - Brochure.pdf?url';
import pdf3 from '../assets/pdf/Quantum minds Creative Teaching  (Flyer).pdf?url';
import '../sections/Workshops.css';

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

const schemas = [
  makeBreadcrumb([
    { name: 'Workshops', path: '/workshops/game-changer' },
    { name: 'Game-Changer Workshops', path: '/workshops/game-changer' },
  ]),
  makeServiceSchema(
    'Game-Changer Corporate Workshops',
    'Holistic transformation workshops for corporates, educators, and students — unlocking creative thinking and AI adoption through proven methodologies.',
    '/workshops/game-changer'
  ),
];

const GameChangerPage = () => {
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
    <>
      <SEOHead
        title={PAGE_SEO.workshopGameChanger.title}
        description={PAGE_SEO.workshopGameChanger.description}
        keywords={PAGE_SEO.workshopGameChanger.keywords}
        canonical={PAGE_SEO.workshopGameChanger.canonical}
        schemas={schemas}
      />
      <Navbar />
      <div style={{ paddingTop: '90px' }}>
        <section className="workshops" style={{ paddingTop: '60px' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="game-changer-section" ref={sectionRef} style={{ marginBottom: 0 }}>
              <div className="game-changer-header">
                <span className="workshops-pill">Holistic Evolution</span>
                <h1 className="game-changer-title">The Game-Changer Workshops</h1>
              </div>

              <div className="game-changer-content">
                <div className="game-changer-image-wrapper">
                  <div className="game-changer-image">
                    <img src={gameChangerImg} alt="Game-Changer Workshops" loading="lazy" />
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
                      <li>New Age Technology Workshops (Gen AI, ML, Data Science, Programming &amp; Analytics etc.)</li>
                      <li>Design Thinking | Art of Business Story Telling | Domain Knowledge</li>
                      <li>Agile &amp; Digital Transformation, Clearing the Digital Blur.</li>
                      <li>Building Entrepreneurial Thought Leadership Development.</li>
                      <li>Creative Teaching Formulas - Faculty Development Workshops.</li>
                      <li>Placement &amp; Transformative Skill Enablement Workshops.</li>
                    </ul>
                  </div>

                  <div className="game-changer-cta">
                    <a href="/#enquiry" className="cta-primary">
                      <span>Explore Workshops</span>
                      <ArrowRight size={20} />
                    </a>
                    <a href="/#testimonials" className="cta-secondary">
                      <span>Success Stories</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Brochure dropdown section */}
              <div className="brochure-section">
                <div className="brochure-row-header">
                  <div className="domain-divider" />
                  <span className="domain-section-label">Download Brochures</span>
                  <div className="domain-divider" />
                </div>

                <button
                  className={`brochure-dropdown-trigger${brochureOpen ? ' open' : ''}`}
                  onClick={() => setBrochureOpen((v) => !v)}
                  aria-expanded={brochureOpen}
                >
                  <span className="brochure-trigger-left">
                    <FileText size={20} />
                    View &amp; Download Our Brochures
                  </span>
                  <span className="brochure-trigger-count">3 PDFs</span>
                  <ChevronDown size={18} className="brochure-trigger-chevron" />
                </button>

                {brochureOpen && (
                  <div className="brochure-cards brochure-cards-open">
                    {brochures.map(({ title, subtitle, url, filename }) => (
                      <div key={filename} className="brochure-card">
                        <div className="brochure-card-icon">
                          <FileText size={26} />
                        </div>
                        <div className="brochure-card-info">
                          <strong className="brochure-card-title">{title}</strong>
                          <span className="brochure-card-subtitle">{subtitle}</span>
                        </div>
                        <div className="brochure-card-actions">
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brochure-btn brochure-btn-view"
                          >
                            <Eye size={15} />
                            View
                          </a>
                          <a
                            href={url}
                            download={filename}
                            className="brochure-btn brochure-btn-download"
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

              <div className="domain-expertise-row">
                <div className="domain-row-header">
                  <div className="domain-divider" />
                  <span className="domain-section-label">Domain Expertise</span>
                  <div className="domain-divider" />
                </div>
                <div className="domain-cards-grid">
                  {domains.map(({ label, icon: Icon }, i) => (
                    <div
                      key={label}
                      className="domain-card"
                      style={{ '--delay': `${0.5 + i * 0.06}s` }}
                    >
                      <div className="domain-card-icon"><Icon size={16} /></div>
                      <span className="domain-card-label">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer contact={siteData.contact} />
    </>
  );
};

export default GameChangerPage;
