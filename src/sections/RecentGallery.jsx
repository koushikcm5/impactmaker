import React from 'react';
import './RecentGallery.css';

// Dynamically import all images
const corpImports = import.meta.glob('../assets/Gallery/corporate/**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });
const edtechImports = import.meta.glob('../assets/Gallery/edtech/**/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });

// Helper to format title from path
const formatTitle = (path) => {
  const parts = path.split('/');
  let name = parts[parts.length - 1].replace(/\.(png|jpg|jpeg|webp)$/i, '');
  // If the file name is a uuid or generic, try using the folder name
  if (name.length > 20 || /^(image|unnamed|untitled|hqdefault|img)/i.test(name)) {
    const dirName = parts[parts.length - 2];
    if (dirName && dirName !== 'corporate' && dirName !== 'edtech') {
      name = dirName;
    }
  }
  return name.replace(/-/g, ' ').replace(/_/g, ' ');
};

const corpEngagements = Object.entries(corpImports).map(([path, url], index) => ({
  id: `corp-${index}`,
  img: url,
  title: formatTitle(path),
  category: 'Corporate'
}));

const edtechEngagements = Object.entries(edtechImports).map(([path, url], index) => ({
  id: `edtech-${index}`,
  img: url,
  title: formatTitle(path),
  category: 'EdTech'
}));

// Combine with corporate first, then edtech
const engagements = [...corpEngagements.reverse(), ...edtechEngagements.reverse()];

const RecentGallery = () => {
  return (
    <section className="recent-gallery-section">
      <div className="recent-gallery-container">
        <div className="recent-gallery-header">
          <span className="recent-gallery-eyebrow">Corporate Footprint</span>
          <h2 className="recent-gallery-title">Recent Engagements</h2>
        </div>
      </div>
      
      <div className="gallery-marquee-wrapper">
        <div className="gallery-marquee-content">
          <div className="gallery-marquee-track">
            {engagements.map((item) => (
              <div className="recent-gallery-card" key={item.id}>
                <div className="recent-gallery-img-wrapper">
                  <img src={item.img} alt={item.title} className="recent-gallery-img" loading="lazy" />
                </div>
                <div className="recent-gallery-caption">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate track for seamless scrolling */}
          <div className="gallery-marquee-track" aria-hidden="true">
            {engagements.map((item) => (
              <div className="recent-gallery-card" key={`dup-${item.id}`}>
                <div className="recent-gallery-img-wrapper">
                  <img src={item.img} alt={item.title} className="recent-gallery-img" loading="lazy" />
                </div>
                <div className="recent-gallery-caption">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentGallery;
