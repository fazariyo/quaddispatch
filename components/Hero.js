import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <Reveal as="p" className="hero-eyebrow">
          24/7 Truck Dispatch — Coast to Coast
        </Reveal>
        <Reveal as="h1" className="h-disp">
          Keep On <em>Trucking</em>
        </Reveal>
        <Reveal as="p">
          Quad Dispatch keeps your wheels turning with top-paying freight, full back-office
          support, and a dedicated dispatcher who answers — day or night.
        </Reveal>
        <Reveal className="hero-btns">
          <Link className="btn btn-solid" href="/about-us">
            Discover More <span className="arr">→</span>
          </Link>
          <Link className="btn btn-light" href="/carrier-setup">
            Get Your Quote
          </Link>
        </Reveal>
      </div>

      {/* animated highway */}
      <div className="road" aria-hidden="true">
        <div className="lane"></div>
        <div className="beam"></div>
        <svg className="rig" viewBox="0 0 420 120">
          {/* trailer */}
          <rect x="10" y="18" width="250" height="62" rx="6" fill="#232c36" />
          <rect x="10" y="18" width="250" height="10" rx="5" fill="#2d3844" />
          <text
            x="135"
            y="58"
            textAnchor="middle"
            style={{ fontFamily: 'var(--font-disp)' }}
            fontWeight="700"
            fontSize="26"
            letterSpacing="3"
            fill="#f4731f"
          >
            QUAD
          </text>
          {/* cab */}
          <path d="M268 80 V30 q0-8 8-8 h44 q7 0 11 6 l24 34 q3 5 3 10 v8 z" fill="#f4731f" />
          <path d="M300 30 h18 q5 0 8 4 l16 23 h-42 z" fill="#0d1116" />
          <rect x="262" y="26" width="8" height="54" rx="3" fill="#d85c0d" />
          {/* chassis */}
          <rect x="10" y="80" width="348" height="8" rx="3" fill="#161c23" />
          {/* wheels */}
          <g fill="#0a0d11" stroke="#39434f" strokeWidth="4">
            <circle cx="60" cy="94" r="15" />
            <circle cx="102" cy="94" r="15" />
            <circle cx="296" cy="94" r="15" />
            <circle cx="338" cy="94" r="15" />
          </g>
          <g fill="#f4731f">
            <circle cx="60" cy="94" r="4" />
            <circle cx="102" cy="94" r="4" />
            <circle cx="296" cy="94" r="4" />
            <circle cx="338" cy="94" r="4" />
          </g>
          {/* headlight */}
          <circle cx="356" cy="72" r="4" fill="#ffd166" />
        </svg>
      </div>
    </section>
  );
}
