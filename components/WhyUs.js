import Link from 'next/link';
import Reveal from '@/components/Reveal';

const LANES = [
  { route: 'Dallas, TX → Atlanta, GA', detail: 'Dry Van · 781 mi', rate: '$2,340', rpm: '$3.00 /mi' },
  { route: 'Chicago, IL → Denver, CO', detail: 'Reefer · 1,003 mi', rate: '$2,910', rpm: '$2.90 /mi' },
  { route: 'Phoenix, AZ → Houston, TX', detail: 'Flatbed · 1,175 mi', rate: '$3,220', rpm: '$2.74 /mi' },
  { route: 'Charlotte, NC → Newark, NJ', detail: 'Power Only · 616 mi', rate: '$1,790', rpm: '$2.91 /mi' },
];

export default function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="wrap why-grid">
        <Reveal>
          <span className="eyebrow">The Difference</span>
          <h2 className="h-disp">
            Why <em>Quad Dispatchers</em>?
          </h2>
          <p>
            With 7+ years of hands-on dispatch experience, we know exactly where your truck type
            earns the most — and we keep you loaded on those lanes. Around-the-clock support and a
            dedicated dispatcher cut the paperwork, kill the dead-head miles, and keep your
            operation stress-free. Join Quad Dispatchers and feel the difference a real dispatch
            partner makes for your bottom line.
          </p>
          <Link className="btn btn-solid" href="/carrier-setup" id="quote-btn">
            Get Your Quote Today <span className="arr">→</span>
          </Link>
        </Reveal>

        <Reveal
          className="board"
          role="img"
          aria-label="Sample live dispatch board showing lanes and rates"
        >
          <div className="board-head">
            <b>Live Dispatch Board</b>
            <span className="dot">Booking Now</span>
          </div>
          {LANES.map((lane) => (
            <div className="board-row" key={lane.route}>
              <span className="lane-name">
                {lane.route}
                <small>{lane.detail}</small>
              </span>
              <span className="rate">{lane.rate}</span>
              <span className="rpm">{lane.rpm}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
