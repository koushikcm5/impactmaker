import { Link } from 'react-router-dom';
import Navbar from '../sections/Navbar';
import Insights from '../sections/Insights';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';
import SEOHead from '../components/SEOHead';
import { siteData } from '../data/siteData';
import { PAGE_SEO, SITE_URL, SITE_NAME, FOUNDER_NAME, makeBreadcrumb, BLOG_CATEGORIES } from '../utils/seoConfig';

const blogSchemas = [
  makeBreadcrumb([{ name: 'Blog & Articles', path: '/blog' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    name: `AI Training Blog & Expert Insights — ${FOUNDER_NAME}`,
    description: `Expert articles on Generative AI, Agentic AI, Corporate Leadership, Design Thinking, and Digital Transformation by ${FOUNDER_NAME} — India's top AI trainer.`,
    url: `${SITE_URL}/blog`,
    author: {
      '@type': 'Person',
      name: FOUNDER_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.png` },
    },
    blogPost: siteData.blog.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.seoTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `${SITE_URL}/insight/${post.id}`,
      datePublished: post.publishedDate || '2024-01-01',
      dateModified: post.modifiedDate || '2025-01-01',
      keywords: post.tags ? post.tags.join(', ') : post.focusKeyword,
      articleSection: post.category,
      author: { '@type': 'Person', name: FOUNDER_NAME },
    })),
    inLanguage: 'en-IN',
    audience: {
      '@type': 'Audience',
      audienceType: 'Corporate Professionals, HR Teams, IT Leaders, Business Executives, Educators',
    },
  }
];

const BlogPage = () => (
  <>
    <SEOHead
      title={PAGE_SEO.blog.title}
      description={PAGE_SEO.blog.description}
      keywords={PAGE_SEO.blog.keywords}
      canonical={PAGE_SEO.blog.canonical}
      ogType="blog"
      schemas={blogSchemas}
    />

    <Navbar />

    {/* Breadcrumb — visible + semantic */}
    <div style={{ paddingTop: '90px', background: '#f9fbff', borderBottom: '1px solid #e5eaf3' }}>
      <div className="container">
        <nav aria-label="Breadcrumb" style={{ padding: '0.9rem 0', fontSize: '0.85rem', color: '#666' }}>
          <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', margin: 0, padding: 0 }}
            itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" itemProp="item" style={{ color: '#1659a7', textDecoration: 'none' }}>
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true">›</li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Blog &amp; Articles</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div>
      <Insights data={siteData.blog} />
      <FAQ />
    </div>

    <Footer contact={siteData.contact} />
  </>
);

export default BlogPage;
