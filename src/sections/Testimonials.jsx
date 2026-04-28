import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';
import './Testimonials.css';

const Testimonials = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  // Responsive items per page
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSteps = Math.max(1, data.length - itemsPerPage + 1);

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSteps);
  };

  const showPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  useEffect(() => {
    if (isPaused || data.length <= itemsPerPage) return;
    const interval = setInterval(showNext, 4000);
    return () => clearInterval(interval);
  }, [isPaused, data.length, itemsPerPage, totalSteps]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / itemsPerPage)}%)`;
    }
  }, [currentIndex, itemsPerPage]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Voices of Impact</span>
          <h2>Our Testimonials</h2>
          <p>Stories of transformation from corporate and campuses sessions globally.</p>
        </div>

        <div className="testimonials-slider-container">
          <div 
            className="testimonials-slider-wrapper"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="testimonials-slider" 
              ref={sliderRef}
              style={{ 
                display: 'flex', 
                transition: 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)' 
              }}
            >
              {data.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="testimonial-slide"
                  style={{ 
                    flex: `0 0 ${100 / itemsPerPage}%`,
                    padding: '0 12px'
                  }}
                >
                  <TestimonialCard
                    name={testimonial.author}
                    role={testimonial.designation}
                    company={testimonial.company}
                    text={testimonial.text}
                    colorIndex={index}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <button onClick={showPrevious} className="slider-btn" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <div className="slider-dots">
              {[...Array(totalSteps)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to testimonial group ${index + 1}`}
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
