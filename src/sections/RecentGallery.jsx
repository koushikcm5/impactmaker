import React from 'react';
import './RecentGallery.css';

import imgCorning from '../assets/Gallery/corporate/AI for leaders for Owens Corning mumbai/AI for leaders for Owens Corning mumbai.webp';
import imgCaterpillar from '../assets/Gallery/corporate/AI workshops for Caterpillar/AI workshops for Caterpillar.webp';
import imgMahindra from '../assets/Gallery/corporate/AI for mechanical  and Aerospace engineers Mahindra AeroStructures Pvt Ltd/AI for mechanical  and Aerospace engineers Mahindra AeroStructures Pvt Ltd.webp';

const RecentGallery = () => {
  const engagements = [
    {
      id: 1,
      img: imgCorning,
      title: 'Owens Corning',
      desc: 'AI for Leaders in Mumbai'
    },
    {
      id: 2,
      img: imgCaterpillar,
      title: 'Caterpillar',
      desc: 'Corporate AI Workshops'
    },
    {
      id: 3,
      img: imgMahindra,
      title: 'Mahindra AeroStructures',
      desc: 'AI for Mechanical & Aerospace Engineers'
    }
  ];

  return (
    <section className="recent-gallery-section">
      <div className="recent-gallery-container">
        <div className="recent-gallery-header">
          <span className="recent-gallery-eyebrow">Corporate Footprint</span>
          <h2 className="recent-gallery-title">Recent Engagements</h2>
        </div>
        
        <div className="recent-gallery-grid">
          {engagements.map((item) => (
            <div className="recent-gallery-card" key={item.id}>
              <div className="recent-gallery-img-wrapper">
                <img src={item.img} alt={item.title} className="recent-gallery-img" loading="lazy" />
              </div>
              <div className="recent-gallery-caption">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentGallery;
