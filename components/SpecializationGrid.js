import Link from 'next/link';
import Reveal from '@/components/Reveal';

const SPECS = [
  {
    title: 'Flatbed',
    note: '48 & 53 ft trailers only',
    icon: (
      <svg viewBox="0 0 74 38">
        <path d="M4 24h44" />
        <path d="M48 24V12h10l8 8v4" />
        <circle cx="14" cy="29" r="4.5" />
        <circle cx="26" cy="29" r="4.5" />
        <circle cx="56" cy="29" r="4.5" />
      </svg>
    ),
  },
  {
    title: 'Power Only',
    note: 'Load-out, hook & drop, tow-away',
    icon: (
      <svg viewBox="0 0 74 38">
        <path d="M22 24V10h12l10 10v4H22z" />
        <path d="M22 24h-8" />
        <circle cx="28" cy="29" r="4.5" />
        <circle cx="40" cy="29" r="4.5" />
      </svg>
    ),
  },
  {
    title: 'Reefer',
    note: '48 & 53 ft trailers only',
    icon: (
      <svg viewBox="0 0 74 38">
        <rect x="4" y="8" width="44" height="16" />
        <path d="M48 24V12h10l8 8v4" />
        <path d="M26 12v8M22 14l8 4M30 14l-8 4" />
        <circle cx="14" cy="29" r="4.5" />
        <circle cx="56" cy="29" r="4.5" />
      </svg>
    ),
  },
  {
    title: 'Dry Van',
    note: '48 & 53 ft trailers only',
    icon: (
      <svg viewBox="0 0 74 38">
        <rect x="4" y="8" width="44" height="16" />
        <path d="M48 24V12h10l8 8v4" />
        <circle cx="14" cy="29" r="4.5" />
        <circle cx="26" cy="29" r="4.5" />
        <circle cx="56" cy="29" r="4.5" />
      </svg>
    ),
  },
  {
    title: 'Hotshot',
    note: 'Any size, any type',
    icon: (
      <svg viewBox="0 0 74 38">
        <path d="M4 22h30" />
        <path d="M34 22v-8h10l8 6v2" />
        <path d="M34 14l-6-4" />
        <circle cx="12" cy="27" r="4" />
        <circle cx="22" cy="27" r="4" />
        <circle cx="44" cy="27" r="4" />
      </svg>
    ),
  },
  {
    title: 'Box Truck',
    note: '24, 26 & 28 ft',
    icon: (
      <svg viewBox="0 0 74 38">
        <rect x="10" y="8" width="34" height="16" />
        <path d="M44 24V13h9l7 7v4" />
        <circle cx="20" cy="29" r="4.5" />
        <circle cx="52" cy="29" r="4.5" />
      </svg>
    ),
  },
  {
    title: 'Step Deck',
    note: '48 & 53 ft trailers only',
    icon: (
      <svg viewBox="0 0 74 38">
        <path d="M4 24h18v-8h26" />
        <path d="M48 16V12h10l8 8v4" />
        <circle cx="12" cy="29" r="4.5" />
        <circle cx="34" cy="21" r="4.5" />
        <circle cx="56" cy="29" r="4.5" />
      </svg>
    ),
  },
  {
    title: 'RGN Trailer',
    note: 'Any size, any type',
    icon: (
      <svg viewBox="0 0 74 38">
        <path d="M4 18h8l6 6h16l6-6h8" />
        <path d="M48 18V12h10l8 8v4" />
        <circle cx="10" cy="24" r="4" />
        <circle cx="56" cy="29" r="4.5" />
      </svg>
    ),
  },
  {
    title: 'Conestoga',
    note: '48 & 53 ft trailers only',
    icon: (
      <svg viewBox="0 0 74 38">
        <path d="M4 24h44" />
        <path d="M6 24 Q6 8 26 8 T46 24" />
        <path d="M48 24V12h10l8 8v4" />
        <circle cx="14" cy="29" r="4.5" />
        <circle cx="56" cy="29" r="4.5" />
      </svg>
    ),
  },
];

export default function SpecializationGrid() {
  return (
    <section className="section spec" id="spec">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">Our Specialization</span>
          <h2 className="h-disp">Every Major Truck &amp; Trailer Type</h2>
          <p>Whatever you run, we know where it earns the most.</p>
        </Reveal>

        <div className="spec-grid">
          {SPECS.map((spec) => (
            <Reveal as="article" className="spec-card" key={spec.title}>
              {spec.icon}
              <div>
                <h3>{spec.title}</h3>
                <small>{spec.note}</small>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="center">
          <Link className="btn btn-ghost" href="/services">
            Discover More <span className="arr">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
