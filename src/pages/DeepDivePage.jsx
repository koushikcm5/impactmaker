import { useState, useEffect, useCallback, useRef } from 'react';
import { GraduationCap, Users, X, ArrowRight } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
import { siteData } from '../data/siteData';
import { PAGE_SEO, makeBreadcrumb, makeServiceSchema } from '../utils/seoConfig';
import '../sections/Workshops.css';

const schemas = [
  makeBreadcrumb([{ name: 'Deep-Dive Workshops', path: '/workshops/deep-dive' }]),
  makeServiceSchema(
    'Deep-Dive AI & Analytics Workshops',
    'Intensive deep-dive workshops on Generative AI, Agentic AI, Data Analytics, and enterprise technology for corporates.',
    '/workshops/deep-dive'
  ),
];

const cardMeta = {
  2: { icon: GraduationCap, pill: 'Student Empowerment', pillClass: '' },
  3: { icon: Users,         pill: 'Faculty Development',  pillClass: 'ws-pill-orange' },
};

const DeepDivePage = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const sectionRef = useRef(null);

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
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); observer.unobserve(el); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const edtechWorkshops = siteData.workshops.filter(w => w.id !== 1);

  return (
    <>
      <SEOHead
        title={PAGE_SEO.workshopDeepDive.title}
        description={PAGE_SEO.workshopDeepDive.description}
        keywords={PAGE_SEO.workshopDeepDive.keywords}
        canonical={PAGE_SEO.workshopDeepDive.canonical}
        schemas={schemas}
      />
      <Navbar />
      
      {/* Visual Breadcrumb */}
      <Breadcrumb 
        items={[{ name: 'Workshops & Ed-Tech', path: '/workshops/deep-dive' }]} 
        style={{ paddingTop: '100px' }} 
      />

      <div style={{ paddingTop: '10px' }}>
        <section className="workshops" style={{ paddingTop: '30px' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="ws-category-section" ref={sectionRef} style={{ marginTop: 0 }}>
              <div className="ws-category-header">
                <span className="workshops-pill">Transformative Learning</span>
                <h1 className="ws-category-title">Ed Tech Workshops</h1>
                <p className="ws-category-desc">
                  Holistic transformation modules designed for sustainable impact across all levels of education.
                </p>
              </div>

              <div className="edtech-cards-stack">
                {edtechWorkshops.map((workshop, i) => {
                  const meta = cardMeta[workshop.id] || {};
                  const Icon = meta.icon || GraduationCap;
                  return (
                    <div key={workshop.id} className="corp-ws-card edtech-ws-card" style={{ '--delay': `${i * 0.12}s` }}>
                      <div className="corp-ws-image">
                        <img src={workshop.image} alt={workshop.title} loading="lazy"  width="800" height="600" />
                      </div>
                      <div className="corp-ws-body">
                        <span className={`workshops-pill edtech-card-pill ${meta.pillClass || ''}`} style={{ marginBottom: '4px', display: 'inline-block' }}>
                          {meta.pill}
                        </span>
                        <div className="edtech-card-heading">
                          <div className="edtech-card-icon-wrap">
                            <Icon size={20} />
                          </div>
                          <h2 className="edtech-card-title">{workshop.title}</h2>
                        </div>
                        <p className="corp-ws-text">{workshop.short}</p>
                        <button onClick={() => setSelectedWorkshop(workshop)} className="workshop-read-more" style={{ marginTop: '8px' }}>
                          Read More <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="edtech-intro" style={{ marginTop: '48px' }}>
                <p>As an educator, I have seen how schools can struggle to build the habits that make students lifelong learners. Through regular conversations with education professionals, one pattern stands out: institutions and staff are often caught up in repetitive processes, paperwork, standards, marks, and quality checks. Over time, teaching can become mechanical, and learning begins to feel like a struggle instead of a joyful, courageous journey.</p>
                <p>Our state-of-the-art workshops are built to change that. Grounded in real classroom challenges, they introduce simple, action-ready frameworks, disciplines, and tools that help educators create spaces where students take risks, make mistakes, experiment, and think beyond the obvious. The result is a meaningful shift in how educators see themselves, their work, and their vision for lasting learning experiences.</p>
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

export default DeepDivePage;
