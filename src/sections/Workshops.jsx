import { useState, useEffect, useCallback } from 'react';
import { Sparkles, X, ArrowRight, ExternalLink, Quote, CheckCircle, Zap, Users, Target, TrendingUp } from 'lucide-react';
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
        <div className="game-changer-section">
          <div className="game-changer-header">
            <span className="workshops-pill">Holistic Evolution</span>
            <h2 className="game-changer-title">The Game-Changer Workshops</h2>
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
              <div className="details-intro">
                <p className="intro-text">
                  These game-changing workshops enable <strong>holistic transformation</strong> for corporates, educators, and student learners by unlocking their <strong>creative thinking capacity</strong> through proven methodologies and <strong>ancient practices</strong>.
                </p>
              </div>

              <div className="highlights-grid">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Zap size={20} />
                  </div>
                  <div className="highlight-content">
                    <h4>Transform Employees</h4>
                    <p>Change the way your employees perform and deliver</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Users size={20} />
                  </div>
                  <div className="highlight-content">
                    <h4>Transform Teachers</h4>
                    <p>Revolutionize the way your educators teach and engage</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">
                    <Target size={20} />
                  </div>
                  <div className="highlight-content">
                    <h4>Transform Students</h4>
                    <p>Reshape the way your students learn and grow</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">
                    <TrendingUp size={20} />
                  </div>
                  <div className="highlight-content">
                    <h4>Expert Facilitation</h4>
                    <p>19+ years of transformative training across corporates and campuses</p>
                  </div>
                </div>
              </div>

              <div className="game-changer-cta">
                <a href="#contact" className="cta-primary">
                  <span>Explore Workshops</span>
                  <ArrowRight size={20} />
                </a>
                <a href="#testimonials" className="cta-secondary">
                  <span>Success Stories</span>
                </a>
              </div>
            </div>
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
    </section>
  );
};

export default Workshops;
