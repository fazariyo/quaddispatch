import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import Reveal from '@/components/Reveal';
import SpecializationGrid from '@/components/SpecializationGrid';
import { CheckIcon } from '@/components/Icons';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Services',
  description:
    'Full-service truck dispatch: finding loads, assigning loads, billing, invoicing and factoring, plus a 24/7 driver response unit for owner-operators and small fleets.',
  path: '/services',
});

const SERVICES = [
  {
    num: '01',
    id: 'finding-loads',
    eyebrow: 'Service 01',
    title: 'Finding Loads',
    lead: 'The right freight, on the lanes you actually want to run.',
    body: [
      'Your dispatcher works the major load boards every morning and leans on direct broker relationships built over seven years of booking freight. We are not chasing whatever posts first — we are looking for the rate that makes your week.',
      'We learn your preferred lanes, your home time and the loads you would rather not touch, then filter everything through that. You see the shortlist. You decide what gets booked.',
    ],
    features: [
      'Daily sweeps of the major national load boards',
      'Direct broker and shipper relationships, not just postings',
      'Rate negotiation on every load before it reaches you',
      'Backhaul planning to cut dead-head miles',
      'Lane and rate history so you know what a load should pay',
    ],
    figure: {
      tag: 'Load Sourcing',
      title: 'Booked Around Your Week',
      sub: 'Nothing moves without your approval — no forced dispatch, ever.',
      stats: [
        { value: '20k+', label: 'Loads booked' },
        { value: '$2.5+', label: 'Per mile avg' },
      ],
    },
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m21 21-5.8-5.8" />
        <path d="M8 10.5h5M10.5 8v5" />
      </svg>
    ),
  },
  {
    num: '02',
    id: 'assigning-loads',
    eyebrow: 'Service 02',
    title: 'Assigning Loads',
    lead: 'Matched to your truck, your schedule and your home time.',
    body: [
      'Once you approve a load, your dispatcher handles everything between the handshake and the pickup: broker setup packets, carrier packages, rate confirmations, pickup and delivery appointments, and the check calls in between.',
      'We plan the week as a route, not as a series of one-off loads. That means fewer empty miles, fewer surprise resets, and getting you home when you said you would be home.',
    ],
    features: [
      'Broker setup packets and carrier packages completed for you',
      'Rate confirmations reviewed line by line before you sign',
      'Pickup and delivery appointments scheduled and confirmed',
      'Multi-load week planning built around your home time',
      'Check calls and updates handled so your phone stays quiet',
    ],
    figure: {
      tag: 'Dispatch Desk',
      title: 'One Point Of Contact',
      sub: 'A named dispatcher who knows your truck — not a rotating call queue.',
      stats: [
        { value: '24/7', label: 'Desk coverage' },
        { value: '1', label: 'Dedicated dispatcher' },
      ],
    },
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="m8.5 12.5 2.5 2.5 4.5-5" />
        <path d="M9 3.5h6" />
      </svg>
    ),
  },
  {
    num: '03',
    id: 'billing-factoring',
    eyebrow: 'Service 03',
    title: 'Billing, Invoicing & Factoring',
    lead: 'You haul it. We do the paperwork and chase the money.',
    body: [
      'Every completed load goes straight into our back office. We assemble the invoice packet — rate confirmation, signed BOL, lumper and accessorial receipts — and submit it the same day wherever possible.',
      'If you factor, we coordinate directly with your factoring company so nothing bounces back for a missing document. If a broker goes quiet on payment, we chase it. That is a phone call you never have to make.',
    ],
    features: [
      'Same-day invoice submission on completed loads',
      'Rate confirmations, BOLs and receipts assembled for you',
      'Direct coordination with your factoring company',
      'Quick pay assistance when you need cash sooner',
      'Aging follow-up and collections chasing on late brokers',
    ],
    figure: {
      tag: 'Back Office',
      title: 'Paperwork Off Your Seat',
      sub: 'Invoices out same day, factoring packets clean the first time.',
      stats: [
        { value: 'Same day', label: 'Invoice submission' },
        { value: '0', label: 'Forms for you to file' },
      ],
    },
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h4" />
      </svg>
    ),
  },
  {
    num: '04',
    id: 'driver-response',
    eyebrow: 'Service 04',
    title: 'Driver Response Unit',
    lead: 'Breakdown, detention or trouble at the dock — one call, any hour.',
    body: [
      'Freight does not break down between nine and five. Our response desk is staffed around the clock, every day of the year, so a problem at 2 AM gets a person who can actually do something about it.',
      'We notify the broker, work the reschedule, line up a shop, and re-cover the load if it comes to that. Detention and layover get documented and claimed, because those hours are yours.',
    ],
    features: [
      'Live 24/7/365 coverage — nights, weekends and holidays',
      'Breakdown support and repair shop coordination',
      'Broker notification and delivery rescheduling',
      'Detention, layover and TONU documented and claimed',
      'Load re-covering when a truck goes down mid-haul',
    ],
    figure: {
      tag: 'Response Unit',
      title: 'A Human, Not A Voicemail',
      sub: 'The number on your rate con reaches a dispatcher at any hour.',
      stats: [
        { value: '365', label: 'Days covered' },
        { value: '2 AM', label: 'Still answered' },
      ],
    },
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

export default function ServicesPage() {
  return (
    <main>
      <PageBanner
        eyebrow="What We Do"
        title="Full-Service Dispatch, Front To Back"
        subtitle="Four services that cover everything between finding the load and banking the money — so the only thing left for you is driving."
      />

      {SERVICES.map((service, index) => {
        const dark = index % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`section ${dark ? 'on-dark' : 'on-paper'}`}
          >
            <div className={`wrap split${dark ? ' flip' : ''}`}>
              <Reveal className="split-copy">
                <span className="eyebrow">{service.eyebrow}</span>
                <h2 className="h-disp">{service.title}</h2>
                <p>
                  <strong>{service.lead}</strong>
                </p>
                {service.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
                <ul className="check">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="figure-panel">
                <div className="svc-icon">{service.icon}</div>
                <span className="tag">{service.figure.tag}</span>
                <span className="fig-title">{service.figure.title}</span>
                <span className="fig-sub">{service.figure.sub}</span>
                <div className="fig-stats">
                  {service.figure.stats.map((stat) => (
                    <div key={stat.label}>
                      <b>{stat.value}</b>
                      <small>{stat.label}</small>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <SpecializationGrid />

      <section className="section about">
        <Reveal className="wrap">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Get Rolling
          </span>
          <h2 className="h-disp">One Desk For Loads, Paperwork And Support</h2>
          <p>
            Send your authority, W-9 and insurance certificate and we will have a dispatcher on your
            truck within a business day.
          </p>
          <Link className="btn btn-solid" href="/carrier-setup">
            Start Carrier Setup <span className="arr">→</span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
