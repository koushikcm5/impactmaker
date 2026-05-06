import { ArrowRight, BookOpen } from 'lucide-react';
import './InsightCard.css';

const InsightCard = ({ title, excerpt, category, image, onClick, isBook }) => {
  return (
    <div className={`insight-card-modern${isBook ? ' insight-card-book' : ''}`} onClick={onClick}>
      <div className="insight-image-container">
        {image ? (
          <img src={image} alt={title} className="insight-card-img" loading="lazy" />
        ) : (
          <div className="insight-card-placeholder">
            <BookOpen size={40} strokeWidth={1} />
          </div>
        )}
        <div className="insight-card-tag">{category}</div>
      </div>
      
      <div className="insight-content">
        <h3 className="insight-card-title">{title}</h3>
        <p className="insight-card-excerpt">{excerpt}</p>
        
        <button className="insight-read-btn">
          {isBook ? 'Read More' : 'Read More'} <ArrowRight size={16} />
        </button>
      </div>
      
      <div className="insight-card-glow" />
    </div>
  );
};


export default InsightCard;

