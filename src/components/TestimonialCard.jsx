import { Quote } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ image, name, role, company, text }) => {
  return (
    <div className="testimonial-card">
      <Quote className="quote-icon-bg" size={64} aria-hidden="true" />
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <img src={image} alt={name} className="testimonial-avatar" />
        <div className="testimonial-info">
          <h4 className="testimonial-name">{name}</h4>
          <p className="testimonial-role">{role} {company && `at ${company}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
