import siteConfig from '@/lib/siteConfig';

/** Generates /robots.txt and points crawlers at the sitemap. */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // The form endpoints have nothing to index.
        disallow: ['/api/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
