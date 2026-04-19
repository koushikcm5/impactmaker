import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import './Workshops.css';

const Workshops = ({ data }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="workshops" className="workshops">
      <div className="container">
        <div className="section-header">
          <span className="workshops-pill">Transformative Learning</span>
          <h2>Deep-Dive Workshops</h2>
          <p>Holistic transformation modules designed for sustainable impact across all levels of education and corporate life.</p>
        </div>
        
        <div className="workshops-list">
          {data.map(workshop => (
            <div key={workshop.id} className={`workshop-item ${expanded[workshop.id] ? 'is-expanded' : ''}`}>
              <div className="workshop-card">
                <div className="workshop-header">
                  <div className="workshop-title-area">
                    <Sparkles className="workshop-spark" size={18} />
                    <h3>{workshop.title}</h3>
                  </div>
                  <button onClick={() => toggleExpand(workshop.id)} className="workshop-action-btn">
                    {expanded[workshop.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                
                <div className="workshop-content">
                  <p className="workshop-short">{workshop.short}</p>
                  {expanded[workshop.id] && (
                    <div className="workshop-full-text animate-fade-in">
                      {workshop.image && (
                        <div className="workshop-image-container">
                          <img src={workshop.image} alt={workshop.title} className="workshop-embedded-image" />
                        </div>
                      )}
                      <div className="workshop-narrative">
                        {workshop.full.split('\n\n').map((para, i) => (
                          <p key={i}>{para}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
