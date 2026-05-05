import { useEffect, useRef } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import { siteData } from '../data/siteData';
import { transformationalWorkshops } from '../data/workshopData';
import '../sections/Workshops.css';

const TransformationalPage = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); observer.unobserve(el); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '90px' }}>
        <section className="workshops" style={{ paddingTop: '60px' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="ws-category-section ws-section-alt" ref={sectionRef} style={{ marginTop: 0 }}>
              <div className="ws-category-header">
                <span className="workshops-pill ws-pill-orange">Non-Technical</span>
                <h2 className="ws-category-title ws-title-orange">Transformational Workshops</h2>
                <p className="ws-category-desc">
                  People-first programmes that reshape thinking, leadership, and team culture through experiential learning.
                </p>
              </div>
              <div className="ws-category-grid">
                {transformationalWorkshops.map((item, i) => (
                  <div key={item.title} className="ws-item-card ws-card-alt" style={{ '--delay': `${i * 0.1}s` }}>
                    <div className="ws-item-icon ws-icon-orange">
                      <item.icon size={24} />
                    </div>
                    <h3 className="ws-item-title">{item.title}</h3>
                    <p className="ws-item-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer contact={siteData.contact} />
    </>
  );
};

export default TransformationalPage;
