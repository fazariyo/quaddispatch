import Link from 'next/link';
import PageBanner from '@/components/PageBanner';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { PinIcon, PhoneIcon, MailIcon, ClockIcon } from '@/components/Icons';
import siteConfig from '@/lib/siteConfig';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Contact Us',
  description:
    'Reach Quad Dispatchers any hour — the dispatch desk is staffed 24/7/365. Call, email, or send a message and a dispatcher will get straight back to you.',
  path: '/contact-us',
});

export default function ContactUsPage() {
  const { phone, email, address, hours, supportNote } = siteConfig;

  return (
    <main>
      <PageBanner
        eyebrow="Contact Us"
        title="The Desk Is Always Open"
        subtitle="Nights, weekends and holidays — the dispatch line reaches a person, not a voicemail box."
      />

      <section className="section on-paper">
        <div className="wrap contact-grid">
          {/* ---- details + hours ---- */}
          <Reveal>
            <div className="info-card">
              <h3>Reach Dispatch</h3>
              <ul className="info-list">
                <li>
                  <PhoneIcon />
                  <span>
                    <b>Phone</b>
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
                <li>
                  <PinIcon />
                  <span>
                    <b>Office</b>
                    <span>
                      {address.line1}
                      <br />
                      {address.line2}
                    </span>
                  </span>
                </li>
                <li>
                  <ClockIcon />
                  <span>
                    <b>Support</b>
                    <span>{supportNote}</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Business Hours</h3>
              {hours.map((row, index) => (
                <div className={`hours-row${index === 0 ? ' always' : ''}`} key={row.days}>
                  <b>{row.days}</b>
                  <span>{row.time}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ---- message form ---- */}
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section about">
        <Reveal className="wrap">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Ready To Roll
          </span>
          <h2 className="h-disp">Skip The Message — Start Your Setup</h2>
          <p>
            If you already know you want dispatch, the carrier setup form gets a dispatcher on your
            truck faster than an email will.
          </p>
          <Link className="btn btn-solid" href="/carrier-setup">
            Start Carrier Setup <span className="arr">→</span>
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
