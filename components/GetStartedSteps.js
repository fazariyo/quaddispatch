import Link from 'next/link';
import Reveal from '@/components/Reveal';

const STEPS = [
  {
    num: 'Step 1',
    title: 'Send Your Documents',
    body: "MC authority, W-9, and certificate of insurance — that's all we need to get moving.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
        <path d="M14 2v5h5" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    ),
  },
  {
    num: 'Step 2',
    title: 'Sign Agreement',
    body: 'A simple, no-forced-dispatch agreement. No long-term contracts — cancel anytime.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 19h9" />
        <path d="M16.4 3.6a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z" />
      </svg>
    ),
  },
  {
    num: 'Step 3',
    title: 'Start Hauling Loads',
    body: 'Your dispatcher gets to work immediately and your first load hits the calendar.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M1 8h13v8H1z" />
        <path d="M14 11h4l3 3v2h-7z" />
        <circle cx="5.5" cy="18" r="1.8" />
        <circle cx="17.5" cy="18" r="1.8" />
      </svg>
    ),
  },
];

export default function GetStartedSteps() {
  return (
    <section className="section start" id="start">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">Simple Onboarding</span>
          <h2 className="h-disp">Getting Started With Us Is Easy</h2>
          <p>
            Our job is to take weight off the driver&apos;s shoulders. We don&apos;t sign clients —
            we build partnerships, because your success is our success. Put your truck&apos;s full
            earning power to work today.
          </p>
        </Reveal>

        <div className="steps">
          {STEPS.map((step) => (
            <Reveal as="article" className="step" key={step.num}>
              <span className="step-num">{step.num}</span>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="center">
          <Link className="btn btn-solid" href="/carrier-setup">
            Sign Up <span className="arr">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
