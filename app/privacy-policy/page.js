import PageBanner from '@/components/PageBanner';
import LegalDoc from '@/components/LegalDoc';
import siteConfig from '@/lib/siteConfig';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How Quad Dispatchers collects, uses, shares and protects the information you provide through this website and during carrier onboarding.',
  path: '/privacy-policy',
});

/*
 * TEMPLATE COPY — not legal advice.
 *
 * Keep this page honest about what the site ACTUALLY does. As shipped, the
 * carrier setup and contact forms POST to /api/carrier-setup and /api/contact,
 * which only write the payload to the server log — there is no database, no
 * analytics, no advertising pixel and no non-essential cookie anywhere in this
 * project. The moment you plug in email delivery, a CRM, analytics or a chat
 * widget, come back and update "Information We Collect", "How We Share
 * Information" and "Cookies and Tracking" to match, then bump
 * LEGAL_EFFECTIVE_DATE in lib/legal.js.
 */
export default function PrivacyPolicyPage() {
  const { brand, phone, email, address } = siteConfig;

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      content: (
        <>
          <p>
            This Privacy Policy explains how {brand.legalName} (&ldquo;{brand.fullName},&rdquo;
            &ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;) handles information collected
            through this website and in the course of providing truck dispatch services.
          </p>
          <p>
            We collect the information we need to set you up with brokers, book your freight and get
            you paid — and not much else. We do not sell your personal information.
          </p>
        </>
      ),
    },
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      content: (
        <>
          <p>
            <strong>Information you give us.</strong> When you submit the carrier setup form, the
            contact form, or send us documents during onboarding, we collect:
          </p>
          <ul>
            <li>Company name and MC / DOT number</li>
            <li>Contact name, phone number and email address</li>
            <li>Truck and trailer type, and any notes you choose to add</li>
            <li>
              Onboarding documents you send us, such as your authority letter, W-9, certificate of
              insurance and notice of assignment
            </li>
            <li>
              Operational records created while we dispatch you — rate confirmations, bills of
              lading, invoices and lane history
            </li>
          </ul>
          <p>
            <strong>Information collected automatically.</strong> Like most websites, our hosting
            provider records standard server logs — IP address, browser type, pages requested and
            timestamps — for security and troubleshooting. We do not use these logs to build a
            profile of you.
          </p>
          <p>
            We do not knowingly collect Social Security numbers, payment card numbers or banking
            details through this website. Do not send those through the web forms.
          </p>
        </>
      ),
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      content: (
        <>
          <p>We use the information described above to:</p>
          <ul>
            <li>Respond to your enquiry and complete your carrier onboarding</li>
            <li>Set you up in broker and shipper systems so loads can be booked</li>
            <li>Locate freight, negotiate rates and arrange load assignments</li>
            <li>Prepare and submit invoices and coordinate with your factoring company</li>
            <li>Provide dispatch and breakdown support</li>
            <li>Keep records required for tax, insurance and regulatory compliance</li>
            <li>Secure our systems and investigate misuse</li>
          </ul>
          <p>
            We rely on your consent, the performance of our agreement with you, and our legitimate
            interest in running the business as the bases for this processing.
          </p>
        </>
      ),
    },
    {
      id: 'how-we-share',
      title: 'How We Share Information',
      content: (
        <>
          <p>We share your information only where it is needed to deliver the service:</p>
          <ul>
            <li>
              <strong>Brokers, shippers and 3PLs</strong> — carrier packets, authority and insurance
              documents so loads can be tendered to you
            </li>
            <li>
              <strong>Your factoring company</strong> — invoices and supporting paperwork, at your
              direction
            </li>
            <li>
              <strong>Service providers</strong> — hosting, email and back-office tools that process
              data on our behalf under confidentiality obligations
            </li>
            <li>
              <strong>Professional advisers</strong> — accountants, insurers and lawyers where
              reasonably required
            </li>
            <li>
              <strong>Authorities</strong> — where we are legally required to disclose, or to protect
              our rights, safety or property
            </li>
          </ul>
          <p>
            <strong>We do not sell your personal information</strong>, and we do not share it with
            third parties for their own advertising purposes.
          </p>
        </>
      ),
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking',
      content: (
        <>
          <p>
            This website does not use advertising cookies, analytics cookies or third-party tracking
            pixels. Any cookies present are strictly necessary for the site to function.
          </p>
          <p>
            If we add analytics or marketing tools in future, we will update this section and the
            effective date above before those tools go live. You can control cookies at any time
            through your browser settings.
          </p>
        </>
      ),
    },
    {
      id: 'retention',
      title: 'Data Retention',
      content: (
        <p>
          We keep carrier records for as long as you are an active client and afterwards for as long
          as we need them to meet tax, insurance, contractual and regulatory obligations — typically
          several years. Enquiries that do not become carrier relationships are kept only as long as
          needed to follow up, then deleted. When information is no longer needed we delete or
          anonymise it.
        </p>
      ),
    },
    {
      id: 'security',
      title: 'How We Protect Your Information',
      content: (
        <p>
          We use reasonable administrative, technical and physical safeguards to protect the
          information we hold, including encrypted connections to this website and access controls
          on our systems. No method of transmission or storage is completely secure, so we cannot
          guarantee absolute security. If a breach affects your information, we will notify you as
          required by applicable law.
        </p>
      ),
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      content: (
        <>
          <p>
            Depending on where you live, you may have the right to request access to the personal
            information we hold about you, ask us to correct or delete it, object to or restrict
            certain processing, request a copy in portable form, or withdraw consent you previously
            gave.
          </p>
          <p>
            To make a request, contact us using the details below. We will verify your identity
            before acting and will respond within the timeframe required by applicable law. We will
            not discriminate against you for exercising these rights.
          </p>
          <p>
            You can opt out of non-essential emails at any time by replying to ask, or by using the
            unsubscribe link where one is provided. We will still send operational messages about
            loads and paperwork while you are an active carrier.
          </p>
        </>
      ),
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links',
      content: (
        <p>
          This site may link to load boards, broker portals or other third-party websites. We do not
          control those sites and are not responsible for their content or privacy practices. Read
          their privacy policies before providing information to them.
        </p>
      ),
    },
    {
      id: 'childrens-privacy',
      title: "Children's Privacy",
      content: (
        <p>
          This website and our services are intended for businesses and are not directed to children
          under 16. We do not knowingly collect personal information from children. If you believe a
          child has provided us information, contact us and we will delete it.
        </p>
      ),
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: (
        <p>
          We may update this Privacy Policy as our practices or the law change. When we do, we will
          revise the effective date at the top of this page. If the changes are material, we will
          take reasonable steps to notify active carriers directly. Please review this page
          periodically.
        </p>
      ),
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: (
        <>
          <p>
            To ask a question about this policy or to exercise any of the rights described above,
            reach us at:
          </p>
          <ul>
            <li>{brand.legalName}</li>
            <li>
              {address.line1} {address.line2}
            </li>
            <li>
              Phone: <a href={phone.href}>{phone.display}</a>
            </li>
            <li>
              Email: <a href={email.href}>{email.display}</a>
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <main>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="What we collect, why we collect it, and who it gets shared with."
      />
      <LegalDoc
        sections={sections}
        footnote="This policy is a general template and is not legal advice. Have an attorney review it against your actual data practices — and update it whenever you add analytics, email delivery or a CRM."
      />
    </main>
  );
}
