import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import speakerImg from '../assets/about/IMG-20221221-WA0017.jpg';
import './Testimonials.css';

const AUTO_SLIDE_DELAY = 6000;

const Testimonials = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isPaused, setIsPaused] = useState(false);

  const showNext = useCallback(() => {
    setDirection('next');
    setActiveIndex((current) => (current + 1) % data.length);
  }, [data.length]);

  const showPrevious = useCallback(() => {
    setDirection('prev');
    setActiveIndex((current) => (current - 1 + data.length) % data.length);
  }, [data.length]);

  useEffect(() => {
    if (data.length <= 1 || isPaused) return undefined;
    const intervalId = window.setInterval(showNext, AUTO_SLIDE_DELAY);
    return () => window.clearInterval(intervalId);
  }, [data.length, isPaused, showNext]);

  const activeTestimonial = data[activeIndex];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header testimonials-header">
          <span className="testimonials-kicker">Voices of Impact</span>
          <h2>What Our Students Say</h2>
          <p>Stories of transformation from campuses and corporate sessions globally.</p>
        </div>

        <div
          className="testimonials-showcase"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="testimonial-visual-panel">
            <div className="testimonial-image-shell">
              <img
                src={speakerImg}
                alt="Dr. Arun Divakaran"
                className="testimonial-photo"
              />
              <div className="testimonial-image-overlay">
                <span className="image-badge">Lead Trainer</span>
              </div>
            </div>
          </div>

          <div className={`testimonial-content-panel is-${direction}`} key={activeIndex}>
            <div className="quote-icon-wrapper">
              <Quote className="testimonial-quote-icon" size={48} />
            </div>
            
            <p className="testimonial-copy">{activeTestimonial.text}</p>

            <div className="testimonial-footer">
              <div className="testimonial-author-box">
                <h4 className="author-name">{activeTestimonial.author}</h4>
                <p className="author-details">
                  <span className="author-designation">{activeTestimonial.designation}</span>
                  <span className="author-divider">|</span>
                  <span className="author-org">{activeTestimonial.company}</span>
                </p>
              </div>

              <div className="testimonial-controls">
                <button
                  type="button"
                  className="control-btn"
                  onClick={showPrevious}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="control-btn"
                  onClick={showNext}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
