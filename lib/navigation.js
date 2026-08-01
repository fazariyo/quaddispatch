/**
 * Single source of truth for site navigation.
 * Used by both the header nav and the footer "Links" column.
 */
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/our-connections', label: 'Our Connections' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/carrier-setup', label: 'Carrier Setup' },
  { href: '/contact-us', label: 'Contact Us' },
];

export const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about-us', label: 'About Us' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact-us', label: 'Contact' },
];

export const FOOTER_LEGAL_LINKS = [
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

/* All point at /services — the services page covers each of these in detail. */
export const FOOTER_SERVICE_LINKS = [
  'Finding Loads',
  'Assigning Loads',
  'Billing, Paperwork & Collection',
  'Factoring & Invoicing',
  'Quick Pay Assistance',
  '24/7 Dispatch',
];

export default NAV_LINKS;
