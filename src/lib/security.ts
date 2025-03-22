import DOMPurify from 'dompurify';
import xss from 'xss';

/**
 * Sanitiza el HTML para prevenir ataques XSS
 */
export const sanitizeHTML = (dirty: string): string => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
  });
};

/**
 * Sanitiza texto plano para prevenir ataques XSS
 */
export const sanitizeText = (text: string): string => {
  return xss(text);
};

/**
 * Sanitiza objetos JSON
 */
export const sanitizeJSON = <T extends object>(obj: T): T => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => {
      if (typeof value === 'string') {
        return sanitizeText(value);
      }
      return value;
    })
  );
};

/**
 * Sanitiza parámetros de URL
 */
export const sanitizeURLParams = (params: URLSearchParams): URLSearchParams => {
  const sanitizedParams = new URLSearchParams();
  params.forEach((value, key) => {
    sanitizedParams.append(key, sanitizeText(value));
  });
  return sanitizedParams;
}; 