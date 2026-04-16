import { Briefcase, Users, GraduationCap, Target, Lightbulb, TrendingUp } from 'lucide-react';
import Button from './Button';
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
  const Icon = iconMap[icon] || Briefcase;
  
  return (
    <div className="service-card">
      <div className="service-icon">
        <Icon size={32} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button variant="secondary">Learn More</Button>
    </div>
  );
};

export default ServiceCard;
