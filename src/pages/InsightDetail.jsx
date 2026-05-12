import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink, Maximize2, Clock, Tag } from 'lucide-react';
import { siteData } from '../data/siteData';
import { getArticleAssets, getBookArticleImage, AMAZON_KINDLE_URL } from '../utils/assetLoader';
import SEOHead from '../components/SEOHead';
import { SITE_URL, FOUNDER_NAME, SITE_NAME, makeBreadcrumb, makeArticleSchema } from '../utils/seoConfig';
import '../sections/Insights.css';

const InsightDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => location.key !== 'default' ? navigate(-1) : navigate('/blog');

  const insight = siteData.blog.find(item => item.id === parseInt(id));

  if (!insight) return <div className="not-found">Insight not found</div>;

  const { image, pdf, imageBack } = getArticleAssets(insight.title);
  const isCreatiwitty = insight.title.toUpperCase().includes('CREATI-WITTY');
  const isBook = isCreatiwitty || insight.title.toUpperCase().includes('ACCIDENTAL DATA ANALYST');

  // Related posts — same category, excluding current
  const relatedPosts = siteData.blog
    .filter(p => p.id !== insight.id && (p.category === insight.category || (p.tags && insight.tags && p.tags.some(t => insight.tags.includes(t)))))
    .slice(0, 3);

  const canonicalUrl = `${SITE_URL}/insight/${insight.id}`;
  const pageTitle = insight.seoTitle || insight.title;
  const pageDesc = insight.metaDescription || insight.excerpt;

  const schemas = [
    makeBreadcrumb([
      { name: 'Blog & Articles', path: '/blog' },
      { name: pageTitle, path: `/insight/${insight.id}` },
    ]),
    makeArticleSchema(insight),
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': canonicalUrl,
      name: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      author: { '@type': 'Person', name: FOUNDER_NAME, url: SITE_URL },
      inLanguage: 'en-IN',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: pageTitle, item: canonicalUrl },
        ],
      },
    }
  ];

  return (
    <>
      <SEOHead
        title={`${pageTitle} | J-Impact Blog`}
        description={pageDesc}
        keywords={insight.tags ? insight.tags.join(', ') : insight.focusKeyword}
        canonical={canonicalUrl}
        ogType="article"
        schemas={schemas}
      />

      <div className="insight-page-wrapper animate-fade-in">
        <div className="article-viewer-container page-mode">
          <div className="article-viewer-header">
            <button className="back-btn" onClick={goBack} aria-label="Go back">
              <ArrowLeft size={20} /> Back
            </button>

            <div className="viewer-title-area">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="article-breadcrumb">
                <ol itemScope itemType="https://schema.org/BreadcrumbList">
                  <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link to="/" itemProp="item"><span itemProp="name">Home</span></Link>
                    <meta itemProp="position" content="1" />
                  </li>
                  <li aria-hidden="true">›</li>
                  <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link to="/blog" itemProp="item"><span itemProp="name">Blog</span></Link>
                    <meta itemProp="position" content="2" />
                  </li>
                  <li aria-hidden="true">›</li>
                  <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <span itemProp="name">{pageTitle}</span>
                    <meta itemProp="position" content="3" />
                  </li>
                </ol>
              </nav>

              <div className="viewer-meta-row">
                {insight.category && (
                  <span className="viewer-category">
                    <Tag size={13} /> {insight.category}
                  </span>
                )}
                {insight.readTime && (
                  <span className="viewer-read-time">
                    <Clock size={13} /> {insight.readTime}
                  </span>
                )}
              </div>

              <h1 className="viewer-title">{pageTitle}</h1>

              {insight.tags && (
                <div className="viewer-tags" aria-label="Article tags">
                  {insight.tags.map(tag => (
                    <span key={tag} className="viewer-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>

            <div style={{ width: '100px' }} />
          </div>

          <div className="article-viewer-content">
            <div className="article-main-layout">
              <article
                className="article-text-section"
                itemScope
                itemType="https://schema.org/Article"
              >
                <meta itemProp="headline" content={pageTitle} />
                <meta itemProp="description" content={pageDesc} />
                <meta itemProp="datePublished" content={insight.publishedDate || '2024-01-01'} />
                <meta itemProp="author" content={FOUNDER_NAME} />
                <meta itemProp="publisher" content={SITE_NAME} />

                {isBook ? (
                  <div className="book-detail-body">
                    <div className="book-hero-row">
                      {image && (
                        <div className="book-cover-front-wrap">
                          <img
                            src={image}
                            alt={`${pageTitle} Front Cover`}
                            className="book-cover-img"
                            loading="eager"
                            itemProp="image"
                          />
                        </div>
                      )}
                      <div className="book-hero-info">
                        <span className="book-hero-badge">
                          <BookOpen size={14} /> Best Selling Book
                        </span>
                        <p className="book-hero-author">By {FOUNDER_NAME}</p>
                        <p className="book-hero-excerpt">{insight.excerpt}</p>
                        {insight.tags && (
                          <div className="book-hero-tags">
                            {insight.tags.slice(0, 3).map(t => (
                              <span key={t} className="viewer-tag">{t}</span>
                            ))}
                          </div>
                        )}
                        <a
                          href={AMAZON_KINDLE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="read-book-here-btn book-hero-cta"
                        >
                          Read Book Here <ExternalLink size={17} />
                        </a>
                      </div>
                    </div>

                    <div className="book-description-section" itemProp="articleBody">
                      {insight.full.split('\n\n').map((para, idx) =>
                        para.startsWith('"') || para.startsWith('“') ? (
                          <blockquote key={idx} className="book-pull-quote">{para}</blockquote>
                        ) : (
                          <p key={idx}>{para}</p>
                        )
                      )}
                    </div>

                    {imageBack && (
                      <div className="book-back-cover-section">
                        <h3 className="book-back-label">Back Cover</h3>
                        <div className="book-back-cover-wrap">
                          <img
                            src={imageBack}
                            alt={`${pageTitle} Back Cover`}
                            className="book-cover-img"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    {image && (
                      <div className="article-featured-img-wrap">
                        <img
                          src={image}
                          alt={`${pageTitle} — ${FOUNDER_NAME}`}
                          className="article-featured-img"
                          loading="eager"
                          itemProp="image"
                        />
                      </div>
                    )}

                    <div className="article-full-text" itemProp="articleBody">
                      {insight.full.split('\n\n').map((para, idx) => {
                        const imgMatch = para.match(/^\[IMAGE_(\d+)\]$/);
                        if (imgMatch && insight.inlineImages) {
                          const key = `IMAGE_${imgMatch[1]}`;
                          const src = insight.inlineImages[key] ? getBookArticleImage(insight.inlineImages[key]) : null;
                          if (src) return (
                            <figure key={idx} className="article-inline-figure">
                              <img src={src} alt="" className="article-inline-img" loading="lazy" />
                            </figure>
                          );
                        }
                        return <p key={idx}>{para}</p>;
                      })}
                    </div>

                    {pdf && (
                      <div className="reader-cta-box">
                        <p>This article includes an interactive PDF companion.</p>
                        <button
                          className="open-reader-btn"
                          onClick={() => navigate(`/insight/${id}/reader`)}
                          aria-label="Open full-screen PDF reader"
                        >
                          Open Full-Screen Reader <Maximize2 size={18} />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </article>

              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <aside className="article-related" aria-label="Related articles">
                  <h2 className="related-heading">Related Articles</h2>
                  <div className="related-grid">
                    {relatedPosts.map(post => (
                      <Link key={post.id} to={`/insight/${post.id}`} className="related-card">
                        <span className="related-category">{post.category}</span>
                        <h3 className="related-title">{post.seoTitle || post.title}</h3>
                        <p className="related-excerpt">{(post.metaDescription || post.excerpt).slice(0, 100)}…</p>
                      </Link>
                    ))}
                  </div>
                </aside>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightDetail;
