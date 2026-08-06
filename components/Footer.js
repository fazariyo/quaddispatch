import Link from 'next/link';
import BrandBadge from '@/components/BrandBadge';
import CurrentYear from '@/components/CurrentYear';
import { FOOTER_LINKS, FOOTER_LEGAL_LINKS, FOOTER_SERVICE_LINKS } from '@/lib/navigation';
import siteConfig from '@/lib/siteConfig';

const SOCIAL_ICONS = {
  facebook: 'M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.7-1.6h1.5V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.7H7.8V14h2.7v8z',
  whatsapp:
    'M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.1 13.7c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.6c-.1.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.2.5.1.7-.1l.8-1c.2-.3.4-.2.7-.1l1.9.9c.3.2.5.2.5.4.1.1.1.7-.2 1.3z',
  instagram:
    'M12 4.3c2.5 0 2.8 0 3.8.1 2.6.1 3.8 1.3 3.9 3.9 0 1 .1 1.3.1 3.7s0 2.8-.1 3.7c-.1 2.6-1.3 3.8-3.9 3.9-1 .1-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.6-.1-3.8-1.3-3.9-3.9 0-1-.1-1.3-.1-3.7s0-2.8.1-3.7C4.4 5.7 5.6 4.5 8.2 4.4c1-.1 1.3-.1 3.8-.1zM12 2C9.4 2 9.1 2 8.1 2.1 4.6 2.2 2.7 4.1 2.6 7.6 2.5 8.6 2.5 8.9 2.5 12s0 3.4.1 4.4c.1 3.5 2 5.4 5.5 5.5 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c3.5-.1 5.4-2 5.5-5.5.1-1 .1-1.3.1-4.4s0-3.4-.1-4.4c-.1-3.5-2-5.4-5.5-5.5C14.9 2 14.6 2 12 2zm0 4.9A5.1 5.1 0 1 0 17.1 12 5.1 5.1 0 0 0 12 6.9zm0 8.4A3.3 3.3 0 1 1 15.3 12 3.3 3.3 0 0 1 12 15.3zm5.3-9.8a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z',
};

export default function Footer() {
  const { brand, phone, email, address, socials, supportNote } = siteConfig;
  const buildYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="ft-grid">
          <div className="ft-col ft-brand">
            <Link className="brand" href="/" aria-label={`${brand.fullName} — home`}>
              <BrandBadge />
              <span>
                <span className="brand-name" style={{ color: '#fff' }}>
                  {brand.nameLead} <span>{brand.nameAccent}</span>
                </span>
              </span>
            </Link>
            <p>{brand.blurb}</p>
            <div className="socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <svg viewBox="0 0 24 24">
                    <path d={SOCIAL_ICONS[social.icon]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="ft-col">
            <h4>Links</h4>
            <ul>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              {FOOTER_LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h4>Services</h4>
            <ul>
              {FOOTER_SERVICE_LINKS.map((label) => (
                <li key={label}>
                  <Link href="/services">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h4>Contact Us</h4>
            <ul className="ft-contact">
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  {address.line1}
                  <br />
                  {address.line2}
                </span>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.7a2 2 0 0 1 1.7 2z" />
                </svg>
                <a href={phone.href}>{phone.display}</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <a href={email.href}>{email.display}</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
                <span>{supportNote}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          © {brand.foundedYear}–<CurrentYear fallback={buildYear} /> <b>{brand.legalName}</b> All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
