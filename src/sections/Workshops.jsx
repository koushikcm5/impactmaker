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
