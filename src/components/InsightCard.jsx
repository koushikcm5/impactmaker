import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './InsightCard.css';

const InsightCard = ({ title, excerpt, category, full }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="insight-card">
      <span className="insight-category">{category}</span>
      <h3>{title}</h3>
      <p>{expanded ? full : excerpt}</p>
      <button onClick={() => setExpanded(!expanded)} className="insight-link">
        {expanded ? 'Show Less' : 'Read More'} <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default InsightCard;
