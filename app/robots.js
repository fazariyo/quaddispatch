import siteConfig from '@/lib/siteConfig';

// output: 'export' requires metadata routes to declare themselves static.
export const dynamic = 'force-static';

/** Generates /robots.txt and points crawlers at the sitemap. */
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
