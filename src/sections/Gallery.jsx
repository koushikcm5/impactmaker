import { useState, useEffect, useCallback } from 'react';
import { Folder } from 'lucide-react';
import './Gallery.css';

const images = import.meta.glob('../assets/Gallery/**/*.{jpg,jpeg,png,gif,webp}', { eager: true });

const formatText = (str) => {
  if (!str) return '';
  return str.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
};

const parsedImages = Object.entries(images).map(([path, module]) => {
  const parts = path.split('/');
  const filenameWithExt = parts.pop();
  const filename = filenameWithExt.replace(/\.[^/.]+$/, "");
  
  const corporateIdx = parts.indexOf('corporate');
  const edtechIdx = parts.indexOf('edtech');
  
  if (corporateIdx !== -1 && parts.length > corporateIdx + 1) {
    const eventName = parts[parts.length - 1]; 
    return {
      type: 'eventImage',
      src: module.default,
      alt: filename,
      caption: formatText(eventName),
      sub: 'Corporate Event',
      category: 'Corporate',
      folder: eventName
    };
  } else if (edtechIdx !== -1 && parts.length > edtechIdx + 1) {
    const eventName = parts[parts.length - 1]; 
    return {
      type: 'eventImage',
      src: module.default,
      alt: filename,
      caption: formatText(eventName),
      sub: 'Ed Tech Event',
      category: 'Ed Tech',
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
    ].some(kw => lowerName.includes(kw)) || edtechIdx !== -1;

    return {
      type: 'standalone',
      src: module.default,
      alt: filename,
      caption: formatText(caption),
      sub: formatText(sub),
      category: isEdTech ? 'Ed Tech' : 'All'
    };
  }
});

const getFolders = (category) => {
  const categoryImages = parsedImages.filter(img => img.category === category && img.type === 'eventImage');
  const foldersMap = {};
  categoryImages.forEach(img => {
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
  return foldersMap;
};

const corporateFoldersMap = getFolders('Corporate');
const edtechFoldersMap = getFolders('Ed Tech');

const corporateFolders = Object.values(corporateFoldersMap);
const edtechFolders = Object.values(edtechFoldersMap);

const standalones = parsedImages.filter(img => img.type === 'standalone');


const Gallery = () => {
  const [lightbox, setLightbox] = useState(null); // index or null
  const [activeCategory, setActiveCategory] = useState('Corporate');
  const [activeFolder, setActiveFolder] = useState(null);

  let displayItems = [];
  let isFolderView = false;
  
  if (activeCategory === 'Corporate') {
    if (activeFolder) {
      displayItems = corporateFoldersMap[activeFolder]?.images || [];
    } else {
      displayItems = corporateFolders;
      isFolderView = true;
    }
  } else if (activeCategory === 'Ed Tech') {
    if (activeFolder) {
      displayItems = edtechFoldersMap[activeFolder]?.images || [];
    } else {
      // Mixed view: Folders first, then standalones
      displayItems = [
        ...edtechFolders.map(f => ({ ...f, isFolder: true })),
        ...standalones.filter(img => img.category === 'Ed Tech')
      ];
    }
  } else if (activeCategory === 'All') {
    displayItems = standalones;
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

        {(activeFolder) && (
          <div className="gallery-breadcrumb">
            <button className="back-btn" onClick={() => setActiveFolder(null)}>
              <span aria-hidden="true">←</span> {activeCategory}
            </button>
            <span className="separator">/</span>
            <span className="current">{formatText(activeFolder)}</span>
          </div>
        )}

        <div className="gallery-grid">
          {displayItems.map((item, i) => {
            if (isFolderView || item.isFolder) {
              return (
                <button
                  key={item.name}
                  className="gallery-folder-card"
                  style={{ animationDelay: `${(i % 15) * 0.05}s` }}
                  onClick={() => setActiveFolder(item.name)}
                >
                  <div className="folder-cover">
                    <img src={item.cover} alt={item.name} loading="lazy" />
                    <div className="gallery-overlay">
                      <div className="gallery-overlay-text">
                        <span className="gallery-caption">{formatText(item.name)}</span>
                        <span className="gallery-sub">{item.count} Photos</span>
                      </div>
                      <span className="gallery-zoom-icon" aria-hidden="true">
                        <Folder size={20} />
                      </span>
                    </div>
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
