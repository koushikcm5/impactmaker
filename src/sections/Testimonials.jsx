import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import './Testimonials.css';

const Testimonials = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    if (isPaused || data.length <= 1) return;
    const interval = setInterval(showNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, data.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Voices of Impact</span>
          <h2>What Our Students Say</h2>
          <p>Stories of transformation from campuses and corporate sessions globally.</p>
        </div>

        <div 
          className="testimonials-slider-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="testimonials-slider" ref={sliderRef}>
            {data.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <TestimonialCard
                  image={testimonial.image}
                  name={testimonial.author}
                  role={testimonial.designation}
                  company={testimonial.company}
                  text={testimonial.text}
                />
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button onClick={showPrevious} className="slider-btn" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="slider-dots">
              {data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={showNext} className="slider-btn" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
