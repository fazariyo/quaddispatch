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
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://quaddispatch.com',

  /** Sitewide <title> when a page does not set one, and the OG fallback. */
  defaultTitle: 'Quad Dispatch — 24/7 Truck Dispatch Services',
  defaultDescription:
    'Quad Dispatch keeps your wheels turning with top-paying freight, full back-office support, and a dedicated dispatcher on call 24/7.',

  brand: {
    // "Quad" renders white, "Dispatch" renders in the orange accent.
    nameLead: 'Quad',
    nameAccent: 'Dispatch',
    fullName: 'Quad Dispatch',
    tagline: 'TRUCK DISPATCH SERVICES',
    legalName: 'QUAD DISPATCH LLC.',
    foundedYear: 2021,
    blurb:
      'Independent truck dispatch for owner-operators and small fleets. Better loads, less paperwork, real support.',
  },

  // Change these four and every phone/email/address on the page updates.
  phone: {
    display: '+1 (307) 427-2883',
    href: 'tel:+13074272883',
  },
  email: {
    display: 'info@quaddispatch.com',
    href: 'mailto:info@quaddispatch.com',
  },
  address: {
    line1: '30 N Gould St Ste R,',
    line2: 'Sheridan, WY 82801, USA',
  },

  supportBadge: '24/7 Dedicated Support',
  supportNote: '24/7 dedicated support — call any time.',

  // Shown on /contact-us
  hours: [
    { days: 'Dispatch desk', time: '24 / 7 / 365' },
    { days: 'Monday – Friday', time: '7:00 AM – 9:00 PM MT' },
    { days: 'Saturday', time: '8:00 AM – 6:00 PM MT' },
    { days: 'Sunday', time: 'On-call dispatch only' },
    { days: 'Billing & paperwork', time: 'Mon – Fri, 9:00 AM – 5:00 PM MT' },
  ],

  // `icon` maps to the SVG glyphs in components/Footer.js
  socials: [
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'WhatsApp', href: '#', icon: 'whatsapp' },
    { label: 'Instagram', href: '#', icon: 'instagram' },
  ],
};

export default siteConfig;
