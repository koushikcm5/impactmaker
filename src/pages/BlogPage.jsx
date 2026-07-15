import { Link } from 'react-router-dom';
import Navbar from '../sections/Navbar';
import Insights from '../sections/Insights';
import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumb from '../components/Breadcrumb';
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
      url: `${SITE_URL}/insight/${post.slug || post.id}`,
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

    {/* Reusable visual Breadcrumb */}
    <Breadcrumb 
      items={[{ name: 'Blog & Articles', path: '/blog' }]} 
      style={{ paddingTop: '110px' }} 
    />

    <div>
      <Insights data={siteData.blog} />
      <FAQ />
    </div>

    <Footer contact={siteData.contact} />
  </>
);

export default BlogPage;
