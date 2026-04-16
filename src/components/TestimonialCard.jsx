import { Quote } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ text, author, position }) => {
  return (
    <div className="testimonial-card">
      <Quote className="quote-icon" size={40} />
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <p className="author-name">{author}</p>
        <p className="author-position">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
