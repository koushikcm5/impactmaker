import { useState, useEffect, useCallback } from 'react';
import { Sparkles, X, ArrowRight, ExternalLink, Quote } from 'lucide-react';
import NetworkCanvas from '../components/NetworkCanvas';
import ServiceCard from '../components/ServiceCard';
import gameChangerImg from '../assets/Gallery/others/f0e5ee81-4645-4133-a12e-f5104b7e1658.png';
import './Workshops.css';

const Workshops = ({ programs, data }) => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const closeModal = useCallback(() => {
    setSelectedWorkshop(null);
  }, []);

  useEffect(() => {
    if (selectedWorkshop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedWorkshop]);

  // Handle Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeModal]);

  return (
    <section id="workshops" className="workshops">
      <NetworkCanvas />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* --- Game-Changer Workshops --- */}
        <div className="game-changer-part">
          <div className="section-header services-header">
            <span className="workshops-pill">Holistic Evolution</span>
            <h2>The Game-Changer Workshops</h2>
            
            <div className="game-changer-hero-image">
               <img src={gameChangerImg} alt="The Game-Changer Workshops" loading="lazy" />
            </div>
            
            <div className="premium-quote-container">
              <div className="quote-accent-line"></div>
              <div className="premium-quote-box">
                <Quote size={40} className="quote-bg-icon" />
                <p className="premium-quote-text">
                  These game-changing workshops enable <span className="premium-quote-emphasis">holistic transformation</span> for Corporates, educators, and student Leaners by enabling their <span className="premium-quote-emphasis">creative thinking capacity</span> through <span className="premium-quote-emphasis">ancient practices</span>
                </p>
              </div>
              <div className="quote-accent-line"></div>
            </div>
          </div>
          
          <div className="services-grid">
            {programs && programs.map(service => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>

        {/* --- Deep-Dive Workshops --- */}
        <div className="deep-dive-part">
        <div className="section-header">
          <span className="workshops-pill">Transformative Learning</span>
          <h2>Deep-Dive Workshops</h2>
          <p>Holistic transformation modules designed for sustainable impact across all levels of education and corporate life.</p>
        </div>
        
        <div className="workshops-grid">
          {data.map(workshop => (
            <div key={workshop.id} className="workshop-card">
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
                <button 
                  onClick={() => setSelectedWorkshop(workshop)} 
                  className="workshop-read-more"
                >
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Workshop Detail Modal */}
      {selectedWorkshop && (
        <div className="workshop-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="workshop-modal-container" onClick={e => e.stopPropagation()}>
            <button className="workshop-modal-close" onClick={closeModal} aria-label="Close">
              <X size={24} />
            </button>
            <div className="workshop-modal-content animate-modal">
              <div className="workshop-modal-visual">
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
    </section>
  );
};

export default Workshops;
