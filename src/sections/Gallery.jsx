import { useState, useEffect, useCallback } from 'react';
import img13 from '../assets/Gallery/13.jpg';
import img16 from '../assets/Gallery/16.jpg';
import img17 from '../assets/Gallery/17.jpg';
import imgAgile from '../assets/Gallery/Agile Transformation Session @ Cognizant.jpg';
import imgDrug from '../assets/Gallery/Drug Free India Motivational Talk @ KCT.jpg';
import './Gallery.css';

const galleryItems = [
  { src: imgAgile,  alt: 'Agile Transformation Session @ Cognizant', caption: 'Agile Transformation Session', sub: 'Cognizant' },
  { src: img16,     alt: 'Impact Session 16',                        caption: 'Leadership Impact Session',   sub: 'Corporate Programme' },
  { src: imgDrug,   alt: 'Drug Free India Motivational Talk @ KCT',  caption: 'Drug Free India Talk',         sub: 'KCT Campus' },
  { src: img13,     alt: 'Impact Session 13',                        caption: 'Motivational Masterclass',     sub: 'Campus Drive' },
  { src: img17,     alt: 'Impact Session 17',                        caption: 'Youth Empowerment Workshop',   sub: 'Outreach Programme' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // index or null

  const close  = useCallback(() => setLightbox(null), []);
  const prev   = useCallback((e) => { e.stopPropagation(); setLightbox(i => (i - 1 + galleryItems.length) % galleryItems.length); }, []);
  const next   = useCallback((e) => { e.stopPropagation(); setLightbox(i => (i + 1) % galleryItems.length); }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')      close();
      if (e.key === 'ArrowLeft')   setLightbox(i => (i - 1 + galleryItems.length) % galleryItems.length);
      if (e.key === 'ArrowRight')  setLightbox(i => (i + 1) % galleryItems.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [lightbox, close]);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="gallery-eyebrow">Moments That Matter</span>
          <h2>Gallery</h2>
          <p>A glimpse into the energy, impact, and transformation created across our sessions and workshops.</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <button
              key={i}
              className={`gallery-card gallery-card--${i}`}
              onClick={() => setLightbox(i)}
              aria-label={`Open image: ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-overlay-text">
                  <span className="gallery-caption">{item.caption}</span>
                  <span className="gallery-sub">{item.sub}</span>
                </div>
                <span className="gallery-zoom-icon" aria-hidden="true">⤢</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gallery-lightbox" onClick={close} role="dialog" aria-modal="true" aria-label="Image viewer">
          <button className="lb-close" onClick={close} aria-label="Close">✕</button>
          <button className="lb-nav lb-prev" onClick={prev} aria-label="Previous image">‹</button>
          <div className="lb-content" onClick={e => e.stopPropagation()}>
            <img src={galleryItems[lightbox].src} alt={galleryItems[lightbox].alt} />
            <div className="lb-caption">
              <strong>{galleryItems[lightbox].caption}</strong>
              <span>{galleryItems[lightbox].sub}</span>
            </div>
          </div>
          <button className="lb-nav lb-next" onClick={next} aria-label="Next image">›</button>
          <div className="lb-counter">{lightbox + 1} / {galleryItems.length}</div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
