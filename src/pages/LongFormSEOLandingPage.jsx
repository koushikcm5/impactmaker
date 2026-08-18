import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, BookOpen, Briefcase, Lightbulb, ChevronDown } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import Clients from '../sections/Clients';
import Testimonials from '../sections/Testimonials';
import RecentGallery from '../sections/RecentGallery';
import SEOHead from '../components/SEOHead';
import { siteData } from '../data/siteData';
import { SITE_URL, FOUNDER_NAME, SITE_PHONE, SITE_EMAIL, makeBreadcrumb, makeLocalBusinessSchema, makeGeoFAQ, makeServiceSchema } from '../utils/seoConfig';
import './LongFormSEOLandingPage.css';

const LongFormSEOLandingPage = ({ data }) => {
  const [activeSection, setActiveSection] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const headings = contentRef.current?.querySelectorAll('h2[id], section[id]');
    if (headings) {
      headings.forEach((h) => observer.observe(h));
    }

    return () => {
      if (headings) headings.forEach((h) => observer.unobserve(h));
    };
  }, [data]);

  const scrollTo = (id, e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Offset for sticky header
      setTimeout(() => {
        window.scrollBy(0, -100);
      }, 500);
    }
  };

  const schemas = [
    makeBreadcrumb([{ name: data.hero.heading, path: new URL(data.seo.canonical).pathname }]),
    makeLocalBusinessSchema(data.hero.heading.includes('Coimbatore') ? 'Coimbatore' : 'Tamil Nadu', 'Tamil Nadu', data.seo.description),
    makeGeoFAQ(data.hero.heading.includes('Coimbatore') ? 'Coimbatore' : 'Tamil Nadu'),
    makeServiceSchema(data.hero.heading, data.seo.description, new URL(data.seo.canonical).pathname)
  ];

  return (
    <>
      <SEOHead
        title={data.seo.title}
        description={data.seo.description}
        keywords={data.seo.keywords}
        canonical={data.seo.canonical}
        schemas={schemas}
      />
      <Navbar />

      <main className="lf-seo-page">
        {/* HERO SECTION */}
        <section className="lf-hero">
          <div className="lf-hero-bg" style={{ backgroundImage: `url(${data.hero.image})` }}></div>
          <div className="lf-hero-overlay"></div>
          <div className="container lf-hero-content">
            <nav className="lf-breadcrumb">
              <Link to="/">Home</Link> › <span>{data.hero.heading}</span>
            </nav>
            <h1>{data.hero.heading}</h1>
            <p className="lf-hero-sub">{data.hero.subheading}</p>
            <div className="lf-keyword-chips">
              {data.hero.keywords.map((kw, idx) => (
                <span key={idx} className="lf-chip">{kw}</span>
              ))}
            </div>
            <div className="lf-hero-cta">
              <a href="/#enquiry" className="lf-btn-primary">Book Dr. Arun <ArrowRight size={18} /></a>
              <button onClick={(e) => scrollTo('content-start', e)} className="lf-btn-secondary">Read More</button>
            </div>
          </div>
        </section>

        {/* CLIENT LOGOS */}
        <div className="lf-clients-wrap">
          <Clients />
        </div>

        {/* MAIN CONTENT LAYOUT WITH SIDEBAR */}
        <div className="container lf-main-layout" id="content-start">
          {/* SIDEBAR TOC */}
          <aside className="lf-sidebar">
            <div className="lf-toc-card">
              <h3>Table of Contents</h3>
              <ul>
                {data.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={activeSection === item.id ? 'active' : ''}
                      onClick={(e) => scrollTo(item.id, e)}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="lf-sidebar-cta">
                <p>Ready to transform your team?</p>
                <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE}</a>
                <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
              </div>
            </div>
          </aside>

          {/* MAIN ARTICLE CONTENT */}
          <article className="lf-article" ref={contentRef}>
            {data.contentSections.map((section, idx) => (
              <section key={section.id} id={section.id} className="lf-content-section">
                <h2>{section.heading}</h2>
                {section.subheading && <h3 className="lf-subheading">{section.subheading}</h3>}
                
                <div className="lf-paragraphs">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {section.quote && (
                  <blockquote className="lf-quote">
                    <p>{section.quote}</p>
                    <footer>— {FOUNDER_NAME}</footer>
                  </blockquote>
                )}

                {section.list && (
                  <ul className="lf-list">
                    {section.list.map((item, i) => (
                      <li key={i}><CheckCircle2 size={20} className="text-primary" /> <span>{item}</span></li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* WORKSHOP MODULES */}
            <section id="workshop-details" className="lf-content-section lf-workshops">
              <h2>Comprehensive AI Workshop Modules</h2>
              <p>Designed for immediate business impact and practical implementation.</p>
              <div className="lf-workshop-grid">
                {data.workshopModules.map((mod, idx) => (
                  <div key={idx} className="lf-workshop-card">
                    <div className="lf-workshop-icon"><BookOpen size={24} /></div>
                    <h3>{mod.title}</h3>
                    <span className="lf-duration">{mod.duration}</span>
                    <ul>
                      {mod.topics.map((topic, i) => (
                        <li key={i}>• {topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CASE STUDIES */}
            <section id="case-studies" className="lf-content-section lf-case-studies">
              <h2>Real-World Impact & Case Studies</h2>
              <div className="lf-case-grid">
                {data.caseStudies.map((cs, idx) => (
                  <div key={idx} className="lf-case-card">
                    <span className="lf-industry-tag"><Briefcase size={14} /> {cs.industry}</span>
                    <h3>{cs.title}</h3>
                    <div className="lf-case-details">
                      <div><strong>Challenge:</strong> <p>{cs.challenge}</p></div>
                      <div><strong>Solution:</strong> <p>{cs.solution}</p></div>
                      <div className="lf-impact"><strong>Impact:</strong> <p>{cs.impact}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>

        {/* WORKSHOP PHOTOS (Recent Gallery Reused) */}
        <div className="lf-gallery-wrap">
          <div className="container">
            <h2 className="lf-section-title">Glimpses from Recent Workshops</h2>
          </div>
          <RecentGallery />
        </div>

        {/* TESTIMONIALS */}
        <div className="lf-testimonials-wrap">
          <Testimonials data={siteData.testimonials} />
        </div>

        {/* RELATED SEO HUBS (Internal Linking) */}
        <section className="lf-related-section container">
          <h2 className="lf-section-title">Explore Related Training Hubs</h2>
          <div className="lf-related-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            <Link to="/top-ai-trainer-india" className="lf-related-card" style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>Top AI Trainer in India</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>Discover pan-India AI training programs.</p>
            </Link>
            <Link to="/generative-ai-trainer-coimbatore" className="lf-related-card" style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>Gen AI Coimbatore</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>Specialized Generative AI workshops in TN.</p>
            </Link>
            <Link to="/ai-trainer-tamil-nadu" className="lf-related-card" style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>AI Trainer Tamil Nadu</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>Statewide corporate transformation programs.</p>
            </Link>
            <Link to="/best-keynote-speaker-coimbatore" className="lf-related-card" style={{ padding: '1.5rem', border: '1px solid #eee', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--primary-blue)' }}>Keynote Speaker Coimbatore</h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: 0 }}>Book Dr. Arun for your next big event.</p>
            </Link>
          </div>
        </section>

        {/* REGION SPECIFIC FAQS */}
        <section className="lf-faq-section container">
          <h2 className="lf-section-title">Frequently Asked Questions</h2>
          <div className="lf-faq-grid">
            {data.faqs.map((faq, idx) => (
              <details key={idx} className="lf-faq-item">
                <summary>
                  {faq.q}
                  <ChevronDown size={20} className="lf-faq-icon" />
                </summary>
                <div className="lf-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer contact={siteData.contact} />
    </>
  );
};

export default LongFormSEOLandingPage;
