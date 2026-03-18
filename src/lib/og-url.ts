/**
 * OG Image URL Builder
 *
 * Generates the correct OG image URL for blog posts and service pages.
 * Always uses auto-generated images — never the raw Sanity featured image.
 */

const SITE_URL = 'https://atozbusiness.ae';

interface BlogOgParams {
  title: string;
  category?: string;
  excerpt?: string;
  authorName?: string;
  authorPhoto?: string; // full URL from Sanity CDN
}

interface ServiceOgParams {
  title: string;
  category?: string;
  excerpt?: string;
}

/**
 * Build OG image URL for a blog post.
 * Includes author name and photo in the generated image.
 */
export function buildBlogOgUrl(params: BlogOgParams): string {
  const url = new URL('/api/og', SITE_URL);

  url.searchParams.set('type', 'blog');
  url.searchParams.set('title', params.title || '');

  if (params.category) url.searchParams.set('category', params.category);
  if (params.excerpt) url.searchParams.set('excerpt', params.excerpt);
  if (params.authorName) url.searchParams.set('author', params.authorName);
  if (params.authorPhoto) url.searchParams.set('authorPhoto', params.authorPhoto);

  return url.toString();
}

/**
 * Build OG image URL for a service page.
 */
export function buildServiceOgUrl(params: ServiceOgParams): string {
  const url = new URL('/api/og', SITE_URL);

  url.searchParams.set('type', 'service');
  url.searchParams.set('title', params.title || '');

  if (params.category) url.searchParams.set('category', params.category);
  if (params.excerpt) url.searchParams.set('excerpt', params.excerpt);

  return url.toString();
}
