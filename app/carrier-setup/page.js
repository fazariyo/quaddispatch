import PageBanner from '@/components/PageBanner';
import Reveal from '@/components/Reveal';
import CarrierSetupForm from '@/components/CarrierSetupForm';
import GetStartedSteps from '@/components/GetStartedSteps';
import { CheckIcon, PhoneIcon, MailIcon } from '@/components/Icons';
import siteConfig from '@/lib/siteConfig';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Carrier Setup',
  description:
    'Start dispatch with Quad Dispatchers. Send your MC authority, W-9 and certificate of insurance and a dedicated dispatcher will be booking your lanes within one business day.',
  path: '/carrier-setup',
});

const NEEDED = [
  'MC authority letter',
  'Signed W-9',
  'Certificate of insurance (with us listed as certificate holder)',
  'Notice of assignment, if you factor',
];

export default function CarrierSetupPage() {
  const { phone, email } = siteConfig;

  return (
    <main>
      <PageBanner
        eyebrow="Carrier Setup"
        title="Get Set Up In One Business Day"
        subtitle="Fill in the form below and a dispatcher will call to confirm your paperwork and start matching loads to your lanes."
      />

      <section className="section on-paper">
        <div className="wrap split">
          <Reveal className="split-copy">
            <span className="eyebrow">Step One</span>
            <h2 className="h-disp">Tell Us About Your Operation</h2>
            <p>
              We only need enough to get you into broker systems and start quoting lanes. No credit
              check, no setup fee, and nothing you sign today locks you in tomorrow.
            </p>
            <p>
              <strong>Have these ready to email once we call:</strong>
            </p>
            <ul className="check">
              {NEEDED.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="figure-panel">
            <span className="tag">Prefer To Talk?</span>
            <span className="fig-title">Call The Desk Instead</span>
            <span className="fig-sub">
              The dispatch line is answered 24/7. We can take every detail on this form over the
              phone in about five minutes.
            </span>
            <ul className="info-list" style={{ marginTop: '4px' }}>
              <li>
                <PhoneIcon />
                <span>
                  <b>Dispatch</b>
                  <a href={phone.href}>{phone.display}</a>
                </span>
              </li>
              <li>
                <MailIcon />
                <span>
                  <b>Email</b>
                  <a href={email.href}>{email.display}</a>
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section on-ink">
        <div className="wrap">
          <Reveal className="sec-head center">
            <span className="eyebrow">Carrier Details</span>
            <h2 className="h-disp">Start Your Setup</h2>
          </Reveal>
          <Reveal>
            <CarrierSetupForm />
          </Reveal>
        </div>
      </section>

      <GetStartedSteps />
    </main>
  );
}
