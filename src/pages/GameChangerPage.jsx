import { useEffect, useRef, useState, useCallback } from 'react';
import { Sparkles, ArrowRight, FileText, Eye, Download, ChevronDown, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { siteData } from '../data/siteData';
import { domains } from '../data/workshopData';
import gameChangerImg from '../assets/Gallery/others/f0e5ee81-4645-4133-a12e-f5104b7e1658.webp';
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
    { name: 'Game-Changer Workshops', path: '/workshops/game-changer' },
  ]),
  makeServiceSchema(
    'Game-Changer Corporate Workshops',
    'Holistic transformation workshops for corporates, educators, and students — unlocking creative thinking and AI adoption through proven methodologies.',
    '/workshops/game-changer'
  ),
];

const corporateWorkshop = siteData.workshops.find(w => w.id === 1);

const GameChangerPage = () => {
  const sectionRef = useRef(null);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const closeModal = useCallback(() => setSelectedWorkshop(null), []);

  useEffect(() => {
    document.body.style.overflow = selectedWorkshop ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedWorkshop]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeModal]);

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
      
      {/* Visual Breadcrumb */}
      <Breadcrumb 
        items={[{ name: 'Game-Changer Workshops', path: '/workshops/game-changer' }]} 
        style={{ paddingTop: '100px' }} 
      />

      <div style={{ paddingTop: '10px' }}>
        <section className="workshops" style={{ paddingTop: '30px' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="game-changer-section" ref={sectionRef} style={{ marginBottom: 0 }}>
              <div className="game-changer-header">
                <span className="workshops-pill">Holistic Transformation</span>
                <h1 className="game-changer-title">The Game-Changer Corporate Workshops</h1>
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

              {corporateWorkshop && (
                <div className="corporate-workshops-row" style={{ marginTop: '44px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
                    <span className="domain-section-label" style={{ background: 'rgba(242,140,40,0.12)', color: '#c9720a', border: '1px solid rgba(242,140,40,0.25)', fontSize: '0.75rem', letterSpacing: '0.13em' }}>
                      Corporate Workshops
                    </span>
                  </div>
                  <div className="corp-ws-card">
                    <div className="corp-ws-image">
                      <img src={corporateWorkshop.image} alt={corporateWorkshop.title} loading="lazy"  width="800" height="600" />
                      <div className="workshop-card-overlay">
                        <button
                          onClick={() => setSelectedWorkshop(corporateWorkshop)}
                          className="workshop-expand-btn"
                          aria-label={`Read more about ${corporateWorkshop.title}`}
                        >
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="corp-ws-body">
                      <div className="workshop-card-header">
                        <Sparkles className="workshop-card-icon" size={16} />
                        <h3>{corporateWorkshop.title}</h3>
                      </div>
                      <p className="corp-ws-text">{corporateWorkshop.short}</p>
                      <button onClick={() => setSelectedWorkshop(corporateWorkshop)} className="workshop-read-more">
                        Read More <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

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
      {selectedWorkshop && (
        <div className="workshop-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="workshop-modal-container" onClick={e => e.stopPropagation()}>
            <button className="workshop-modal-close" onClick={closeModal} aria-label="Close">
              <X size={24} />
            </button>
            <div className="workshop-modal-content animate-modal">
              <div className="workshop-modal-visual">
                {selectedWorkshop.intro && <p className="workshop-modal-intro">{selectedWorkshop.intro}</p>}
                <img src={selectedWorkshop.image} alt={selectedWorkshop.title}  width="800" height="600" />
              </div>
              <div className="workshop-modal-info">
                <span className="workshop-modal-tag">Workshop Programme</span>
                <h2>{selectedWorkshop.title}</h2>
                <div className="workshop-modal-divider" />
                <div className="workshop-modal-narrative">
                  {selectedWorkshop.full.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <button className="workshop-modal-cta" onClick={closeModal}>
                  Close Discovery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer contact={siteData.contact} />
    </>
  );
};

export default GameChangerPage;
