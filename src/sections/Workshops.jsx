import { useState, useEffect, useCallback, useRef } from 'react';
import { Sparkles, X, ArrowRight, ExternalLink, Zap, Users, Target, TrendingUp, Leaf, BarChart2, Car, Landmark, ShoppingBag, ShoppingCart, CreditCard, Heart, Brain, Briefcase, Code2, Lightbulb, RefreshCw, Mic } from 'lucide-react';
import NetworkCanvas from '../components/NetworkCanvas';
import gameChangerImg from '../assets/Gallery/others/f0e5ee81-4645-4133-a12e-f5104b7e1658.png';
import './Workshops.css';

const domains = [
  { label: 'ESG', icon: Leaf },
  { label: 'Finance P&A', icon: BarChart2 },
  { label: 'Automobile', icon: Car },
  { label: 'Government & Diplomats', icon: Landmark },
  { label: 'FMCG', icon: ShoppingBag },
  { label: 'Retail', icon: ShoppingCart },
  { label: 'Banking', icon: CreditCard },
  { label: 'Healthcare', icon: Heart },
];

const technicalWorkshops = [
  { icon: Brain, title: "AI for Executive Leadership", description: "Strategic AI frameworks and tools designed for C-suite leaders navigating enterprise-wide AI transformation." },
  { icon: Briefcase, title: "AI for Functional Roles", description: "Tailored AI workflows for HR, IT, Finance, Operations and more — hands-on skills for every department." },
  { icon: Code2, title: "AI for Fresh Engineers", description: "Prompt engineering, AI tooling, and integration fundamentals for early-career engineers entering the AI era." },
  { icon: Target, title: "Use Case–Driven Personalized Case Studies", description: "Industry-specific AI implementations with real-world scenarios personalized to your domain and challenges." },
];

const transformationalWorkshops = [
  { icon: Lightbulb, title: "Design Thinking for Corporate Work Hands-On", description: "Immersive, hands-on design sprints using human-centered problem-solving to unlock innovation at work." },
  { icon: TrendingUp, title: "Leadership Transformation", description: "Evolve leadership mindsets, communication styles, and executive capabilities for the modern workplace." },
  { icon: RefreshCw, title: "Agile & Scrum Workshops", description: "Practical agile methodologies and Scrum frameworks to accelerate delivery and enhance team collaboration." },
];

const speakerSessions = [
  { icon: Mic, title: "Keynote Speaker", description: "Inspiring keynote addresses on AI, creativity, human potential, and the future of work — tailored to your event theme and audience." },
  { icon: Users, title: "Leadership Speaker", description: "Powerful talks on leadership transformation, organizational resilience, and the executive mindset needed to lead in uncertainty." },
];

