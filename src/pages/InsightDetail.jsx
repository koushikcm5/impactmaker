import { useState } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, ExternalLink, Maximize2, Clock, Tag, CheckCircle2, Lightbulb, Target, TrendingUp, Users, Award, ArrowRight, ChevronDown } from 'lucide-react';
import { siteData } from '../data/siteData';
import { getArticleAssets, getBookArticleImage, AMAZON_KINDLE_URL } from '../utils/assetLoader';
import SEOHead from '../components/SEOHead';
import { SITE_URL, FOUNDER_NAME, SITE_NAME, makeBreadcrumb, makeArticleSchema } from '../utils/seoConfig';
import '../sections/Insights.css';
import '../pages/InsightDetail.css';

// Renders inline markdown: **bold**, *italic*, `code`
const renderInline = (text) => {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={i} className="article-inline-code">{part.slice(1, -1)}</code>;
    return part;
  });
};

// Para-level pattern helpers
const isLocationLine  = (p) => p.trim().startsWith('📍');
const isRatingLine    = (p) => p.trim().startsWith('⭐');
const isBestFor       = (p) => /^\*\*✓/.test(p.trim());
const isFocusLine     = (p) => /^\*\*(Focus|Notable Focus):/.test(p.trim());
const isNotableFocus  = (p) => /^\*\*Notable Focus/.test(p.trim());
const isWebsiteLine   = (p) => /^\*\*Website:/.test(p.trim());
// Quick-ref card: ### 01. Name — City\n**Best For:** ...
const isQuickRefCard  = (p) => /^###\s+\d{2}\./.test(p.trim()) && p.includes('\n');

