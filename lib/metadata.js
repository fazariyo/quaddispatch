import siteConfig from '@/lib/siteConfig';

/**
 * Builds a page's Metadata object with matching Open Graph + Twitter tags and
 * a canonical URL, so every page stays consistent without repeating itself.
 *
 *   export const metadata = pageMetadata({
 *     title: 'Pricing',
 *     description: '…',
 *     path: '/pricing',
 *   });
 *
 * `title` is passed through the root layout's "%s | Quad Dispatch"
 * template; the OG/Twitter titles get the fully-composed version, because
 * social scrapers do not apply the template themselves.
 */
export function pageMetadata({ title, description, path = '/' }) {
  const composedTitle = title
    ? `${title} | ${siteConfig.brand.fullName}`
    : siteConfig.defaultTitle;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: composedTitle,
      description,
      url: path,
      siteName: siteConfig.brand.fullName,
      type: 'website',
      locale: 'en_US',
      // og:image / twitter:image are supplied by app/opengraph-image.png and
      // app/twitter-image.png, which cascade to every route. Setting them here
      // as well would emit the tags twice.
    },
    twitter: {
      card: 'summary_large_image',
      title: composedTitle,
      description,
    },
  };
}

export default pageMetadata;
