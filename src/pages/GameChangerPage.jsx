import { useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, Zap, Users, Target, TrendingUp } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import SEOHead from '../components/SEOHead';
import { siteData } from '../data/siteData';
import { domains } from '../data/workshopData';
import gameChangerImg from '../assets/Gallery/others/f0e5ee81-4645-4133-a12e-f5104b7e1658.png';
import { PAGE_SEO, makeBreadcrumb, makeServiceSchema } from '../utils/seoConfig';
import '../sections/Workshops.css';

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

                  <div className="highlights-grid">
                    <div className="highlight-item">
                      <div className="highlight-icon"><Zap size={20} /></div>
                      <div className="highlight-content">
                        <h4>Transform Employees</h4>
                        <p>Change the way your employees perform and deliver</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon"><Users size={20} /></div>
                      <div className="highlight-content">
                        <h4>Transform Teachers</h4>
                        <p>Revolutionize the way your educators teach and engage</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon"><Target size={20} /></div>
                      <div className="highlight-content">
                        <h4>Transform Students</h4>
                        <p>Reshape the way your students learn and grow</p>
                      </div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon"><TrendingUp size={20} /></div>
                      <div className="highlight-content">
                        <h4>Expert Facilitation</h4>
                        <p>19+ years of transformative training across corporates and campuses</p>
                      </div>
                    </div>
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
