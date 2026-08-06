import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function WhoWeAre() {
  return (
    <section className="section who" id="who">
      <div className="wrap who-grid">
        <Reveal>
          <span className="eyebrow">Who We Are</span>
          <h2 className="h-disp">Your Logistics Solution Provider</h2>
          <p>
            Quad Dispatch pairs every carrier with a seasoned dispatcher who handles the details
            with speed and accuracy — and works to earn your trust on every single haul. Our team is
            on call 24/7, so support never stops: nights, weekends, or holidays. Think of us as your
            single point of contact for everything logistics. One call covers it all.
          </p>
          <Link className="btn btn-ghost" href="/services">
            View Services <span className="arr">→</span>
          </Link>
        </Reveal>

        <Reveal className="who-visual">
          {/* dispatch network illustration */}
          <svg viewBox="0 0 400 300" aria-hidden="true">
            <defs>
              <linearGradient id="mapline" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f4731f" />
                <stop offset="1" stopColor="#ffb020" />
              </linearGradient>
            </defs>
            <g stroke="#2a3440" strokeWidth="1.5" fill="none">
              <path d="M20 240 Q120 200 200 150 T380 60" />
              <path d="M40 60 Q140 110 220 190 T380 250" />
              <path d="M20 150 H380" />
            </g>
            <g stroke="url(#mapline)" strokeWidth="3" fill="none" strokeDasharray="8 8">
              <path d="M50 230 Q160 170 240 130 T360 80" />
            </g>
            <g fill="#f4731f">
              <circle cx="50" cy="230" r="8" />
              <circle cx="240" cy="130" r="8" />
              <circle cx="360" cy="80" r="8" />
            </g>
            <g fill="none" stroke="#ffb020" strokeWidth="2">
              <circle cx="50" cy="230" r="15" />
              <circle cx="360" cy="80" r="15" />
            </g>
            <g
              fill="#aab5c0"
              style={{ fontFamily: 'var(--font-body)' }}
              fontSize="11"
              letterSpacing="1"
            >
              <text x="66" y="252">PICKUP</text>
              <text x="256" y="126">EN ROUTE</text>
              <text x="300" y="112">DELIVERY</text>
            </g>
          </svg>
          <div className="who-chip">
            7+ Years<small>of dispatch experience</small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
