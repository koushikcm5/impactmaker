import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Star, Award, Users, TrendingUp, BookOpen, Lightbulb } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Footer from '../sections/Footer';
import SEOHead from '../components/SEOHead';
import { siteData } from '../data/siteData';
import { FOUNDER_NAME, SITE_URL, SITE_EMAIL, SITE_PHONE } from '../utils/seoConfig';
import './SEOPillarPage.css';

const SEOPillarPage = () => {
  const seoSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: FOUNDER_NAME,
      jobTitle: 'Top AI Trainer in India',
      description: 'Top AI Trainer in Coimbatore, Tamilnadu & India. Generative AI Trainer, Agentic AI Trainer, AI Leadership Coach & Keynote Speaker',
      url: SITE_URL,
      email: SITE_EMAIL,
      telephone: SITE_PHONE,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Coimbatore',
        addressRegion: 'Tamilnadu',
        addressCountry: 'IN'
      },
      alumniOf: 'PhD in Business Administration',
      knowsAbout: ['Artificial Intelligence', 'Generative AI', 'Agentic AI', 'Machine Learning', 'AI Leadership', 'Corporate Training'],
      sameAs: [
        siteData.contact.social.linkedin,
        siteData.contact.social.youtube
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is the Top AI Trainer in Coimbatore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dr. Arun Divakaran is recognized as the Top AI Trainer in Coimbatore, delivering world-class Generative AI training, Agentic AI workshops, and corporate AI transformation programs.'
          }
        },
        {
          '@type': 'Question',
          name: 'Who is the Best Generative AI Trainer in Tamilnadu?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dr. Arun Divakaran is Tamilnadu\'s leading Generative AI Trainer, having trained 50,000+ professionals across enterprises, colleges, and government institutions in AI adoption and productivity.'
          }
        },
        {
          '@type': 'Question',
          name: 'What makes Dr. Arun Divakaran the Best AI Leadership Trainer in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'With 19+ years of IT leadership experience, 450+ keynote addresses, and proven AI transformation frameworks, Dr. Arun Divakaran is India\'s top AI Leadership Trainer for executives and enterprises.'
          }
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Dr. Arun Divakaran | Top AI Trainer in Coimbatore & India"
        description="Top AI Trainer in Coimbatore, Tamilnadu & India. Generative AI Trainer, Agentic AI Trainer, AI Leadership Coach & Keynote Speaker at J-Impact."
        keywords="Top AI Trainers in Coimbatore, Top AI Trainer in Coimbatore, Top AI Trainers in India, Top AI Trainers in Tamilnadu, Best AI Leadership Trainer in India, Best Keynote Speaker in Tamilnadu, Generative AI Trainer in Coimbatore, Agentic AI Trainer, Corporate AI Trainer India"
        canonical={`${SITE_URL}/top-ai-trainer-coimbatore-india`}
        schemas={seoSchemas}
      />

      <Navbar />

      <main className="seo-pillar-page">
        {/* Hero */}
        <section className="seo-hero">
          <div className="container">
            <div className="seo-breadcrumb">
              <Link to="/">Home</Link> › <span>Top AI Trainer</span>
            </div>
            <h1>Top AI Trainer in Coimbatore | Generative AI & Agentic AI Expert India | Top AI Trainer in Tamilnadu</h1>
            <p className="seo-hero-lead">
              <strong>{FOUNDER_NAME}</strong> is India's Top AI Trainer, Generative AI Trainer, Agentic AI Trainer, 
              AI Leadership Coach, and Best Keynote Speaker — empowering 50,000+ professionals across 15+ countries 
              with transformative AI training programs.
            </p>
            <div className="seo-cta-group">
              <a href="/#enquiry" className="btn-primary">Book AI Training <ArrowRight size={18} /></a>
              <a href="#about" className="btn-secondary">Learn More</a>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="seo-trust-bar">
          <div className="container">
            <div className="trust-stats">
              <div><strong>50,000+</strong><span>Trained</span></div>
              <div><strong>450+</strong><span>Keynotes</span></div>
              <div><strong>15+</strong><span>Countries</span></div>
              <div><strong>19+</strong><span>Years Exp</span></div>
            </div>
          </div>
        </section>

        {/* About Dr. Arun */}
        <section id="about" className="seo-section">
          <div className="container">
            <span className="seo-eyebrow">About Dr. Arun Divakaran</span>
            <h2>Top AI Trainer in Coimbatore, Tamilnadu & India</h2>
            <div className="seo-content-grid">
              <div className="seo-content">
                <p>
                  <strong>Dr. Arun Divakaran</strong> is widely recognized as the <strong>Top AI Trainer in Coimbatore</strong>, 
                  <strong> Top AI Trainer in Tamilnadu</strong>, and one of the <strong>Top AI Trainers in India</strong>. 
                  As the Co-Founder of <strong>J-Impact Creative Learning Services</strong> and <strong>J-Impact</strong>, 
                  Dr. Arun has pioneered transformative AI training methodologies that blend cutting-edge technology with 
                  human creative intelligence.
                </p>
                <p>
                  With <strong>19+ years</strong> of international IT leadership experience at Cognizant, UST Global, and IQVIA, 
                  Dr. Arun brings real-world expertise to every training session. He is a <strong>Generative AI Trainer</strong>, 
                  <strong>Agentic AI Trainer</strong>, <strong>AI Leadership Coach</strong>, and <strong>Best Keynote Speaker in Tamilnadu</strong>.
                </p>
                <p>
                  Dr. Arun's training programs are trusted by Fortune 500 companies, MSMEs, B-schools, and government institutions 
                  across India. He delivers training in <strong>English, Tamil, Hindi, and Malayalam</strong>, making AI accessible 
                  to diverse audiences.
                </p>
              </div>
              <div className="seo-highlights">
                <h3>Why Choose Dr. Arun Divakaran?</h3>
                <ul>
                  <li><CheckCircle2 size={18} /> <span>Top AI Trainer in Coimbatore & Tamilnadu</span></li>
                  <li><CheckCircle2 size={18} /> <span>Best Generative AI Trainer in India</span></li>
                  <li><CheckCircle2 size={18} /> <span>Leading Agentic AI Trainer</span></li>
                  <li><CheckCircle2 size={18} /> <span>AI Leadership Coach for Executives</span></li>
                  <li><CheckCircle2 size={18} /> <span>Best Keynote Speaker in Tamilnadu & Coimbatore</span></li>
                  <li><CheckCircle2 size={18} /> <span>19+ Years Corporate Experience</span></li>
                  <li><CheckCircle2 size={18} /> <span>50,000+ Professionals Trained</span></li>
                  <li><CheckCircle2 size={18} /> <span>450+ Keynote Addresses Delivered</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose J-Impact */}
        <section className="seo-section seo-why-section">
          <div className="container">
            <span className="seo-eyebrow">Why Choose J-Impact</span>
            <h2>Best AI Training Platform in India</h2>
            <div className="seo-why-grid">
              <div className="seo-why-card">
                <Award size={32} />
                <h3>Proven Track Record</h3>
                <p>Trusted by Cognizant, Infoblox, KnowledgeHut, DY Patil University, and 100+ leading organizations across India.</p>
              </div>
              <div className="seo-why-card">
                <Users size={32} />
                <h3>Industry Expert Trainer</h3>
                <p>Dr. Arun brings 19+ years of hands-on IT leadership and AI implementation experience from Fortune 500 companies.</p>
              </div>
              <div className="seo-why-card">
                <TrendingUp size={32} />
                <h3>Results-Driven Training</h3>
                <p>Practical, use-case driven AI training programs that deliver measurable business outcomes and productivity gains.</p>
              </div>
              <div className="seo-why-card">
                <Lightbulb size={32} />
                <h3>Gamified Learning</h3>
                <p>Unique, engaging workshops using Torrance Test of Creative Thinking framework for maximum retention and application.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Training Programs */}
        <section className="seo-section">
          <div className="container">
            <span className="seo-eyebrow">AI Training Programs</span>
            <h2>Comprehensive AI Training by Top AI Trainer in India</h2>
            <div className="seo-programs-grid">
              <article className="seo-program-card">
                <Star size={24} />
                <h3>Generative AI Training</h3>
                <p>
                  Master ChatGPT, Claude, Gemini, and advanced prompt engineering techniques. Dr. Arun Divakaran, 
                  the <strong>Top Generative AI Trainer in Coimbatore</strong>, delivers hands-on workshops for 
                  corporate teams, functional roles, and fresh engineers.
                </p>
                <Link to="/workshops/deep-dive">Learn More →</Link>
              </article>

              <article className="seo-program-card">
                <Star size={24} />
                <h3>Agentic AI Training</h3>
                <p>
                  Explore autonomous AI workflows, intelligent process automation, and multi-agent systems with India's 
                  leading <strong>Agentic AI Trainer</strong>. Build AI agents that drive business automation and efficiency.
                </p>
                <Link to="/workshops/technical">Learn More →</Link>
              </article>

              <article className="seo-program-card">
                <Star size={24} />
                <h3>AI Leadership Training</h3>
                <p>
                  Strategic AI adoption frameworks for C-suite executives, department heads, and managers. Dr. Arun is 
                  recognized as the <strong>Best AI Leadership Trainer in India</strong> for enterprise transformation.
                </p>
                <Link to="/workshops/game-changer">Learn More →</Link>
              </article>

              <article className="seo-program-card">
                <Star size={24} />
                <h3>Corporate AI Workshops</h3>
                <p>
                  Customized AI training for HR, IT, Marketing, Finance, and Operations teams. As the <strong>Top Corporate 
                  AI Trainer in India</strong>, Dr. Arun delivers role-specific, industry-focused AI programs.
                </p>
                <Link to="/corporate-ai-workshops-india">Learn More →</Link>
              </article>

              <article className="seo-program-card">
                <Star size={24} />
                <h3>AI Keynote Speaking</h3>
                <p>
                  Inspiring keynote addresses on AI, digital transformation, and future of work. As the <strong>Best Keynote 
                  Speaker in Tamilnadu</strong>, Dr. Arun has delivered 450+ sessions across India and abroad.
                </p>
                <Link to="/best-ai-keynote-speaker-india">Learn More →</Link>
              </article>

              <article className="seo-program-card">
                <Star size={24} />
                <h3>AI for Business Automation</h3>
                <p>
                  Learn AI-powered workflow automation, RPA integration, and intelligent decision systems. Transform 
                  business operations with practical AI implementation strategies from India's top AI consultant.
                </p>
                <Link to="/workshops/technical">Learn More →</Link>
              </article>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="seo-section seo-industries">
          <div className="container">
            <span className="seo-eyebrow">Industries Served</span>
            <h2>AI Training Across All Industries in India</h2>
            <p className="seo-section-intro">
              As the <strong>Top AI Trainer in India</strong>, Dr. Arun Divakaran delivers industry-specific AI training programs across:
            </p>
            <div className="seo-industries-grid">
              <div>IT & Software</div>
              <div>Manufacturing</div>
              <div>Healthcare</div>
              <div>Education</div>
              <div>Finance & Banking</div>
              <div>Retail & E-commerce</div>
              <div>Textiles</div>
              <div>Engineering</div>
              <div>Consulting</div>
              <div>Government</div>
              <div>Startups</div>
              <div>MSMEs</div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="seo-section seo-testimonials">
          <div className="container">
            <span className="seo-eyebrow">Client Success Stories</span>
            <h2>What Clients Say About Dr. Arun Divakaran</h2>
            <div className="seo-testimonials-grid">
              {siteData.testimonials.slice(0, 6).map((t, i) => (
                <blockquote key={i} className="seo-testimonial-card">
                  <p>"{t.text.slice(0, 180)}..."</p>
                  <footer>
                    <strong>{t.author}</strong>
                    <span>{t.designation}</span>
                    <span>{t.company}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="seo-section seo-faq">
          <div className="container">
            <span className="seo-eyebrow">Frequently Asked Questions</span>
            <h2>AI Training FAQs</h2>
            <div className="seo-faq-list">
              <div className="seo-faq-item">
                <h3>Who is the Top AI Trainer in Coimbatore?</h3>
                <p>
                  <strong>Dr. Arun Divakaran</strong> is widely recognized as the <strong>Top AI Trainer in Coimbatore</strong>, 
                  delivering world-class Generative AI training, Agentic AI workshops, and corporate AI transformation programs 
                  for enterprises, colleges, and government institutions in Coimbatore and across Tamilnadu.
                </p>
              </div>

              <div className="seo-faq-item">
                <h3>Who is the Best Generative AI Trainer in Tamilnadu?</h3>
                <p>
                  <strong>Dr. Arun Divakaran</strong> is Tamilnadu's leading <strong>Generative AI Trainer</strong>, having trained 
                  50,000+ professionals in ChatGPT, Claude, Gemini, prompt engineering, and AI productivity tools. His training programs 
                  are trusted by top companies across Chennai, Coimbatore, Madurai, and Trichy.
                </p>
              </div>

              <div className="seo-faq-item">
                <h3>What is Agentic AI and who teaches it in India?</h3>
                <p>
                  Agentic AI refers to autonomous AI agents that can plan, decide, and execute multi-step workflows independently. 
                  <strong>Dr. Arun Divakaran</strong> is India's leading <strong>Agentic AI Trainer</strong>, teaching enterprises 
                  how to build and deploy AI agents for business automation, customer service, and intelligent process optimization.
                </p>
              </div>

              <div className="seo-faq-item">
                <h3>What makes Dr. Arun Divakaran the Best AI Leadership Trainer in India?</h3>
                <p>
                  With <strong>19+ years of IT leadership experience</strong> at Fortune 500 companies, <strong>450+ keynote addresses</strong>, 
                  and proven AI transformation frameworks, Dr. Arun Divakaran is recognized as the <strong>Best AI Leadership Trainer in India</strong> 
                  for executives, C-suite leaders, and senior managers navigating enterprise-wide AI adoption.
                </p>
              </div>

              <div className="seo-faq-item">
                <h3>Who is the Best Keynote Speaker in Tamilnadu?</h3>
                <p>
                  <strong>Dr. Arun Divakaran</strong> is the <strong>Best Keynote Speaker in Tamilnadu</strong> and <strong>Best Keynote Speaker 
                  in Coimbatore</strong>, delivering inspiring talks on AI, digital transformation, leadership, and innovation for corporate events, 
                  industrial associations, and educational institutions across Tamilnadu.
                </p>
              </div>

              <div className="seo-faq-item">
                <h3>What AI training programs does J-Impact offer?</h3>
                <p>
                  <strong>J-Impact</strong> offers comprehensive AI training programs including: Generative AI Training, Agentic AI Workshops, 
                  AI for Business Leaders, Corporate AI Transformation, AI for HR/IT/Marketing/Finance, Prompt Engineering, ChatGPT Training, 
                  AI Productivity Tools, Design Thinking, and Enterprise Agile workshops — all delivered by <strong>Dr. Arun Divakaran</strong>, 
                  India's Top AI Trainer.
                </p>
              </div>

              <div className="seo-faq-item">
                <h3>How can I book an AI training session with Dr. Arun Divakaran?</h3>
                <p>
                  To book an AI training workshop or keynote session with Dr. Arun Divakaran, visit <a href={SITE_URL}>{SITE_URL}</a>, 
                  email <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>, or call {SITE_PHONE}. Customized AI training programs are 
                  available for corporates, colleges, and government organizations across India.
                </p>
              </div>

              <div className="seo-faq-item">
                <h3>What languages does Dr. Arun conduct AI training in?</h3>
                <p>
                  Dr. Arun Divakaran delivers AI training programs in <strong>English, Tamil, Hindi, and Malayalam</strong>, making 
                  advanced AI education accessible to diverse audiences across India — from Kerala to Tamilnadu to pan-India enterprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="seo-section seo-final-cta">
          <div className="container">
            <div className="seo-cta-box">
              <h2>Transform Your Organization with AI Training from India's Top AI Trainer</h2>
              <p>
                Partner with <strong>Dr. Arun Divakaran</strong>, the <strong>Top AI Trainer in Coimbatore</strong>, 
                <strong> Top AI Trainer in Tamilnadu</strong>, and one of the <strong>Top AI Trainers in India</strong> 
                for world-class Generative AI Training, Agentic AI Workshops, AI Leadership Programs, and Keynote Speaking.
              </p>
              <div className="seo-cta-buttons">
                <a href="/#enquiry" className="btn-primary btn-large">Book a Training Session <ArrowRight size={20} /></a>
                <a href={SITE_URL} className="btn-secondary btn-large">Visit {SITE_URL.replace('https://', '')}</a>
              </div>
              <div className="seo-contact-info">
                <p><strong>Email:</strong> <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></p>
                <p><strong>Phone:</strong> {SITE_PHONE}</p>
                <p><strong>Location:</strong> Coimbatore, Tamilnadu, India</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer contact={siteData.contact} />
    </>
  );
};

export default SEOPillarPage;
