import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import SEOHead from '../components/SEOHead';
import { siteData } from '../data/siteData';
import { speakerSessions } from '../data/workshopData';
import { PAGE_SEO, makeBreadcrumb, makeServiceSchema } from '../utils/seoConfig';
import '../sections/Workshops.css';

const schemas = [
  makeBreadcrumb([{ name: 'AI Keynote Speaker', path: '/workshops/speaker' }]),
  makeServiceSchema(
    'AI Keynote Speaking & Leadership Speaking',
    'Book Dr. Arun Divakaran — India\'s best AI Keynote Speaker for corporate events, conferences, leadership summits, and innovation forums across India, Tamil Nadu, and Kerala.',
    '/workshops/speaker'
  ),
];

const SpeakerPage = () => {
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
      <SEOHead
        title={PAGE_SEO.workshopSpeaker.title}
        description={PAGE_SEO.workshopSpeaker.description}
        keywords={PAGE_SEO.workshopSpeaker.keywords}
        canonical={PAGE_SEO.workshopSpeaker.canonical}
        schemas={schemas}
      />
      <Navbar />
      <div style={{ paddingTop: '90px' }}>
        <section className="workshops" style={{ paddingTop: '60px' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="ws-category-section ws-section-speaker" ref={sectionRef} style={{ marginTop: 0 }}>
              <div className="ws-category-header">
                <span className="workshops-pill ws-pill-navy">Speaking Engagements</span>
                <h1 className="ws-category-title ws-title-navy">AI Keynote Speaker &amp; Leadership Speaker</h1>
                <p className="ws-category-desc">
                  High-impact talks that energize, inspire, and challenge audiences to think differently about leadership and the future.
                </p>
              </div>
              <div className="ws-category-grid ws-speaker-grid">
                {speakerSessions.map((item, i) => (
                  <div key={item.title} className="ws-item-card ws-speaker-card" style={{ '--delay': `${i * 0.1}s` }}>
                    <div className="ws-item-icon ws-icon-navy">
                      <item.icon size={28} />
                    </div>
                    <h3 className="ws-item-title">{item.title}</h3>
                    <p className="ws-item-desc">{item.description}</p>
                    <a href="/#enquiry" className="ws-speaker-cta">
                      <span>Book Now</span>
                      <ArrowRight size={16} />
                    </a>
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

export default SpeakerPage;
