import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import Reveal from '@/components/Reveal';
import { CheckIcon } from '@/components/Icons';
import { pricing, pricingIncludes, pricingNote } from '@/lib/pricing';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Pricing',
  description:
    'Straightforward percentage-based truck dispatch pricing by trailer type — dry van, reefer, flatbed, step deck, hotshot, box truck and power only. No setup fees, no contracts.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <main>
      <PageBanner
        eyebrow="Pricing"
        title="One Percentage. No Surprises."
        subtitle="A flat share of what the load pays — no setup fee, no monthly minimum, and no contract locking you in."
      />

      {/* ---- price cards ---- */}
      <section className="section on-paper">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow">By Truck Type</span>
            <h2 className="h-disp">Dispatch Fees</h2>
          </Reveal>

          <div className="price-grid">
            {pricing.map((plan) => (
              <Reveal as="article" className="price-card" key={plan.type}>
                <h3>{plan.type}</h3>
                <span className="price-lead">{plan.lead}</span>
                <div className="price-fee">
                  {plan.fee}
                  <small>{plan.feeNote}</small>
                </div>
                <ul className="check">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link className="btn btn-solid" href="/carrier-setup">
                  Get Started <span className="arr">→</span>
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="price-note">{pricingNote}</p>
        </div>
      </section>

      {/* ---- what every plan includes ---- */}
      <section className="section on-ink">
        <div className="wrap split">
          <Reveal className="split-copy">
            <span className="eyebrow">Included Everywhere</span>
            <h2 className="h-disp">Every Percentage Buys The Same Promises</h2>
            <p>
              Whatever you run, the terms are identical. The percentage covers load sourcing, rate
              negotiation, broker setup, paperwork, invoicing, factoring coordination and a
              dispatcher on call around the clock.
            </p>
            <ul className="check">
              {pricingIncludes.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="figure-panel">
            <span className="tag">No Lock-In</span>
            <span className="fig-title">Nothing To Sign Away</span>
            <span className="fig-sub">
              A simple, no-forced-dispatch agreement you can cancel at any time. If we are not
              earning the percentage, you should not be paying it.
            </span>
            <div className="fig-stats">
              <div>
                <b>$0</b>
                <small>Setup fee</small>
              </div>
              <div>
                <b>$0</b>
                <small>Monthly minimum</small>
              </div>
              <div>
                <b>Any time</b>
                <small>Cancellation</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section about">
        <Reveal className="wrap">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Exact Quote
          </span>
          <h2 className="h-disp">Tell Us What You Run And We Will Price It</h2>
          <p>
            Rates depend on your lanes, trailer type and fleet size. Send your details and a
            dispatcher will come back with a firm number.
          </p>
          <Link className="btn btn-solid" href="/carrier-setup">
            Get Your Quote <span className="arr">→</span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
