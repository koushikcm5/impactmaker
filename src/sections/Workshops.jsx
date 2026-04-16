import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Workshops.css';

const Workshops = ({ data }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="workshops" className="workshops">
      <div className="container">
        <div className="workshops-header">
          <h2>THE GAME-CHANGER WORKSHOPS</h2>
          <p className="workshops-subtitle">These game changing workshops assures holistic transformation</p>
          <div className="workshops-intro">
            <p>Of your teachers in the way they teach.</p>
            <p>Of your students in the way they learn.</p>
            <p>Of your employees in the way they perform.</p>
          </div>
        </div>
        <div className="workshops-grid">
          {data.map(workshop => (
            <div key={workshop.id} className="workshop-card">
              <h3>{workshop.title}</h3>
              <p>{expanded[workshop.id] ? workshop.full : workshop.short}</p>
              <button onClick={() => toggleExpand(workshop.id)} className="read-more">
                {expanded[workshop.id] ? (
                  <>Show Less <ChevronUp size={16} /></>
                ) : (
                  <>Read More <ChevronDown size={16} /></>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
