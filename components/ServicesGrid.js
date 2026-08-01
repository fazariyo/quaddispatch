import Link from 'next/link';
import Reveal from '@/components/Reveal';

const SERVICES = [
  {
    title: 'Finding Loads',
    body: 'We scan the top load boards and lean on direct broker relationships to lock in the best-paying freight on your lanes.',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m21 21-5.8-5.8" />
        <path d="M8 10.5h5M10.5 8v5" />
      </svg>
    ),
  },
  {
    title: 'Assigning Loads',
    body: 'Your dispatcher matches every load to your truck, your schedule, and your preferred home time — then handles setup and confirmation.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="m8.5 12.5 2.5 2.5 4.5-5" />
        <path d="M9 3.5h6" />
      </svg>
    ),
  },
  {
    title: 'Billing, Invoicing & Factoring',
    body: 'We prepare the paperwork, submit invoices, and coordinate with your factoring company — so you get paid without the desk work.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h4" />
      </svg>
    ),
  },
  {
    title: 'Driver Response Unit',
    body: 'Breakdown, detention, or trouble at the dock? Our response team is one call away — around the clock, every day of the year.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 13a8 8 0 0 1 16 0" />
        <rect x="2.5" y="13" width="5" height="7" rx="2" />
        <rect x="16.5" y="13" width="5" height="7" rx="2" />
        <path d="M20 20v1a2 2 0 0 1-2 2h-4" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">What We Do</span>
          <h2 className="h-disp">Full-Service Dispatch, Front To Back</h2>
        </Reveal>
        <div className="svc-grid">
          {SERVICES.map((service) => (
            <Reveal as="article" className="svc-card" key={service.title}>
              <div className="svc-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <Link className="svc-link" href="/carrier-setup">
                Start Now <span className="arr">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
