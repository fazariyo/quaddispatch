import Reveal from '@/components/Reveal';
import siteConfig from '@/lib/siteConfig';

export default function AboutStrip() {
  const { phone } = siteConfig;

  return (
    <section className="section about" id="quote">
      <Reveal className="wrap">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          About Us
        </span>
        <h2 className="h-disp">End-To-End Transportation &amp; Custom Logistics Solutions</h2>
        <p>
          We build lanes around your life — home every night or out for two weeks at a time, the
          schedule is yours. Tell us how you want to run, and we&apos;ll make the freight fit.
        </p>
        <a className="btn btn-solid" href={phone.href}>
          Call Dispatch Now <span className="arr">→</span>
        </a>
      </Reveal>
    </section>
  );
}
