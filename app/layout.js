import { Barlow_Condensed, Inter } from 'next/font/google';
import Topbar from '@/components/Topbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import siteConfig from '@/lib/siteConfig';
import './globals.css';

/*
 * adjustFontFallback is off on purpose. next/font otherwise injects a
 * metric-adjusted local fallback face ("Barlow Condensed Fallback") into the
 * family chain, and glyphs the real font lacks — the "→" in the buttons, the
 * "★" in the testimonials — get picked up by that size-adjusted face instead
 * of plain Arial, which shifts their width a few px versus the original page.
 */
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-barlow-condensed',
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false,
});

const SHARE_IMAGE_ALT = `${siteConfig.brand.fullName} — 24/7 truck dispatch services`;

export const metadata = {
  // Makes every relative URL below (canonical, OG, sitemap) absolute.
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.brand.fullName}`,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.brand.fullName,
  authors: [{ name: siteConfig.brand.legalName }],
  creator: siteConfig.brand.legalName,
  publisher: siteConfig.brand.legalName,
  keywords: [
    'truck dispatch',
    'truck dispatch services',
    'owner operator dispatch',
    'freight dispatch',
    'dry van dispatch',
    'reefer dispatch',
    'flatbed dispatch',
    'hotshot dispatch',
    'load booking',
    '24/7 dispatch',
  ],
  category: 'Transportation & Logistics',
  alternates: { canonical: '/' },
  formatDetection: { telephone: true, address: true, email: true },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: siteConfig.brand.fullName,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    /*
     * Declared rather than left to the file convention, even though the PNGs
     * sit in app/. The convention prepends basePath to a URL that metadataBase
     * already ends with, so og:image came out as /quaddispatch/quaddispatch/…
     * Naming the path here resolves it against metadataBase exactly once.
     * Regenerate the card itself with `npm run share-card`.
     */
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, type: 'image/png', alt: SHARE_IMAGE_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [{ url: '/twitter-image.png', width: 1200, height: 630, type: 'image/png', alt: SHARE_IMAGE_ALT }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d1116',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      {/* id="home" keeps the in-page anchors on the landing page working */}
      <body id="home">
        <Topbar />
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
