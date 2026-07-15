import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, BookOpen, ExternalLink } from 'lucide-react';
import './BookPromoWidget.css';

import book1Img from '../assets/books/Creati-Witty, Unfolding The Secret Formulas Of A Creative Teacher.jpg';
import book2Img from "../assets/books/THE ACCIDENTAL DATA ANALYST, A BEGINNER'S GUIDE TO UNLOCKING INSIGHTS.jpg";

const BOOKS = [
  {
    id: 1,
    title: 'Creati-Witty: Unfolding The Secret Formulas Of A Creative Teacher',
    image: book1Img,
    link: 'https://amzn.in/d/02uLTIRk',
  },
  {
    id: 2,
    title: "The Accidental Data Analyst: A Beginner's Guide To Unlocking Insights",
    image: book2Img,
    link: 'https://amzn.in/d/0dxDnspy',
  },
];

const FLOAT = [
  { duration: 3.4, delay: 0 },
  { duration: 3.9, delay: 0.7 },
];

const BookPromoWidget = () => {
  const [shown,     setShown]     = useState([false, false]);
  const [minimized, setMinimized] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    // Initial entrance sequence
    const t1 = setTimeout(() => setShown([true, false]),  800);
    const t2 = setTimeout(() => setShown([true, true]),   2000);
    const t3 = setTimeout(() => setMinimized(true),       7000);  // hide after 5 s visible
    const t4 = setTimeout(() => setShowPulse(false),      7000);

    // Re-open every 65 s (60 s hidden + 5 s visible = 1 min cycle)
    const interval = setInterval(() => {
      setMinimized(false);
      hideTimerRef.current = setTimeout(() => setMinimized(true), 5000);
    }, 65000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearInterval(interval);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <div className="bpw-root" aria-label="Book recommendations">
      <AnimatePresence mode="wait">

        {/* ── Minimised bubble ── */}
        {minimized ? (
          <motion.button
            key="bubble"
            className="bpw-bubble"
            onClick={() => setMinimized(false)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.12 }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            aria-label="Show book recommendations"
          >
            <BookOpen size={20} />
            {showPulse && <span className="bpw-bubble-dot" aria-hidden="true" />}
          </motion.button>

        ) : (

          /* ── Expanded panel ── */
          <motion.div
            key="panel"
            className="bpw-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Single minimise button */}
            <div className="bpw-controls">
              <button
                className="bpw-ctrl"
                onClick={() => setMinimized(true)}
                aria-label="Minimise"
                title="Minimise"
              >
                <Minus size={12} />
              </button>
            </div>

            {/* Cards */}
            <div className="bpw-cards">
              {BOOKS.map((book, i) => (
                <AnimatePresence key={book.id}>
                  {shown[i] && (
                    <motion.div
                      className="bpw-card-outer"
                      initial={{ x: 180, opacity: 0 }}
                      animate={{ x: 0,   opacity: 1 }}
                      exit={{   x: 180, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                    >
                      <motion.div
                        className="bpw-card"
                        animate={{ y: [0, -5, 0] }}
                        whileHover={{ scale: 1.04 }}
                        transition={{
                          y: {
                            repeat: Infinity,
                            duration: FLOAT[i].duration,
                            ease: 'easeInOut',
                            delay: FLOAT[i].delay,
                          },
                          scale: { duration: 0.2, ease: 'easeOut' },
                        }}
                        onClick={() => window.open(book.link, '_blank')}
                        role="link"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && window.open(book.link, '_blank')}
                      >
                        <span className="bpw-badge">Recommended Book</span>

                        {i === 0 && showPulse && (
                          <span className="bpw-card-dot" aria-hidden="true" />
                        )}

                        <div className="bpw-img-wrap">
                          <img
                            src={book.image}
                            alt={book.title}
                            className="bpw-img"
                            loading="lazy"
                            draggable={false}
                           width="800" height="600" />
                          <div className="bpw-img-overlay" aria-hidden="true" />
                        </div>

                        <div className="bpw-body">
                          <p className="bpw-title">{book.title}</p>
                          <span className="bpw-cta">
                            View on Amazon <ExternalLink size={10} strokeWidth={2.5} />
                          </span>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default BookPromoWidget;
