import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import Reveal from '@/components/Reveal';
import GetStartedSteps from '@/components/GetStartedSteps';
import StatsBand from '@/components/StatsBand';
import { CheckIcon } from '@/components/Icons';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'About Us',
  description:
    'Quad Dispatchers is an independent truck dispatch service for owner-operators and small fleets — seven years of lanes, paperwork and 24/7 support behind every load.',
  path: '/about-us',
});

const PRINCIPLES = [
  'The driver decides — no forced dispatch, ever',
  'Every rate confirmation read before it reaches you',
  'One dispatcher who knows your truck, not a call queue',
  'Paperwork off your seat and into our office',
  'Plain percentages, no setup or hidden monthly fees',
];

export default function AboutUsPage() {
  return (
    <main>
      <PageBanner
        eyebrow="About Us"
        title="Built By People Who Know The Road"
        subtitle="We are a dispatch office, not a broker. Our only job is keeping your truck loaded, legal and paid."
      />

      {/* ---- Mission ---- */}
      <section className="section on-paper">
        <div className="wrap split">
          <Reveal className="split-copy">
            <span className="eyebrow">Our Mission</span>
            <h2 className="h-disp">Take The Desk Work Off The Driver</h2>
            <p>
              Most owner-operators lose a full day a week to load boards, broker calls, rate
              negotiation and invoicing. That is a day you are not driving, not resting, and not
              getting paid for. Our mission is simple: hand that day back.
            </p>
            <p>
              We put a seasoned dispatcher between you and the freight market. They learn your
              truck, your lanes and your home time, then work the phones so you can work the wheel.
              You approve every load. We handle everything around it.
            </p>
          </Reveal>

          <Reveal className="board">
            <div className="board-head">
              <b>What We Stand For</b>
              <span className="dot">Always</span>
            </div>
            <ul className="check">
              {PRINCIPLES.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---- Story ---- */}
      <section className="section on-ink">
        <div className="wrap split flip">
          <Reveal className="split-copy">
            <span className="eyebrow">Our Story</span>
            <h2 className="h-disp">Seven Years Of Lanes And Late Nights</h2>
            <p>
              Quad Dispatchers started with one dispatcher, one laptop and a handful of
              owner-operators who were tired of being treated like a truck number. Word travelled
              the way it does in this business — one driver told another.
            </p>
            <p>
              Since then we have booked thousands of loads across every major trailer type, from
              48 ft flatbeds running steel to reefers hauling produce out of the valley. The desk
              got bigger. The promise did not change: pick up the phone, know the driver&apos;s
              name, get the load covered.
            </p>
            <p>
              Today we run a 24/7 desk so a breakdown at 2 AM gets a human, not a voicemail. Nights,
              weekends and holidays are when carriers need dispatch most — so that is when we are
              there.
            </p>
          </Reveal>

          <Reveal className="figure-panel">
            <span className="tag">Since 2021</span>
            <span className="fig-title">A Dispatch Desk That Answers</span>
            <span className="fig-sub">
              Every carrier gets a named dispatcher, a direct line, and a back-office that files the
              paperwork before the wheels stop turning.
            </span>
            <div className="fig-stats">
              <div>
                <b>7+</b>
                <small>Years dispatching</small>
              </div>
              <div>
                <b>9</b>
                <small>Trailer types</small>
              </div>
              <div>
                <b>24/7</b>
                <small>Desk coverage</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <GetStartedSteps />
      <StatsBand />

      <section className="section about">
        <Reveal className="wrap">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Work With Us
          </span>
          <h2 className="h-disp">Ready To Put Your Truck To Work?</h2>
          <p>
            Send us your authority, W-9 and insurance certificate and a dispatcher will be matching
            loads to your lanes within a business day.
          </p>
          <Link className="btn btn-solid" href="/carrier-setup">
            Start Carrier Setup <span className="arr">→</span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
