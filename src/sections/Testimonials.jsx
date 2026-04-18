import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import speakerImg from '../assets/about/IMG-20221221-WA0017.jpg';
import './Testimonials.css';

const AUTO_SLIDE_DELAY = 4500;
const FAST_SLIDE_DELAY = 900;

const Testimonials = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isFast, setIsFast] = useState(false);

  useEffect(() => {
    if (data.length <= 1) return undefined;
    const intervalId = window.setInterval(() => {
      setDirection('next');
      setActiveIndex((current) => (current + 1) % data.length);
    }, isFast ? FAST_SLIDE_DELAY : AUTO_SLIDE_DELAY);
    return () => window.clearInterval(intervalId);
  }, [data.length, isFast]);

  const showPrevious = () => {
    setDirection('prev');
    setActiveIndex((current) => (current - 1 + data.length) % data.length);
  };

  const showNext = () => {
    setDirection('next');
    setActiveIndex((current) => (current + 1) % data.length);
  };

  const activeTestimonial = data[activeIndex];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header testimonials-header">
          <span className="testimonials-kicker">Voices of impact</span>
          <h2>What Our Students Say</h2>
          <p>From campuses to corporate workshops, each story reflects the energy, clarity, and transformation built into every session.</p>
        </div>

        <div
          className="testimonials-showcase"
          onMouseEnter={() => setIsFast(true)}
          onMouseLeave={() => setIsFast(false)}
        >
          {/* Fixed speaker photo - same for all testimonials */}
          <div className="testimonial-visual-panel">
            <div className="testimonial-image-shell">
              <img
                src={speakerImg}
                alt="Dr. Arun Divakaran"
                className="testimonial-photo"
              />
            </div>
          </div>

          {/* Testimonial content */}
          <div className={`testimonial-content-panel is-${direction}`} key={activeIndex}>
            <Quote className="testimonial-quote-icon" size={54} strokeWidth={1.6} />
            <p className="testimonial-copy">{activeTestimonial.text}</p>

            <div className="testimonial-meta">
              <p className="testimonial-company">{activeTestimonial.company}</p>
              <p className="testimonial-person">
                {activeTestimonial.author}
                <span>{activeTestimonial.designation}</span>
              </p>
            </div>

            <div className="testimonial-controls">
              <button
                type="button"
                className="testimonial-arrow"
                onClick={showPrevious}
                aria-label="Show previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="testimonial-arrow"
                onClick={showNext}
                aria-label="Show next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
