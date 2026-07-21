import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import InsightCard from '../components/InsightCard';
import { getArticleAssets, getBookArticleImage } from '../utils/assetLoader';
import { BLOG_CATEGORIES } from '../utils/seoConfig';
import './Insights.css';

const Insights = ({ data }) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [moreExpanded, setMoreExpanded] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); observer.unobserve(el); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const enhancedData = data.map(item => {
    const assets = getArticleAssets(item.title);
    let image = assets.image;
    if (!image && item.featuredImage) {
      image = getBookArticleImage(item.featuredImage);
    }
    if (!image && item.inlineImages) {
      const firstKey = Object.keys(item.inlineImages)[0];
      if (firstKey) image = getBookArticleImage(item.inlineImages[firstKey]);
    }
    const isArticle = !!(item.featuredImage || item.inlineImages);
    return { ...item, ...assets, image, isArticle };
  });

  // Split: original articles (2024) vs additional/newer articles (2025+)
  const originalData = enhancedData.filter(item =>
    !item.publishedDate || item.publishedDate.startsWith('2024')
  );
  const additionalData = enhancedData.filter(item =>
    item.publishedDate && !item.publishedDate.startsWith('2024')
  );

  // Get unique categories from the original (visible) articles only
  const localCategories = ['All', ...new Set(originalData.map(p => p.category).filter(Boolean))];

  const filterItems = (items) => activeCategory === 'All'
    ? items
    : items.filter(p => p.category === activeCategory || (p.tags && p.tags.includes(activeCategory)));

  const filteredOriginal = filterItems(originalData);
  const filteredAdditional = filterItems(additionalData);

  const filteredBooks = filteredOriginal.filter(item => !item.isArticle);
  const filteredArticles = filteredOriginal.filter(item => item.isArticle);

  return (
    <section className="insights" id="blog" ref={sectionRef} aria-label="Blog articles and books">

      {/* Full-bleed dark hero header band */}
      <div className="insights-header">
        <span className="insights-eyebrow">Knowledge Hub</span>
        <h2 className="insights-heading">Articles, Insights &amp; Books</h2>
        <p className="insights-sub">
          Expert perspectives on AI training, corporate learning, digital transformation,
          and the future of work — by Dr. Arun Divakaran, India's top AI trainer.
        </p>
      </div>

      <div className="container">

        {/* Category filter — semantic nav for crawlability */}
        <nav className="insights-category-nav" aria-label="Blog categories">
          <ul className="insights-category-list">
            {localCategories.map(cat => (
              <li key={cat}>
                <button
                  className={`insights-cat-btn${activeCategory === cat ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  aria-label={`Filter by ${cat}`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Books & blog cards */}
        <div className="insights-grid" role="list">
          {filteredBooks.map((insight, i) => (
            <div
              key={insight.id}
              className="insights-card-wrap"
              style={{ '--delay': `${0.08 + i * 0.09}s` }}
              role="listitem"
            >
              <InsightCard
                {...insight}
                onClick={() => navigate(`/insight/${insight.slug || insight.id}`)}
                isBook={!insight.isArticle}
              />
            </div>
          ))}
        </div>

        {/* Articles section — separate with heading */}
        {filteredArticles.length > 0 && (
          <div className="insights-articles-section">
            <div className="insights-articles-header">
              <span className="insights-articles-eyebrow">Written Works</span>
              <h3 className="insights-articles-heading">Articles</h3>
            </div>
            <div className="insights-grid insights-articles-grid" role="list">
              {filteredArticles.map((insight, i) => (
                <div
                  key={insight.id}
                  className="insights-card-wrap"
                  style={{ '--delay': `${0.08 + i * 0.09}s` }}
                  role="listitem"
                >
                  <InsightCard
                    {...insight}
                    onClick={() => navigate(`/insight/${insight.slug || insight.id}`)}
                    isArticle={insight.isArticle}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredBooks.length === 0 && filteredArticles.length === 0 && filteredAdditional.length === 0 && (
          <p className="insights-empty" role="status">No articles found in this category yet.</p>
        )}

        {/* Additional / newer articles — collapsible section */}
        {filteredAdditional.length > 0 && (
          <div className="insights-more-section">
            <button
              className="insights-more-toggle"
              onClick={() => setMoreExpanded(prev => !prev)}
              aria-expanded={moreExpanded}
              aria-controls="insights-more-grid"
            >
              <span className="insights-more-eyebrow">Latest Insights</span>
              <span className="insights-more-title">More Articles &amp; Expert Perspectives</span>
              <span className={`insights-more-chevron${moreExpanded ? ' open' : ''}`} aria-hidden="true">
                ▼
              </span>
            </button>

            <div
              id="insights-more-grid"
              className={`insights-more-body${moreExpanded ? ' expanded' : ''}`}
            >
              <div className="insights-grid" role="list">
                {filteredAdditional.map((insight, i) => (
                  <div
                    key={insight.id}
                    className="insights-card-wrap"
                    style={{ '--delay': `${0.08 + i * 0.09}s` }}
                    role="listitem"
                  >
                    <InsightCard
                      {...insight}
                      onClick={() => navigate(`/insight/${insight.slug || insight.id}`)}
                      isBook={!insight.isArticle}
                    />
                  </div>
                ))}
              </div>

              {/* ── SEO Topic Authority Hub ── */}
              <div className="insights-seo-hub">
                <div className="insights-seo-hub-header">
                  <span className="insights-seo-hub-eyebrow">Expert Knowledge Hub</span>
                  <h3 className="insights-seo-hub-title">AI Training, Leadership &amp; Digital Transformation</h3>
                  <p className="insights-seo-hub-sub">Explore expert perspectives, corporate training programs, and AI adoption strategies by Dr. Arun Divakaran — India's leading AI trainer and keynote speaker.</p>
                </div>

                <div className="insights-seo-clusters">

                  <div className="insights-seo-cluster">
                    <h4 className="insights-seo-cluster-title">AI Training Programs</h4>
                    <div className="insights-seo-tags">
                      {[
                        'Top AI Trainer in India','Top AI Trainers in India','Best AI Trainer in India',
                        'Corporate AI Trainer','Enterprise AI Trainer','Corporate AI Training India',
                        'AI Workshop India','AI Workshop Tamilnadu','AI Workshop Coimbatore',
                        'AI for Business','AI for Executives','AI for Leaders',
                        'AI Readiness Assessment','AI Productivity Training','AI Automation Workshop',
                      ].map(kw => (
                        <span key={kw} className="insights-seo-tag">{kw}</span>
                      ))}
                    </div>
                  </div>

                  <div className="insights-seo-cluster">
                    <h4 className="insights-seo-cluster-title">Generative &amp; Agentic AI</h4>
                    <div className="insights-seo-tags">
                      {[
                        'Generative AI Trainer India','Generative AI Trainer Tamilnadu','Generative AI Trainer Coimbatore',
                        'Best Generative AI Trainer in India','Agentic AI Trainer','Agentic AI Trainer India',
                        'Prompt Engineering Trainer','Prompt Engineering Workshop',
                        'Claude AI Trainer','Claude AI Training India','Claude Corporate Training',
                        'ChatGPT Trainer','ChatGPT Corporate Trainer',
                        'Google Gemini Trainer','Gemini AI Trainer',
                        'Microsoft Copilot Trainer','Copilot Corporate Training',
                      ].map(kw => (
                        <span key={kw} className="insights-seo-tag">{kw}</span>
                      ))}
                    </div>
                  </div>

                  <div className="insights-seo-cluster">
                    <h4 className="insights-seo-cluster-title">Keynote Speaking</h4>
                    <div className="insights-seo-tags">
                      {[
                        'AI Keynote Speaker','Best AI Keynote Speaker',
                        'Best Keynote Speaker in India','Best Keynote Speaker in Tamilnadu','Best Keynote Speaker in Coimbatore',
                        'AI Speaker India','Future of AI Speaker',
                        'AI Transformation Speaker','Artificial Intelligence Speaker',
                        'Innovation Speaker',
                      ].map(kw => (
                        <span key={kw} className="insights-seo-tag">{kw}</span>
                      ))}
                    </div>
                  </div>

                  <div className="insights-seo-cluster">
                    <h4 className="insights-seo-cluster-title">Leadership &amp; Innovation</h4>
                    <div className="insights-seo-tags">
                      {[
                        'Best AI Leadership Trainer in India','Best AI Leadership Trainer in Tamilnadu','Best AI Leadership Trainer in Coimbatore',
                        'AI Consulting India','Enterprise AI Consultant',
                        'Design Thinking Trainer','Innovation Workshop',
                        'Enterprise Agile Trainer','Leadership Trainer',
                        'Corporate Trainer India','Future Skills Trainer',
                        'Digital Transformation Trainer','Responsible AI Training','AI Governance Workshop',
                      ].map(kw => (
                        <span key={kw} className="insights-seo-tag">{kw}</span>
                      ))}
                    </div>
                  </div>

                  <div className="insights-seo-cluster">
                    <h4 className="insights-seo-cluster-title">Regional Expertise</h4>
                    <div className="insights-seo-tags">
                      {[
                        'Top AI Trainer in Tamilnadu','Top AI Trainers in Tamilnadu',
                        'Top AI Trainer in Coimbatore','Top AI Trainers in Coimbatore',
                        'Generative AI Trainer Coimbatore','Generative AI Trainer Tamilnadu',
                        'Best AI Leadership Trainer in Coimbatore',
                      ].map(kw => (
                        <span key={kw} className="insights-seo-tag insights-seo-tag--accent">{kw}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
              <div className="insights-regional-hub">
                <div className="insights-regional-header">
                  <span className="insights-regional-title">Top AI Trainers In</span>
                </div>
                <div className="insights-regional-grid">
                  <Link to="/top-ai-trainer-india" className="insights-regional-link">
                    <MapPin size={15} /> Top AI Trainers in India
                  </Link>
                  <Link to="/ai-trainer-tamilnadu" className="insights-regional-link">
                    <MapPin size={15} /> Top AI Trainers in Tamilnadu
                  </Link>
                  <Link to="/ai-trainer-coimbatore" className="insights-regional-link">
                    <MapPin size={15} /> Top AI Trainers in Coimbatore
                  </Link>
                  <Link to="/best-ai-keynote-speaker-india" className="insights-regional-link">
                    <MapPin size={15} /> Best AI Keynote Speaker India
                  </Link>
                  <Link to="/corporate-ai-workshops-india" className="insights-regional-link">
                    <MapPin size={15} /> Corporate AI Workshops India
                  </Link>
                  <Link to="/top-10-claude-ai-trainers-india-2026" className="insights-regional-link">
                    <MapPin size={15} /> Top Claude AI Trainers India 2026
                  </Link>
                  <Link to="/best-keynote-speaker-coimbatore" className="insights-regional-link">
                    <MapPin size={15} /> Best Keynote Speaker in Coimbatore
                  </Link>
                  <Link to="/generative-ai-trainer-india" className="insights-regional-link">
                    <MapPin size={15} /> Top Generative AI Trainer India
                  </Link>
                  <Link to="/generative-ai-trainer-coimbatore" className="insights-regional-link">
                    <MapPin size={15} /> Generative AI Trainer Coimbatore
                  </Link>
                  <Link to="/generative-ai-trainer-tamilnadu" className="insights-regional-link">
                    <MapPin size={15} /> Generative AI Trainer Tamilnadu
                  </Link>
                  <Link to="/agentic-ai-trainer-india" className="insights-regional-link">
                    <MapPin size={15} /> Agentic AI Trainer India
                  </Link>
                  <Link to="/prompt-engineering-trainer-india" className="insights-regional-link">
                    <MapPin size={15} /> Prompt Engineering Trainer India
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Insights;
