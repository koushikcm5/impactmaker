import { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

const images = import.meta.glob('../assets/Gallery/**/*.{jpg,jpeg,png,gif,webp}', { eager: true });

const parsedImages = Object.entries(images).map(([path, module]) => {
  const parts = path.split('/');
  const filenameWithExt = parts.pop();
  const filename = filenameWithExt.replace(/\.[^/.]+$/, "");
  
  const isCorporateFolder = parts.includes('corporate');
  
  if (isCorporateFolder) {
    const eventName = parts[parts.length - 1]; 
    return {
      type: 'eventImage',
      src: module.default,
      alt: filename,
      caption: eventName,
      sub: 'Corporate Event',
      category: 'Corporate',
      folder: eventName
    };
  } else {
    const nameParts = filename.split('@');
    const caption = nameParts[0].trim();
    const sub = nameParts[1] ? nameParts[1].trim() : 'Event Highlight';
    
    const lowerName = filename.toLowerCase();
    const isEdTech = [
      'student', 'college', 'school', 'skcet', 'kct', 'muthayammal',
      'yuvakshetra', 'vsb', 'hindustan', 'amritha', 'vdit', 'teachers',
      'fdp', 'lisieux', 'ngp', 'kpr', 'campus', 'drug free', 'education'
    ].some(kw => lowerName.includes(kw));

    return {
      type: 'standalone',
      src: module.default,
      alt: filename,
      caption: caption,
      sub: sub,
      category: isEdTech ? 'Ed Tech' : 'All'
    };
  }
});

const corporateImages = parsedImages.filter(img => img.category === 'Corporate');
const foldersMap = {};
corporateImages.forEach(img => {
  if (!foldersMap[img.folder]) {
    foldersMap[img.folder] = {
      name: img.folder,
      cover: img.src,
      count: 0,
      images: []
    };
  }
  foldersMap[img.folder].count += 1;
  foldersMap[img.folder].images.push(img);
});
const corporateFolders = Object.values(foldersMap);
const standalones = parsedImages.filter(img => img.type === 'standalone');


const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // index or null
  const [activeCategory, setActiveCategory] = useState('Corporate');
  const [activeFolder, setActiveFolder] = useState(null);

  let displayItems = [];
  let isFolderView = false;
  
  if (activeCategory === 'Corporate') {
    if (activeFolder) {
      displayItems = foldersMap[activeFolder]?.images || [];
    } else {
      displayItems = corporateFolders;
      isFolderView = true;
    }
  } else if (activeCategory === 'All') {
    displayItems = standalones;
  } else if (activeCategory === 'Ed Tech') {
    displayItems = standalones.filter(img => img.category === 'Ed Tech');
  }

  const close  = useCallback(() => setLightbox(null), []);
  const prev   = useCallback((e) => { e.stopPropagation(); setLightbox(i => (i - 1 + displayItems.length) % displayItems.length); }, [displayItems.length]);
  const next   = useCallback((e) => { e.stopPropagation(); setLightbox(i => (i + 1) % displayItems.length); }, [displayItems.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')      close();
      if (e.key === 'ArrowLeft')   setLightbox(i => (i - 1 + displayItems.length) % displayItems.length);
      if (e.key === 'ArrowRight')  setLightbox(i => (i + 1) % displayItems.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [lightbox, close, displayItems.length]);

  const handleTabClick = (cat) => {
    setActiveCategory(cat);
    setActiveFolder(null);
    setLightbox(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-header">
          <span className="gallery-eyebrow">Moments That Matter</span>
          <h2>Gallery</h2>
          <p>A glimpse into the energy, impact, and transformation created across our sessions and workshops.</p>
        </div>

        <div className="gallery-filters">
          {['Corporate', 'Ed Tech', 'All'].map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleTabClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {activeCategory === 'Corporate' && activeFolder && (
          <div className="gallery-breadcrumb">
            <button className="back-btn" onClick={() => setActiveFolder(null)}>
              <span aria-hidden="true">←</span> Corporate
            </button>
            <span className="separator">/</span>
            <span className="current">{activeFolder}</span>
          </div>
        )}

        <div className="gallery-grid">
          {displayItems.map((item, i) => {
            if (isFolderView) {
              return (
                <button
                  key={item.name}
                  className="gallery-folder-card"
                  style={{ animationDelay: `${(i % 15) * 0.05}s` }}
                  onClick={() => setActiveFolder(item.name)}
                >
                  <div className="folder-cover">
                    <img src={item.cover} alt={item.name} loading="lazy" />
                    <div className="folder-overlay">
                      <span className="folder-icon">📂</span>
                    </div>
                  </div>
                  <div className="folder-info">
                    <h3>{item.name}</h3>
                    <span>{item.count} Photos</span>
                  </div>
                </button>
              );
            } else {
              return (
                <button
                  key={item.src}
                  className="gallery-card"
                  style={{ animationDelay: `${(i % 15) * 0.05}s` }}
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
              );
            }
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && !isFolderView && (
        <div className="gallery-lightbox" onClick={close} role="dialog" aria-modal="true" aria-label="Image viewer">
          <button className="lb-close" onClick={close} aria-label="Close">✕</button>
          <button className="lb-nav lb-prev" onClick={prev} aria-label="Previous image">‹</button>
          <div className="lb-content" onClick={e => e.stopPropagation()}>
            <img src={displayItems[lightbox].src} alt={displayItems[lightbox].alt} />
            <div className="lb-caption">
              <strong>{displayItems[lightbox].caption}</strong>
              <span>{displayItems[lightbox].sub}</span>
            </div>
          </div>
          <button className="lb-nav lb-next" onClick={next} aria-label="Next image">›</button>
          <div className="lb-counter">{lightbox + 1} / {displayItems.length}</div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
