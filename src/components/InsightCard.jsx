import { ArrowRight } from 'lucide-react';
import './InsightCard.css';

const InsightCard = ({ title, excerpt, category }) => {
  return (
    <div className="insight-card">
      <span className="insight-category">{category}</span>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <a href="#" className="insight-link">
        Read More <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default InsightCard;
