import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Download, FileText, ExternalLink, Maximize2, Clock, Tag } from 'lucide-react';
import { siteData } from '../data/siteData';
import { getArticleAssets, AMAZON_KINDLE_URL } from '../utils/assetLoader';
import SEOHead from '../components/SEOHead';
import { SITE_URL, FOUNDER_NAME, SITE_NAME, makeBreadcrumb, makeArticleSchema } from '../utils/seoConfig';
import '../sections/Insights.css';

const InsightDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const insight = siteData.blog.find(item => item.id === parseInt(id));

  if (!insight) return <div className="not-found">Insight not found</div>;

  const { image, pdf } = getArticleAssets(insight.title);
  const isCreatiwitty = insight.title.toUpperCase().includes('CREATI-WITTY');

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
            <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
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

                {isCreatiwitty && (
                  <div className="book-action-banner">
                    <div className="banner-visual">
                      <BookOpen size={28} />
                    </div>
                    <div className="banner-info">
                      <h2>Explore the complete book</h2>
                      <p>Unlock practical strategies for creative teaching and personalized learning.</p>
                    </div>
                    <a href={AMAZON_KINDLE_URL} target="_blank" rel="noopener noreferrer" className="read-book-here-btn">
                      Read Book Here <ExternalLink size={18} />
                    </a>
                  </div>
                )}

                <div className="article-full-text" itemProp="articleBody">
                  {insight.full.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
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
