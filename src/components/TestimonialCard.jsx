import { Quote, Star, CheckCircle } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ name, role, company, text, colorIndex }) => {
  const initials = name
    ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : '??';

  return (
    <div className={`testimonial-card accent-${colorIndex % 3}`}>
      <div className="testimonial-header">
        <div className="stars-container">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="star-icon" size={14} fill="currentColor" />
          ))}
        </div>
        <div className="verified-badge">
          <CheckCircle size={12} />
          <span>Verified</span>
        </div>
      </div>

      <Quote className="quote-icon" size={28} />
      
      <p className="testimonial-text">{text}</p>
      
      <div className="card-divider" />
      
      <div className="testimonial-footer">
        <div className="avatar-initials">{initials}</div>
        <div className="testimonial-info">
          <h4 className="testimonial-name">{name}</h4>
          <p className="testimonial-role">{role} {company && `at ${company}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