// Article inline FAQ accordion
const ArticleFAQ = ({ items }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="article-faq">
      {items.map((item, i) => (
        <div key={i} className={`article-faq-item${open === i ? ' article-faq-item--open' : ''}`}>
          <button className="article-faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span>{item.q}</span>
            <ChevronDown className="article-faq-chevron" size={18} />
          </button>
          <div className="article-faq-a-wrap">
            <p className="article-faq-a">{renderInline(item.a)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const InsightDetail = ({ slugOverride }) => {
  const { id } = useParams();
  const resolvedId = slugOverride || id;
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => location.key !== 'default' ? navigate(-1) : navigate('/blog');

  const insight = siteData.blog.find(item => 
    item.id === parseInt(resolvedId) || item.slug === resolvedId
  );

  if (!insight) return <div className="not-found">Insight not found</div>;

  const { image, pdf, imageBack } = getArticleAssets(insight.title);
  const isCreatiwitty = insight.title.toUpperCase().includes('CREATI-WITTY');
  const isBook = isCreatiwitty || insight.title.toUpperCase().includes('ACCIDENTAL DATA ANALYST');

  // Related posts — same category, excluding current
  const relatedPosts = siteData.blog
    .filter(p => p.id !== insight.id && (p.category === insight.category || (p.tags && insight.tags && p.tags.some(t => insight.tags.includes(t)))))
    .slice(0, 3);

  const canonicalUrl = slugOverride
    ? `${SITE_URL}/${slugOverride}`
    : `${SITE_URL}/insight/${insight.slug || insight.id}`;
  const pageTitle = insight.seoTitle || insight.title;
  const pageDesc = insight.metaDescription || insight.excerpt;

  const getIconForSection = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('specialist') || lowerTitle.includes('expert')) return <Award size={24} />;
    if (lowerTitle.includes('workshop') || lowerTitle.includes('training')) return <Users size={24} />;
    if (lowerTitle.includes('benefit') || lowerTitle.includes('advantage')) return <CheckCircle2 size={24} />;
    if (lowerTitle.includes('innovation') || lowerTitle.includes('idea')) return <Lightbulb size={24} />;
    if (lowerTitle.includes('result') || lowerTitle.includes('outcome')) return <TrendingUp size={24} />;
    if (lowerTitle.includes('goal') || lowerTitle.includes('target')) return <Target size={24} />;
    return <ArrowRight size={24} />;
  };

  const schemas = [
    makeBreadcrumb([
      { name: 'Blog & Articles', path: '/blog' },
      { name: pageTitle, path: `/insight/${insight.slug || insight.id}` },
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
                           width="800" height="600" />
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
                           width="800" height="600" />
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
                         width="800" height="600" />
                      </div>
                    )}

                    <div className="article-full-text" itemProp="articleBody">
                      {(() => {
                        const paras = insight.full.split('\n\n');
                        const nodes = [];
                        let i = 0;
                        while (i < paras.length) {
                          const para = paras[i];

                          // FAQ section: triggered by ## Frequently Asked Questions heading
                          // Collects all ### Q + following plain-para answers until --- or next ##
                          if (/^##\s+Frequently Asked Questions/i.test(para.trim())) {
                            i++; // skip the heading itself
                            const faqItems = [];
                            while (i < paras.length) {
                              const p = paras[i];
                              if (p.trim() === '---' || /^##\s+/.test(p.trim())) break;
                              const ls = p.split('\n');
                              const isQ = /^###\s+/.test(ls[0].trim()) && !/^###\s+\d{2}\./.test(ls[0].trim());
                              if (isQ) {
                                const q = ls[0].replace(/^###\s+/, '').trim();
                                const answerParts = ls.slice(1).join(' ').trim() ? [ls.slice(1).join(' ').trim()] : [];
                                i++;
                                // absorb following plain paragraphs as extra answer text
                                while (i < paras.length) {
                                  const next = paras[i];
                                  if (next.trim() === '---' || /^##\s+/.test(next.trim()) || /^###\s+/.test(next.trim())) break;
                                  answerParts.push(next.trim());
                                  i++;
                                }
                                faqItems.push({ q, a: answerParts.join(' ') });
                              } else {
                                i++; // skip unexpected para inside FAQ block
                              }
                            }
                            nodes.push(<ArticleFAQ key={`faq-${i}`} items={faqItems} />);
                            continue;
                          }

                          // Standalone FAQ item outside a section (fallback)
                          const isFaqItem = (p) => {
                            const ls = p.split('\n');
                            return ls.length >= 2 && /^###\s+/.test(ls[0].trim()) && !/^###\s+\d{2}\./.test(ls[0].trim());
                          };
                          if (isFaqItem(para)) {
                            const faqItems = [];
                            while (i < paras.length && isFaqItem(paras[i])) {
                              const ls = paras[i].split('\n');
                              faqItems.push({ q: ls[0].replace(/^###\s+/, '').trim(), a: ls.slice(1).join(' ').trim() });
                              i++;
                            }
                            nodes.push(<ArticleFAQ key={`faq-${i}`} items={faqItems} />);
                            continue;
                          }

                          // --- all other rendering below ---
                          const idx = i;
                          i++;

                          // Inline image
                          const imgMatch = para.match(/^\[IMAGE_(\d+)\]$/);
                          if (imgMatch && insight.inlineImages) {
                            const key = `IMAGE_${imgMatch[1]}`;
                            const src = insight.inlineImages[key] ? getBookArticleImage(insight.inlineImages[key]) : null;
                            if (src) { nodes.push(<figure key={idx} className="article-inline-figure"><img src={src} alt="" className="article-inline-img" loading="lazy"  width="800" height="600" /></figure>); continue; }
                          }

                          if (para.trim() === '---') { nodes.push(<hr key={idx} className="article-divider" />); continue; }

                          const lines = para.split('\n');

                          if (isQuickRefCard(para)) {
                            const headerLine = lines[0];
                            const qrMatch = headerLine.match(/^###\s+(\d{2})\.\s+(.+)$/);
                            const bestForLine = lines.slice(1).find(l => /^\*\*Best For:/.test(l.trim()));
                            const bestForText = bestForLine ? bestForLine.replace(/\*\*/g, '').replace(/^Best For:\s*/, '') : '';
                            const namePart = qrMatch ? qrMatch[2] : headerLine.replace(/^###\s+/, '');
                            nodes.push(
                              <div key={idx} className="quick-ref-card">
                                <span className="trainer-rank">{qrMatch ? qrMatch[1] : ''}</span>
                                <div className="quick-ref-info">
                                  <span className="quick-ref-name">{namePart}</span>
                                  {bestForText && <span className="quick-ref-best">{bestForText}</span>}
                                </div>
                              </div>
                            ); continue;
                          }

                          const trainerMatch = para.match(/^###\s+(\d{2})\.\s+(.+)$/);
                          if (trainerMatch) { nodes.push(<div key={idx} className="trainer-card-heading"><span className="trainer-rank">{trainerMatch[1]}</span><h3 className="trainer-name">{trainerMatch[2]}</h3></div>); continue; }

                          const h3Match = para.match(/^###\s+(.+)$/);
                          if (h3Match) { nodes.push(<h3 key={idx} className="article-h3">{h3Match[1]}</h3>); continue; }

                          const h2Match = para.match(/^##\s+(.+)$/);
                          if (h2Match) { nodes.push(<div key={idx} className="article-section heading-level-2"><div className="section-header"><div className="section-icon">{getIconForSection(h2Match[1])}</div><h2 className="section-title">{h2Match[1]}</h2></div></div>); continue; }

                          const h1Match = para.match(/^#\s+(.+)$/);
                          if (h1Match) { nodes.push(<div key={idx} className="article-section heading-level-2"><div className="section-header"><div className="section-icon">{getIconForSection(h1Match[1])}</div><h2 className="section-title">{h1Match[1]}</h2></div></div>); continue; }

                          if (isLocationLine(para)) { nodes.push(<p key={idx} className="trainer-location">{renderInline(para.trim())}</p>); continue; }
                          if (isRatingLine(para))   { nodes.push(<p key={idx} className="trainer-rating">{para.trim()}</p>); continue; }
                          if (isBestFor(para))      { nodes.push(<p key={idx} className="trainer-best-for">{para.replace(/\*\*/g, '')}</p>); continue; }
                          if (isFocusLine(para) || isNotableFocus(para)) { nodes.push(<p key={idx} className="trainer-focus">{renderInline(para)}</p>); continue; }
                          if (isWebsiteLine(para))  { nodes.push(<p key={idx} className="trainer-website">{renderInline(para)}</p>); continue; }

                          const isList = lines.length > 1 && lines.every(l => {
                            const t = l.trim();
                            return t.startsWith('- ') || t.startsWith('• ') || /^\d+\.\s/.test(t) || /^[a-zA-Z]\.\s/.test(t);
                          });
                          if (isList) { 
                            nodes.push(
                              <ul key={idx} className="article-list">
                                {lines.map((l, li) => {
                                  const content = renderInline(l.replace(/^([-•]|\d+\.|[a-zA-Z]\.)\s*/, ''));
                                  return <li key={li} className="article-list-item">{content}</li>;
                                })}
                              </ul>
                            ); 
                            continue; 
                          }

                          if (lines.length > 1) {
                            nodes.push(
                              <div key={idx} className="mixed-block">
                                {lines.map((l, li) => {
                                  const trimmed = l.trim();
                                  if (!trimmed) return null;
                                  const bTrainer = trimmed.match(/^###\s+(\d{2})\.\s+(.+)$/);
                                  if (bTrainer) return <div key={li} className="trainer-card-heading" style={{marginTop: li===0?0:undefined}}><span className="trainer-rank">{bTrainer[1]}</span><h3 className="trainer-name">{bTrainer[2]}</h3></div>;
                                  const bH3 = trimmed.match(/^###\s+(.+)$/);
                                  if (bH3) return <h3 key={li} className="article-h3" style={{marginTop: li===0?0:undefined}}>{bH3[1]}</h3>;
                                  const bH2 = trimmed.match(/^##\s+(.+)$/);
                                  if (bH2) return <h2 key={li} className="section-title" style={{marginTop: li===0?0:'20px'}}>{bH2[1]}</h2>;
                                  const bH1 = trimmed.match(/^#\s+(.+)$/);
                                  if (bH1) return <h2 key={li} className="section-title" style={{marginTop: li===0?0:'20px'}}>{bH1[1]}</h2>;
                                  if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || /^\d+\.\s/.test(trimmed) || /^[a-zA-Z]\.\s/.test(trimmed)) {
                                    return <div key={li} className="mixed-bullet">{renderInline(trimmed.replace(/^([-•]|\d+\.|[a-zA-Z]\.)\s*/, ''))}</div>;
                                  }
                                  if (/^\*\*[^*]+\*\*/.test(trimmed)) return <p key={li} className="mixed-label">{renderInline(trimmed)}</p>;
                                  return <p key={li} className="article-paragraph" style={{marginBottom:'4px'}}>{renderInline(trimmed)}</p>;
                                })}
                              </div>
                            ); continue;
                          }

                          nodes.push(<p key={idx} className="article-paragraph">{renderInline(para)}</p>);
                        }
                        return nodes;
                      })()}
                    </div>

                    {pdf && (
                      <div className="reader-cta-box">
                        <p>This article includes an interactive PDF companion.</p>
                        <button className="open-reader-btn"
                          onClick={() => navigate(`/insight/${resolvedId}/reader`)}
                          aria-label="Open full-screen PDF reader"
                        >
                          Open Full-Screen Reader <Maximize2 size={18} />
                        </button>
                      </div>
                    )}

                    <div className="article-author-section">
                      <div className="author-card">
                        <h3>About the Author</h3>
                        <p className="author-name">Dr. Arun Divakaran</p>
                        <p className="author-title">AI Enabler & Corporate Trainer</p>
                        <p className="author-bio">With 19+ years of IT leadership and international experience, Dr. Arun Divakaran has transformed over 50,000 professionals through practical AI training and leadership workshops.</p>
                        <div className="author-cta">
                          <Link to="/#contact" className="contact-link">
                            Get in Touch <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
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
