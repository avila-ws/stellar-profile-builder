import { Helmet } from 'react-helmet-async';
import { sanitizeText } from '@/lib/security';

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

const sanitizeUrl = (url: string): string => {
  try {
    const sanitizedUrl = new URL(url);
    // Solo permitir protocolos seguros
    if (!['http:', 'https:'].includes(sanitizedUrl.protocol)) {
      return '';
    }
    return sanitizedUrl.toString();
  } catch {
    // Si no es una URL válida, intentar como ruta relativa
    return url.startsWith('/') ? url : `/${url}`;
  }
};

export default function SEO({
  title = "Renzo Avila - Professional Profile",
  description = defaultDescription,
  canonical = "",
  ogImage = defaultOgImage,
  ogType = "website",
  twitterCard = "summary_large_image"
}: SEOProps) {
  const siteUrl = window.location.origin;
  
  // Sanitizar todos los inputs
  const sanitizedTitle = sanitizeText(title);
  const sanitizedDescription = sanitizeText(description);
  const sanitizedCanonical = sanitizeUrl(canonical);
  const sanitizedOgImage = sanitizeUrl(ogImage);
  const sanitizedOgType = ogType === 'article' ? 'article' : 'website';
  const sanitizedTwitterCard = twitterCard === 'summary' ? 'summary' : 'summary_large_image';
  
  const fullTitle = sanitizedTitle.includes("Renzo Avila") 
    ? sanitizedTitle 
    : `${sanitizedTitle} | Renzo Avila`;
  
  return (
    <Helmet>
      {/* Basic tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={sanitizedDescription} />
      {sanitizedCanonical && <link rel="canonical" href={`${siteUrl}${sanitizedCanonical}`} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={sanitizedDescription} />
      <meta property="og:type" content={sanitizedOgType} />
      {sanitizedOgImage && <meta property="og:image" content={`${siteUrl}${sanitizedOgImage}`} />}
      <meta property="og:site_name" content="Renzo Avila" />
      <meta property="og:url" content={`${siteUrl}${sanitizedCanonical || window.location.pathname}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={sanitizedTwitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={sanitizedDescription} />
      {sanitizedOgImage && <meta name="twitter:image" content={`${siteUrl}${sanitizedOgImage}`} />}

      {/* Site verification (add your own IDs as needed) */}
      {/* <meta name="google-site-verification" content="your-verification-id" /> */}
    </Helmet>
  );
} 