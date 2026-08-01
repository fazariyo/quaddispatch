import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import Reveal from '@/components/Reveal';
import { CheckIcon } from '@/components/Icons';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Our Connections',
  description:
    'The load boards, broker networks and direct shipper relationships Quad Dispatchers works every day to keep carriers loaded on high-paying lanes.',
  path: '/our-connections',
});

/*
 * Deliberately generic descriptions — no third-party company names, logos or
 * marks. Swap in specifics only for partners you are authorised to name.
 */
const CONNECTIONS = [
  {
    title: 'National Load Boards',
    body: 'Paid subscriptions to the major national boards, swept every morning and monitored through the day. Volume gives us the pricing history to know what a lane should actually pay.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
        <path d="M8 13h8" />
        <path d="M9 21h6" />
      </svg>
    ),
  },
  {
    title: 'Regional Broker Networks',
    body: 'Working relationships with regional brokerages across the Southeast, Midwest, Texas triangle and West Coast corridors — the desks that cover freight before it ever hits a board.',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 7.5 10 10M17 7.5 14 10M17 16.5 14 14" />
      </svg>
    ),
  },
  {
    title: 'Direct Shipper Relationships',
    body: 'Manufacturers, distributors and producers who ship consistent volume on repeatable lanes. Direct freight cuts the broker margin and keeps your rate per mile up.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21V8l9-5 9 5v13" />
        <path d="M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    title: 'Digital Freight Platforms',
    body: 'App-based and API-driven freight marketplaces where loads book instantly. We watch them alongside the traditional boards so nothing good gets away while we are on the phone.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="6" y="2" width="12" height="20" rx="2.5" />
        <path d="M10.5 18h3" />
        <path d="M9.5 8.5 12 11l4-4" />
      </svg>
    ),
  },
  {
    title: '3PL & Freight Management Partners',
    body: 'Third-party logistics providers running dedicated programs and trailer pools. These are where drop-and-hook and power-only work comes from when you want steady, predictable weeks.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="7" width="13" height="10" rx="1.5" />
        <path d="M15 11h4l3 3v3h-7z" />
        <circle cx="6.5" cy="19" r="1.8" />
        <circle cx="18" cy="19" r="1.8" />
      </svg>
    ),
  },
  {
    title: 'Factoring & Quick Pay Partners',
    body: 'Factoring companies and broker quick-pay programs we submit to daily. Clean packets the first time mean funding lands faster and nothing bounces back for a missing document.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2.5" y="6" width="19" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
  },
  {
    title: 'Specialised & Project Freight Desks',
    body: 'Contacts for over-dimensional, permitted and project cargo — the loads that need a step deck, RGN or Conestoga and a dispatcher who knows the permit rules before booking.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M2 17h9V9h6l3 4v4" />
        <path d="M11 9V6h4" />
        <circle cx="6" cy="19.5" r="1.8" />
        <circle cx="17" cy="19.5" r="1.8" />
      </svg>
    ),
  },
  {
    title: 'Regional Produce & Seasonal Desks',
    body: 'Seasonal produce, agricultural and beverage shippers whose volume swings through the year. Knowing when a region turns on is how reefers stay loaded in the busy weeks.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 21c-4 0-7-3-7-7 0-4 3-8 7-11 4 3 7 7 7 11 0 4-3 7-7 7z" />
        <path d="M12 21v-8" />
      </svg>
    ),
  },
  {
    title: 'Roadside & Repair Network',
    body: 'Shops, mobile mechanics and towing contacts along the major corridors. When a truck goes down at 2 AM, the response desk is calling people we already have a number for.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14.5 5.5a4 4 0 0 0 5 5L21 9v6a2 2 0 0 1-2 2h-6l1.5-1.5a4 4 0 0 0-5-5L3 17V9a2 2 0 0 1 2-2h6z" />
      </svg>
    ),
  },
];

const HOW = [
  'Every load cross-checked against lane rate history before we bring it to you',
  'Broker credit and payment history reviewed before we book',
  'Multiple sources worked in parallel so one dry board does not stall your week',
  'Relationships maintained year-round, not only when freight is tight',
];

export default function OurConnectionsPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Our Connections"
        title="Where Your Next Load Comes From"
        subtitle="Boards, brokers, direct shippers and partner desks — worked in parallel every day so your truck is never waiting on a single source."
      />

      <section className="section spec">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow">The Network</span>
            <h2 className="h-disp">Nine Places We Go Looking</h2>
            <p>
              Descriptions below are generic on purpose — we name specific partners only once you
              are set up and we are quoting your lanes.
            </p>
          </Reveal>

          <div className="conn-grid">
            {CONNECTIONS.map((item) => (
              <Reveal as="article" className="svc-card" key={item.title}>
                <div className="svc-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-paper">
        <div className="wrap split">
          <Reveal className="split-copy">
            <span className="eyebrow">How We Work Them</span>
            <h2 className="h-disp">Coverage Is A Habit, Not A Search</h2>
            <p>
              A load board is only as good as the person reading it. Our dispatchers know which
              desks pay on time, which lanes are soft this month, and which brokers will move on
              rate if you ask properly.
            </p>
            <p>
              That knowledge is why two carriers can run the same truck on the same lane and end the
              month thousands apart. We are paid a percentage, so the incentive is simple: your
              gross going up is our gross going up.
            </p>
            <ul className="check">
              {HOW.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="figure-panel">
            <span className="tag">Sample Week</span>
            <span className="fig-title">Sources Worked In Parallel</span>
            <span className="fig-sub">
              A typical week touches every category above — because the best-paying load rarely
              comes from the same place twice.
            </span>
            <div className="fig-stats">
              <div>
                <b>9</b>
                <small>Source categories</small>
              </div>
              <div>
                <b>Daily</b>
                <small>Board sweeps</small>
              </div>
              <div>
                <b>24/7</b>
                <small>Desk coverage</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about">
        <Reveal className="wrap">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Put Us To Work
          </span>
          <h2 className="h-disp">Let Us Point This Network At Your Truck</h2>
          <p>
            Tell us what you run and where you like to run it. We will show you what the lanes are
            paying this week.
          </p>
          <Link className="btn btn-solid" href="/carrier-setup">
            Start Carrier Setup <span className="arr">→</span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
