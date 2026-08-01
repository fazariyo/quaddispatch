/**
 * Single source of truth for contact + brand details.
 * Edit here and the topbar, header CTA, about strip and footer all follow.
 */
export const siteConfig = {
  /**
   * Canonical origin, no trailing slash. Used for metadataBase, canonical
   * URLs, Open Graph tags, robots.txt and sitemap.xml.
   * CHANGE THIS to your real domain before you deploy.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://quaddispatchers.com',

  /** Sitewide <title> when a page does not set one, and the OG fallback. */
  defaultTitle: 'Quad Dispatchers — 24/7 Truck Dispatch Services',
  defaultDescription:
    'Quad Dispatchers keeps your wheels turning with top-paying freight, full back-office support, and a dedicated dispatcher on call 24/7.',

  brand: {
    // "Quad" renders white, "Dispatchers" renders in the orange accent.
    nameLead: 'Quad',
    nameAccent: 'Dispatchers',
    fullName: 'Quad Dispatchers',
    tagline: 'TRUCK DISPATCH SERVICES',
    legalName: 'QUAD DISPATCHERS LLC.',
    foundedYear: 2021,
    blurb:
      'Independent truck dispatch for owner-operators and small fleets. Better loads, less paperwork, real support.',
  },

  // Change these four and every phone/email/address on the page updates.
  phone: {
    display: '+1 (000) 000-0000',
    href: 'tel:+10000000000',
  },
  email: {
    display: 'info@quaddispatchers.com',
    href: 'mailto:info@quaddispatchers.com',
  },
  address: {
    line1: '123 Placeholder Dr,',
    line2: 'Your City, TX 00000',
  },

  supportBadge: '24/7 Dedicated Support',
  supportNote: '24/7 dedicated support — call any time.',

  // Shown on /contact-us
  hours: [
    { days: 'Dispatch desk', time: '24 / 7 / 365' },
    { days: 'Monday – Friday', time: '7:00 AM – 9:00 PM CT' },
    { days: 'Saturday', time: '8:00 AM – 6:00 PM CT' },
    { days: 'Sunday', time: 'On-call dispatch only' },
    { days: 'Billing & paperwork', time: 'Mon – Fri, 9:00 AM – 5:00 PM CT' },
  ],

  // `icon` maps to the SVG glyphs in components/Footer.js
  socials: [
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'WhatsApp', href: '#', icon: 'whatsapp' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
  ],
};

export default siteConfig;
