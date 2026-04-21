import { useState, useEffect, useRef } from "react";
import img1 from "src/assets/about/IMG-20230630-WA0010.jpg";
import img2 from "src/assets/about/IMG-20221221-WA0012.jpg";

const testimonials = [
  {
    image: img1,
    name: "Aarav Sharma",
    role: "Product Manager",
    feedback:
      "J-Impact transformed our workflow. The professionalism and attention to detail were outstanding! Highly recommended.",
  },
  {
    image: img2,
    name: "Priya Verma",
    role: "UX Designer",
    feedback:
      "The team delivered beyond expectations. The process was smooth, and the results were fantastic!",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const isPaused = useRef(false);

  const slideNext = () => setCurrent((p) => (p + 1) % testimonials.length);
  const slidePrev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const start = () => {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        if (!isPaused.current) slideNext();
      }, 4500);
    };
    start();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };
  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-8 px-4">
      <div className="relative w-full max-w-lg">
        {testimonials.map((t, idx) => {
          const active = idx === current;
          return (
            <div
              key={idx}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out transform ${
                active
                  ? "opacity-100 translate-y-0 z-20"
                  : "opacity-0 translate-y-4 pointer-events-none z-10"
              }`}
            >
              <div className="bg-white shadow-lg rounded-xl w-full max-w-md px-6 py-8 sm:px-8 sm:py-10 flex flex-col items-center text-center" style={{minHeight: 320}}>
                <div className="-mt-12 mb-2">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 object-cover rounded-full ring-4 ring-white shadow-md"
                  />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mt-2">{t.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{t.role}</p>
                <p className="text-gray-700 text-base leading-relaxed">“{t.feedback}”</p>
              </div>
            </div>
          );
        })}

        {/* arrows */}
        <button
          onClick={slidePrev}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-white focus:outline-none ml-2 sm:ml-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 14.707a1 1 0 01-1.414 0L6.586 10l4.707-4.707a1 1 0 011.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <button
          onClick={slideNext}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 shadow-md hover:bg-white focus:outline-none mr-2 sm:mr-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 5.293a1 1 0 011.414 0L13.414 10l-4.707 4.707a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-gray-800 scale-110" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
