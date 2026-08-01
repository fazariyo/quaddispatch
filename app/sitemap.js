import siteConfig from '@/lib/siteConfig';

/**
 * Generates /sitemap.xml. Add a route here whenever you add a page.
 * lastModified uses the build time, which is what a static export wants.
 */
const ROUTES = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/carrier-setup', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/about-us', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/our-connections', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact-us', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/terms-of-service', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
];

// output: 'export' requires metadata routes to declare themselves static.
export const dynamic = 'force-static';

// next.config.mjs sets trailingSlash, so the canonical form of every URL ends
// in a slash — the sitemap has to agree or crawlers see two URLs per page.
const absolute = (path) => `${siteConfig.url}${path === '/' ? '/' : `${path}/`}`;

export default function sitemap() {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: absolute(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