const Workshops = ({ programs, data }) => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const sectionRef = useRef(null);

  const closeModal = useCallback(() => setSelectedWorkshop(null), []);

  useEffect(() => {
    document.body.style.overflow = selectedWorkshop ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedWorkshop]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closeModal]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="workshops" className="workshops">
      <NetworkCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <div className="game-changer-section" id="game-changer" ref={sectionRef}>
          <div className="game-changer-header">
            <span className="workshops-pill">Holistic Evolution</span>
            <h2 className="game-changer-title">The Game-Changer Workshops</h2>
          </div>

          {/* Two-column: image | highlights + CTA */}
          <div className="game-changer-content">
            <div className="game-changer-image-wrapper">
              <div className="game-changer-image">
                <img src={gameChangerImg} alt="Game-Changer Workshops" loading="lazy" />
                <div className="image-badge">
                  <Sparkles size={16} />
                  <span>Transformative Learning</span>
                </div>
              </div>
            </div>

            <div className="game-changer-details">
              <p className="intro-text">
                These game-changing workshops enable <strong>holistic transformation</strong> for
                corporates, educators, and student learners by unlocking their{' '}
                <strong>creative thinking capacity</strong> through proven methodologies and{' '}
                <strong>ancient practices</strong>.
              </p>

              <div className="highlights-grid">
                <div className="highlight-item">
                  <div className="highlight-icon"><Zap size={20} /></div>
                  <div className="highlight-content">
                    <h4>Transform Employees</h4>
                    <p>Change the way your employees perform and deliver</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon"><Users size={20} /></div>
                  <div className="highlight-content">
                    <h4>Transform Teachers</h4>
                    <p>Revolutionize the way your educators teach and engage</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon"><Target size={20} /></div>
                  <div className="highlight-content">
                    <h4>Transform Students</h4>
                    <p>Reshape the way your students learn and grow</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon"><TrendingUp size={20} /></div>
                  <div className="highlight-content">
                    <h4>Expert Facilitation</h4>
                    <p>19+ years of transformative training across corporates and campuses</p>
                  </div>
                </div>
              </div>

              <div className="game-changer-cta">
                <a href="#contact" className="cta-primary">
                  <span>Explore Workshops</span>
                  <ArrowRight size={20} />
                </a>
                <a href="#testimonials" className="cta-secondary">
                  <span>Success Stories</span>
                </a>
              </div>
            </div>
          </div>

          {/* Domain Expertise — full-width row */}
          <div className="domain-expertise-row">
            <div className="domain-row-header">
              <div className="domain-divider" />
              <span className="domain-section-label">Domain Expertise</span>
              <div className="domain-divider" />
            </div>
            <div className="domain-cards-grid">
              {domains.map(({ label, icon: Icon }, i) => (
                <div
                  key={label}
                  className="domain-card"
                  style={{ '--delay': `${0.5 + i * 0.06}s` }}
                >
                  <div className="domain-card-icon"><Icon size={16} /></div>
                  <span className="domain-card-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deep-Dive Workshops */}
        <div className="deep-dive-part" id="deep-dive">
          <div className="section-header">
            <span className="workshops-pill">Transformative Learning</span>
            <h2>Deep-Dive Workshops</h2>
            <p>Holistic transformation modules designed for sustainable impact across all levels of education and corporate life.</p>
          </div>

          <div className="workshops-grid">
            {data.map(workshop => (
              <div key={workshop.id} className="workshop-card">
                <div className="workshop-card-image">
                  <img src={workshop.image} alt={workshop.title} loading="lazy" />
                  <div className="workshop-card-overlay">
                    <button
                      onClick={() => setSelectedWorkshop(workshop)}
                      className="workshop-expand-btn"
                      aria-label={`Read more about ${workshop.title}`}
                    >
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
                <div className="workshop-card-body">
                  <div className="workshop-card-header">
                    <Sparkles className="workshop-card-icon" size={16} />
                    <h3>{workshop.title}</h3>
                  </div>
                  <p className="workshop-card-short">{workshop.short}</p>
                  <button onClick={() => setSelectedWorkshop(workshop)} className="workshop-read-more">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Workshops */}
        <div className="ws-category-section" id="technical-workshops">
          <div className="ws-category-header">
            <span className="workshops-pill">AI &amp; Technology</span>
            <h2 className="ws-category-title">Technical Workshops</h2>
            <p className="ws-category-desc">
              AI-powered skilling programmes built for every layer of the organisation — from the boardroom to the engineering floor.
            </p>
          </div>
          <div className="ws-category-grid">
            {technicalWorkshops.map((item) => (
              <div key={item.title} className="ws-item-card">
                <div className="ws-item-icon ws-icon-blue">
                  <item.icon size={24} />
                </div>
                <h3 className="ws-item-title">{item.title}</h3>
                <p className="ws-item-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transformational Workshops */}
        <div className="ws-category-section ws-section-alt" id="transformational-workshops">
          <div className="ws-category-header">
            <span className="workshops-pill ws-pill-orange">Non-Technical</span>
            <h2 className="ws-category-title ws-title-orange">Transformational Workshops</h2>
            <p className="ws-category-desc">
              People-first programmes that reshape thinking, leadership, and team culture through experiential learning.
            </p>
          </div>
          <div className="ws-category-grid">
            {transformationalWorkshops.map((item) => (
              <div key={item.title} className="ws-item-card ws-card-alt">
                <div className="ws-item-icon ws-icon-orange">
                  <item.icon size={24} />
                </div>
                <h3 className="ws-item-title">{item.title}</h3>
                <p className="ws-item-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Speaker */}
        <div className="ws-category-section ws-section-speaker" id="speaker-section">
          <div className="ws-category-header">
            <span className="workshops-pill ws-pill-navy">Speaking Engagements</span>
            <h2 className="ws-category-title ws-title-navy">Speaker</h2>
            <p className="ws-category-desc">
              High-impact talks that energize, inspire, and challenge audiences to think differently about leadership and the future.
            </p>
          </div>
          <div className="ws-category-grid ws-speaker-grid">
            {speakerSessions.map((item) => (
              <div key={item.title} className="ws-item-card ws-speaker-card">
                <div className="ws-item-icon ws-icon-navy">
                  <item.icon size={28} />
                </div>
                <h3 className="ws-item-title">{item.title}</h3>
                <p className="ws-item-desc">{item.description}</p>
                <a href="#contact" className="ws-speaker-cta">
                  <span>Book Now</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {selectedWorkshop && (
        <div className="workshop-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="workshop-modal-container" onClick={e => e.stopPropagation()}>
            <button className="workshop-modal-close" onClick={closeModal} aria-label="Close">
              <X size={24} />
            </button>
            <div className="workshop-modal-content animate-modal">
              <div className="workshop-modal-visual">
                {selectedWorkshop.intro && <p className="workshop-modal-intro">{selectedWorkshop.intro}</p>}
                <img src={selectedWorkshop.image} alt={selectedWorkshop.title} />
              </div>
              <div className="workshop-modal-info">
                <span className="workshop-modal-tag">Workshop Programme</span>
                <h2>{selectedWorkshop.title}</h2>
                <div className="workshop-modal-divider" />
                <div className="workshop-modal-narrative">
                  {selectedWorkshop.full.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <button className="workshop-modal-cta" onClick={closeModal}>
                  Close Discovery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Workshops;
