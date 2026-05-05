import { useState, useEffect, useCallback, useRef } from 'react';
import { Sparkles, X, ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { siteData } from '../data/siteData';
import '../sections/Workshops.css';

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

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '90px' }}>
        <section className="workshops" style={{ paddingTop: '60px' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="deep-dive-part" ref={sectionRef}>
              <div className="section-header">
                <span className="workshops-pill">Transformative Learning</span>
                <h2>Deep-Dive Workshops</h2>
                <p>Holistic transformation modules designed for sustainable impact across all levels of education and corporate life.</p>
              </div>

              <div className="workshops-grid">
                {siteData.workshops.map((workshop, i) => (
                  <div key={workshop.id} className="workshop-card" style={{ '--delay': `${i * 0.1}s` }}>
                    <div className="workshop-card-image">
                      <img src={workshop.image} alt={workshop.title} loading="lazy" />
                      <div className="workshop-card-overlay">
                        <button
                          onClick={() => setSelectedWorkshop(workshop)}
                          className="workshop-expand-btn"
                          aria-label={`Read more about ${workshop.title}`}
                        >
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="workshop-card-body">
                      <div className="workshop-card-header">
                        <Sparkles className="workshop-card-icon" size={16} />
                        <h3>{workshop.title}</h3>
                      </div>
                      <p className="workshop-card-short">{workshop.short}</p>
                      <button onClick={() => setSelectedWorkshop(workshop)} className="workshop-read-more">
                        Read More <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
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
                <img src={selectedWorkshop.image} alt={selectedWorkshop.title} />
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
