'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandBadge from '@/components/BrandBadge';
import { NAV_LINKS } from '@/lib/navigation';
import siteConfig from '@/lib/siteConfig';

export default function Header() {
  const { brand, phone } = siteConfig;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <div className="wrap">
        <Link className="brand" href="/" aria-label={`${brand.fullName} — home`}>
          <BrandBadge />
          <span>
            <span className="brand-name">
              {brand.nameLead} <span>{brand.nameAccent}</span>
            </span>
            <span className="brand-sub">{brand.tagline}</span>
          </span>
        </Link>

        <nav className={`nav${menuOpen ? ' open' : ''}`} id="nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? 'active' : undefined}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a className="btn btn-solid hdr-cta" href={phone.href}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.7a2 2 0 0 1 1.7 2z" />
          </svg>
          {phone.display}
        </a>

        <button
          className={`burger${menuOpen ? ' open' : ''}`}
          id="burger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-controls="nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
