import PageBanner from '@/components/PageBanner';
import LegalDoc from '@/components/LegalDoc';
import siteConfig from '@/lib/siteConfig';
import { GOVERNING_STATE } from '@/lib/legal';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description:
    'The terms governing use of the Quad Dispatch website and our truck dispatch services for motor carriers.',
  path: '/terms-of-service',
});

/*
 * TEMPLATE COPY — not legal advice.
 *
 * This is a generic starting point for a dispatch service. Before you rely on
 * it, have an attorney review it against how you actually operate: your fee
 * terms, cancellation notice period, insurance requirements and liability
 * limits all need to match your real carrier agreement. Update
 * LEGAL_EFFECTIVE_DATE in lib/legal.js whenever the wording changes.
 */
export default function TermsOfServicePage() {
  const { brand, phone, email, address } = siteConfig;

  const sections = [
    {
      id: 'agreement',
      title: 'Agreement to These Terms',
      content: (
        <>
          <p>
            These Terms of Service (the &ldquo;Terms&rdquo;) govern your use of the{' '}
            {brand.fullName} website and any dispatch services you receive from{' '}
            {brand.legalName} (&ldquo;{brand.fullName},&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo; or
            &ldquo;our&rdquo;). By using this site, submitting a carrier setup request, or
            accepting dispatch services from us, you agree to these Terms.
          </p>
          <p>
            If you are agreeing on behalf of a company, you confirm you have authority to bind that
            company. If you do not agree to these Terms, do not use the site or our services.
          </p>
          <p>
            A separate written dispatch agreement may be signed when you are onboarded. Where that
            agreement and these Terms conflict, the signed agreement controls.
          </p>
        </>
      ),
    },
    {
      id: 'services',
      title: 'What We Do — And What We Are Not',
      content: (
        <>
          <p>
            We are a truck dispatch service. We act as your agent to locate freight, negotiate
            rates, complete broker setup, and handle back-office paperwork on your behalf. Our
            services may include:
          </p>
          <ul>
            <li>Searching load boards and broker networks for freight on your lanes</li>
            <li>Negotiating rates and arranging load assignments for your approval</li>
            <li>Completing carrier packets, rate confirmations and appointment scheduling</li>
            <li>Preparing and submitting invoices and coordinating with your factoring company</li>
            <li>Providing around-the-clock support for breakdowns, detention and delays</li>
          </ul>
          <p>
            <strong>
              We are not a freight broker, freight forwarder, motor carrier or shipper.
            </strong>{' '}
            We do not take possession of freight, we do not hold operating authority on your behalf,
            and we do not guarantee any particular volume of loads, rate per mile, or level of
            revenue. Any figures shown on this website are illustrative examples only.
          </p>
        </>
      ),
    },
    {
      id: 'eligibility',
      title: 'Carrier Eligibility and Your Responsibilities',
      content: (
        <>
          <p>
            To receive dispatch services you must be a motor carrier in good standing. You are
            solely responsible for your operations, your equipment and your drivers. You agree to
            maintain at all times:
          </p>
          <ul>
            <li>Active and valid operating authority (MC and/or DOT) in good standing</li>
            <li>All insurance coverage required by law and by the brokers you haul for</li>
            <li>Compliance with FMCSA regulations, including hours-of-service and ELD rules</li>
            <li>Properly licensed, qualified and legally employed drivers</li>
            <li>Equipment that is roadworthy and passes required inspections</li>
          </ul>
          <p>
            You agree to provide accurate information during setup and to tell us promptly if your
            authority, insurance or safety rating changes. We may suspend or end services
            immediately if any of the above lapses.
          </p>
        </>
      ),
    },
    {
      id: 'fees',
      title: 'Dispatch Fees and Payment',
      content: (
        <>
          <p>
            Our fee is a percentage of the gross revenue of each load we book for you, at the rate
            quoted to you during setup and recorded in your dispatch agreement. Percentages shown
            on our pricing page are illustrative and are not an offer.
          </p>
          <p>
            Unless agreed otherwise in writing: fees are invoiced per load or on a weekly cycle;
            payment is due on the terms stated in your dispatch agreement; and fees are earned when
            the load is booked and delivered, regardless of when the broker pays you.
          </p>
          <p>
            We may charge fees for accessorial revenue such as detention, layover or TONU where
            your dispatch agreement says so. We do not charge setup fees or monthly minimums. If a
            broker fails to pay you, we will assist in pursuing payment, but we are not responsible
            for a broker&rsquo;s non-payment or insolvency.
          </p>
        </>
      ),
    },
    {
      id: 'no-forced-dispatch',
      title: 'No Forced Dispatch',
      content: (
        <>
          <p>
            You approve every load before it is booked. You may decline any load for any reason. We
            will never commit your equipment to a load you have not agreed to.
          </p>
          <p>
            Once you have accepted a load, you are responsible for performing it in accordance with
            the rate confirmation and applicable law. If you cannot complete an accepted load, tell
            us immediately so we can notify the broker and work the reschedule.
          </p>
        </>
      ),
    },
    {
      id: 'term',
      title: 'Term and Cancellation',
      content: (
        <>
          <p>
            There is no long-term contract. Either party may end the relationship at any time by
            giving written notice, subject to any notice period stated in your dispatch agreement.
          </p>
          <p>
            On cancellation you remain responsible for completing any loads already accepted, and
            for paying fees on all loads booked before the cancellation took effect. We will
            continue to process invoicing for those loads unless you tell us otherwise.
          </p>
        </>
      ),
    },
    {
      id: 'relationship',
      title: 'Independent Contractor Relationship',
      content: (
        <p>
          We are an independent contractor. Nothing in these Terms creates a partnership, joint
          venture, employment or agency relationship beyond the limited authority you give us to
          arrange freight and paperwork on your behalf. Neither party may bind the other except as
          expressly set out here or in your dispatch agreement. You retain exclusive control over
          your drivers, your equipment and your operations.
        </p>
      ),
    },
    {
      id: 'liability',
      title: 'Disclaimers and Limitation of Liability',
      content: (
        <>
          <p>
            The website and our services are provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis. To the fullest extent permitted by law we disclaim all
            warranties, express or implied, including fitness for a particular purpose and
            non-infringement.
          </p>
          <p>
            We are not liable for cargo loss or damage, freight claims, accidents, citations, cargo
            theft, or a broker&rsquo;s failure to pay. Those risks sit with you as the motor carrier
            and with your insurers.
          </p>
          <p>
            To the fullest extent permitted by law, our total liability arising out of or relating
            to these Terms or our services will not exceed the total dispatch fees you paid us in
            the three months before the event giving rise to the claim. Neither party is liable for
            indirect, incidental, special, consequential or punitive damages, or for lost profits,
            even if advised of the possibility.
          </p>
        </>
      ),
    },
    {
      id: 'indemnity',
      title: 'Indemnification',
      content: (
        <p>
          You agree to indemnify, defend and hold harmless {brand.legalName}, its owners, officers
          and employees from any claim, loss, liability, fine or expense (including reasonable legal
          fees) arising from your operations, your equipment, your drivers, your breach of these
          Terms, your violation of law or regulation, or any cargo or personal injury claim relating
          to freight you hauled.
        </p>
      ),
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable Use of This Website',
      content: (
        <>
          <p>You agree not to:</p>
          <ul>
            <li>Submit false, misleading or fraudulent information through any form on this site</li>
            <li>Attempt to gain unauthorised access to the site, its servers or its data</li>
            <li>Scrape, crawl or harvest content or data except as permitted by robots directives</li>
            <li>Use the site to transmit malware or to interfere with its normal operation</li>
            <li>Reproduce our content, branding or marks without written permission</li>
          </ul>
          <p>
            All content on this site — text, layout, graphics and marks — belongs to{' '}
            {brand.legalName} or its licensors and is protected by applicable intellectual property
            law.
          </p>
        </>
      ),
    },
    {
      id: 'confidentiality',
      title: 'Confidentiality',
      content: (
        <p>
          Each party may receive confidential information from the other, including rate
          information, broker contacts, lane data and business records. Each party agrees to use
          that information only to perform under these Terms and not to disclose it to third parties
          except as needed to arrange freight, process payment, or comply with law.
        </p>
      ),
    },
    {
      id: 'changes',
      title: 'Changes to These Terms',
      content: (
        <p>
          We may update these Terms from time to time. When we do, we will revise the effective date
          at the top of this page. Material changes will be communicated to active carriers.
          Continuing to use the site or our services after a change takes effect means you accept
          the revised Terms.
        </p>
      ),
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Disputes',
      content: (
        <p>
          These Terms are governed by the laws of the State of {GOVERNING_STATE}, without regard to
          its conflict-of-law rules. The parties will attempt in good faith to resolve any dispute
          informally first. Any dispute that cannot be resolved informally will be brought in the
          state or federal courts located in {GOVERNING_STATE}, and both parties consent to that
          jurisdiction and venue.
        </p>
      ),
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: (
        <>
          <p>Questions about these Terms? Reach us at:</p>
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
        title="Terms Of Service"
        subtitle="The ground rules for using this site and working with our dispatch desk."
      />
      <LegalDoc
        sections={sections}
        footnote="These Terms are a general template and are not legal advice. Please have an attorney review them against your actual dispatch agreement and operating practices before relying on them."
      />
    </main>
  );
}
