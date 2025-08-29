import DOMPurify from 'isomorphic-dompurify';

export function sanitizeSearchQuery(query: string): string {
  if (!query || typeof query !== 'string') {
    return '';
  }

  const sanitized = DOMPurify.sanitize(query, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });

  return sanitized
    .replace(/[^\w\s\-']/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 100);
}
