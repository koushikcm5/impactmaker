import TestimonialCard from '../components/TestimonialCard';
import './Testimonials.css';

const Testimonials = ({ data }) => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>Hear from those who've experienced transformation</p>
        </div>
        <div className="testimonials-grid">
          {data.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
