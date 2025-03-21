import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
}

const defaultDescription = "Renzo Avila's professional portfolio and profile, including experience, skills and projects.";
const defaultOgImage = "/images/og-image.jpg";

export default function SEO({
  title = "Renzo Avila - Professional Profile",
  description = defaultDescription,
  canonical = "",
  ogImage = defaultOgImage,
  ogType = "website",
  twitterCard = "summary_large_image"
}: SEOProps) {
  const siteUrl = window.location.origin;
  const fullTitle = title.includes("Renzo Avila") ? title : `${title} | Renzo Avila`;
  
  return (
    <Helmet>
      {/* Basic tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={`${siteUrl}${ogImage}`} />}
      <meta property="og:site_name" content="Renzo Avila" />
      <meta property="og:url" content={`${siteUrl}${canonical || window.location.pathname}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />}

      {/* Site verification (add your own IDs as needed) */}
      {/* <meta name="google-site-verification" content="your-verification-id" /> */}
    </Helmet>
  );
} 