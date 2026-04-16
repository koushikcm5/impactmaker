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
        {/* Front */}
        <div className="service-card-front">
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
