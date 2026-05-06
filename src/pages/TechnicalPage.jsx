import { useEffect, useRef } from 'react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import SEOHead from '../components/SEOHead';
import { siteData } from '../data/siteData';
import { technicalWorkshops } from '../data/workshopData';
import { PAGE_SEO, makeBreadcrumb, makeServiceSchema } from '../utils/seoConfig';
import '../sections/Workshops.css';

const schemas = [
  makeBreadcrumb([{ name: 'Technical AI Training', path: '/workshops/technical' }]),
  makeServiceSchema(
    'Technical AI Training Workshops',
    'AI training programs for executive leadership, functional roles, and fresh engineers — practical AI skills for every layer of the organization.',
    '/workshops/technical'
  ),
];

const TechnicalPage = () => {
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
        title={PAGE_SEO.workshopTechnical.title}
        description={PAGE_SEO.workshopTechnical.description}
        keywords={PAGE_SEO.workshopTechnical.keywords}
        canonical={PAGE_SEO.workshopTechnical.canonical}
        schemas={schemas}
      />
      <Navbar />
      <div style={{ paddingTop: '90px' }}>
        <section className="workshops" style={{ paddingTop: '60px' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="ws-category-section" ref={sectionRef} style={{ marginTop: 0 }}>
              <div className="ws-category-header">
                <span className="workshops-pill">AI &amp; Technology</span>
                <h1 className="ws-category-title">Technical AI Training Workshops</h1>
                <p className="ws-category-desc">
                  AI-powered skilling programmes built for every layer of the organisation — from the boardroom to the engineering floor.
                </p>
              </div>
              <div className="ws-category-grid">
                {technicalWorkshops.map((item, i) => (
                  <div key={item.title} className="ws-item-card" style={{ '--delay': `${i * 0.1}s` }}>
                    <div className="ws-item-icon ws-icon-blue">
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

export default TechnicalPage;
