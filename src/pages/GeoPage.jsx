import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, Phone, Mail, ArrowRight, Star } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import FAQ from '../sections/FAQ';
import SEOHead from '../components/SEOHead';
import { siteData } from '../data/siteData';
import {
  SITE_URL, FOUNDER_NAME, SITE_PHONE, SITE_EMAIL,
  makeBreadcrumb, makeLocalBusinessSchema, makeGeoFAQ
} from '../utils/seoConfig';
import './GeoPage.css';

const stats = [
  { value: '50,000+', label: 'Professionals Trained' },
  { value: '450+', label: 'Keynote Sessions' },
  { value: '19+', label: 'Years Experience' },
  { value: '15+', label: 'Countries' },
];

const GeoPage = ({ config }) => {
  const { seo, heading, subheading, city, region, heroKeywords, intro, services } = config;

  const schemas = [
    makeBreadcrumb([{ name: heading, path: new URL(seo.canonical).pathname }]),
    makeLocalBusinessSchema(city, region, seo.description),
    makeGeoFAQ(city || region),
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: `${FOUNDER_NAME} — ${heading}`,
      description: seo.description,
      url: seo.canonical,
      telephone: SITE_PHONE,
      email: SITE_EMAIL,
      areaServed: city ? [city, region, 'India'] : ['India', 'Tamil Nadu', 'Kerala', 'Coimbatore'],
      provider: {
        '@type': 'Person',
        name: FOUNDER_NAME,
        url: SITE_URL,
      },
    }
  ];

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        schemas={schemas}
      />

      <Navbar />

      <main className="geo-page">

        {/* ── Hero ── */}
        <section className="geo-hero" aria-label={`${heading} hero section`}>
          <div className="geo-hero-overlay" />
          <div className="container">
            {/* Breadcrumb */}
            <nav className="geo-breadcrumb" aria-label="Breadcrumb">
              <ol itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link to="/" itemProp="item"><span itemProp="name">Home</span></Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li aria-hidden="true">›</li>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name">{heading}</span>
                  <meta itemProp="position" content="2" />
                </li>
              </ol>
            </nav>

            <h1 className="geo-hero-h1">{heading}</h1>
            <p className="geo-hero-sub">{subheading}</p>

            {/* Keyword chips */}
            <div className="geo-keyword-chips" aria-label="Specializations">
              {heroKeywords.map((kw) => (
                <span key={kw} className="geo-chip">{kw}</span>
              ))}
            </div>

            <div className="geo-hero-cta">
              <a href="/#enquiry" className="geo-btn-primary">
                Book a Training Session <ArrowRight size={18} />
              </a>
              <a href="/#about" className="geo-btn-secondary">
                About Dr. Arun
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="geo-stats" aria-label="Training impact statistics">
          <div className="container">
            <div className="geo-stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="geo-stat-card">
                  <strong className="geo-stat-value">{s.value}</strong>
                  <span className="geo-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About / Intro ── */}
        <section className="geo-intro-section" aria-label={`About ${heading}`}>
          <div className="container">
            <div className="geo-intro-grid">
              <div className="geo-intro-content">
                <span className="geo-eyebrow">About {FOUNDER_NAME}</span>
                <h2 className="geo-section-h2">{heading} — {FOUNDER_NAME}</h2>
                <p className="geo-intro-para">{intro}</p>
                <ul className="geo-intro-usps" aria-label="Key strengths">
                  <li><CheckCircle2 size={17} /> <span>19+ years of corporate training & keynote speaking experience</span></li>
                  <li><CheckCircle2 size={17} /> <span>Training available in English, Tamil, Hindi & Malayalam</span></li>
                  <li><CheckCircle2 size={17} /> <span>Customized programs for every industry and audience level</span></li>
                  <li><CheckCircle2 size={17} /> <span>Gamified, hands-on learning methodology for maximum retention</span></li>
                  <li><CheckCircle2 size={17} /> <span>Trusted by Cognizant, Infoblox, KnowledgeHut, DY Patil & 100+ organizations</span></li>
                </ul>
              </div>
              <div className="geo-intro-aside">
                <div className="geo-contact-card">
                  <h3>Book a Session</h3>
                  <p>Available for corporate workshops, keynote addresses, faculty development programs, and customized AI training.</p>
                  <address>
                    <a href={`tel:${SITE_PHONE}`} className="geo-contact-link">
                      <Phone size={16} /> {SITE_PHONE}
                    </a>
                    <a href={`mailto:${SITE_EMAIL}`} className="geo-contact-link">
                      <Mail size={16} /> {SITE_EMAIL}
                    </a>
                    <span className="geo-contact-link">
                      <MapPin size={16} /> {city || 'Pan-India'}{city ? `, ${region}` : ''}, India
                    </span>
                  </address>
                  <a href="/#enquiry" className="geo-btn-primary geo-btn-full">
                    Send an Enquiry <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="geo-services-section" aria-label="Training programs and services">
          <div className="container">
            <span className="geo-eyebrow">Training Programs</span>
            <h2 className="geo-section-h2">
              AI Training Services{city ? ` in ${city}` : ' Across India'}
            </h2>
            <p className="geo-section-sub">
              Customized, industry-specific programs designed to deliver measurable results — from beginner-friendly introductions to advanced enterprise AI transformation.
            </p>
            <div className="geo-services-grid">
              {services.map((svc, i) => (
                <article key={i} className="geo-service-card">
                  <div className="geo-service-icon-wrap">
                    <Star size={20} />
                  </div>
                  <h3 className="geo-service-title">{svc.title}</h3>
                  <p className="geo-service-desc">{svc.desc}</p>
                  <a href="/#enquiry" className="geo-service-link">
                    Enquire Now <ArrowRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonial Highlight ── */}
        <section className="geo-testimonial-section" aria-label="Client testimonials">
          <div className="container">
            <span className="geo-eyebrow">What Participants Say</span>
            <h2 className="geo-section-h2">Trusted by 50,000+ Professionals Across India</h2>
            <div className="geo-testimonials-grid">
              {siteData.testimonials.slice(0, 3).map((t, i) => (
                <blockquote key={i} className="geo-testimonial-card">
                  <p className="geo-testimonial-text">"{t.text.slice(0, 220)}{t.text.length > 220 ? '…' : ''}"</p>
                  <footer className="geo-testimonial-footer">
                    <cite>
                      <strong>{t.author}</strong>
                      <span>{t.designation}</span>
                      <span className="geo-testimonial-company">{t.company}</span>
                    </cite>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section className="geo-links-section" aria-label="Explore training programs">
          <div className="container">
            <span className="geo-eyebrow">Explore Programs</span>
            <h2 className="geo-section-h2">All Training Programs by Dr. Arun Divakaran</h2>
            <div className="geo-links-grid">
              <Link to="/workshops/game-changer" className="geo-internal-link">
                <h3>Game-Changer Workshops</h3>
                <p>Holistic corporate transformation programs for employees, educators, and students.</p>
              </Link>
              <Link to="/workshops/technical" className="geo-internal-link">
                <h3>Technical AI Training</h3>
                <p>AI for executive leadership, functional roles, and fresh engineers.</p>
              </Link>
              <Link to="/workshops/deep-dive" className="geo-internal-link">
                <h3>Deep-Dive AI Programs</h3>
                <p>Intensive workshops on Generative AI, Agentic AI, and Data Analytics.</p>
              </Link>
              <Link to="/workshops/transformational" className="geo-internal-link">
                <h3>Design Thinking & Agile</h3>
                <p>Human-centered innovation and enterprise agile transformation workshops.</p>
              </Link>
              <Link to="/workshops/speaker" className="geo-internal-link">
                <h3>Keynote Speaking</h3>
                <p>AI and leadership keynotes for corporate events, conferences, and summits.</p>
              </Link>
              <Link to="/blog" className="geo-internal-link">
                <h3>AI Training Insights</h3>
                <p>Expert articles on AI, digital transformation, and corporate learning.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQ />

        {/* ── Final CTA ── */}
        <section className="geo-final-cta" aria-label="Contact call to action">
          <div className="container">
            <h2>Ready to Transform Your Team with AI?</h2>
            <p>Connect with {FOUNDER_NAME} to design a customized AI training program for your organization{city ? ` in ${city}` : ''}.</p>
            <div className="geo-final-cta-btns">
              <a href="/#enquiry" className="geo-btn-primary">
                Send an Enquiry <ArrowRight size={18} />
              </a>
              <a href={`tel:${SITE_PHONE}`} className="geo-btn-secondary">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer contact={siteData.contact} />
    </>
  );
};

export default GeoPage;
