import { Helmet } from 'react-helmet-async';
import { SITE_NAME, SITE_URL, OG_IMAGE, DEFAULT_SEO } from '../utils/seoConfig';

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  schemas = [],
  noindex = false,
  lang = 'en-IN',
}) => {
  const resolvedTitle = title || DEFAULT_SEO.title;
  const resolvedDesc = description || DEFAULT_SEO.description;
  const resolvedImage = ogImage || OG_IMAGE;
  const resolvedCanonical = canonical || SITE_URL;

  return (
    <Helmet>
      {/* Core */}
      <html lang={lang} />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Dr. Arun Divakaran" />
      <link rel="canonical" href={resolvedCanonical} />
      {noindex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      }

      {/* Open Graph */}
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} — Dr. Arun Divakaran`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDesc} />
      <meta name="twitter:image" content={resolvedImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — Dr. Arun Divakaran`} />

      {/* Geo targeting */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore, Tamil Nadu, India" />
      <meta name="geo.position" content="11.0168;76.9558" />
      <meta name="ICBM" content="11.0168, 76.9558" />

      {/* Language & locale targeting */}
      <meta httpEquiv="content-language" content="en-IN" />
      <link rel="alternate" hrefLang="en-IN" href={resolvedCanonical} />
      <link rel="alternate" hrefLang="en" href={resolvedCanonical} />

      {/* JSON-LD Schemas */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
