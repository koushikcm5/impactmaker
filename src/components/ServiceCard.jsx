import { Briefcase, Users, GraduationCap, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import './ServiceCard.css';

const iconMap = {
  'briefcase': Briefcase,
  'users': Users,
  'graduation-cap': GraduationCap,
  'target': Target,
  'lightbulb': Lightbulb,
  'trending-up': TrendingUp
};

const ServiceCard = ({ title, description, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[icon] || Briefcase;
  
  return (
    <div 
      className="service-card-container"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`service-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <svg className="card-border-trace" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="100%" height="100%" rx="28" ry="28" />
        </svg>
        {/* Front */}
        <div className="service-card-front">
          <svg className="svg-blob-bg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.4,-46.5C91,-33.9,97.2,-18.8,96.6,-4.1C96,10.6,88.6,24.9,78.7,37.1C68.8,49.3,56.4,59.3,42.5,66.1C28.6,72.9,13.2,76.5,-1.6,79.5C-16.4,82.5,-32.8,84.9,-46.6,78.7C-60.4,72.5,-71.6,57.7,-80.6,41.9C-89.6,26.1,-96.4,9.3,-95.7,-7.1C-95,-23.5,-86.8,-39.5,-74.6,-51.2C-62.4,-62.9,-46.2,-70.3,-31.1,-75.8C-16,-81.3, -2,-84.9, 13,-83.4C28,-81.9, 44.7,-76.4, 44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
          <div className="service-icon">
            <Icon size={40} />
          </div>
          <h3>{title}</h3>
          
        </div>
        
        {/* Back */}
        <div className="service-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
