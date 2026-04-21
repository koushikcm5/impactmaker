import React, { useState, useEffect } from 'react';
import './TestimonialImageSlider.css';

/**
 * TestimonialImageSlider component
 * 
 * CSS Opacity Fade Mechanism:
 * This component handles image transitions by toggling the 'active' class on multiple 
 * absolute-positioned images. The 'active' class sets opacity to 1, while the default 
 * state is opacity 0. A CSS transition on the opacity property (0.6s ease-in-out) 
 * ensures a smooth crossfade between the state changes.
 */
const TestimonialImageSlider = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="testimonial-slider-container">
      {images.map((img, index) => (
        <img
          key={`${img}-${index}`}
          src={img}
          alt={`Testimonial slide ${index + 1}`}
          className={`testimonial-slider-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default TestimonialImageSlider;
