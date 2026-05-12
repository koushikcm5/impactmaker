import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
      <div className="container">

        <div className="insights-header">
          <span className="insights-eyebrow">Knowledge Hub</span>
          <h2 className="insights-heading">Articles, Insights &amp; Books</h2>
          <p className="insights-sub">
            Expert perspectives on AI training, corporate learning, digital transformation,
            and the future of work — by Dr. Arun Divakaran, India's top AI trainer.
          </p>
        </div>

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
                onClick={() => navigate(`/insight/${insight.id}`)}
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
                    onClick={() => navigate(`/insight/${insight.id}`)}
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
                      onClick={() => navigate(`/insight/${insight.id}`)}
                      isBook={!insight.isArticle}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Insights;
