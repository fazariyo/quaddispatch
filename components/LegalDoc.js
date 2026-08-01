import Reveal from '@/components/Reveal';
import { LEGAL_EFFECTIVE_DATE } from '@/lib/legal';

/**
 * Shared shell for the Terms of Service and Privacy Policy pages:
 * effective-date stamp, auto-numbered table of contents, then the sections.
 *
 * `sections` is [{ id, title, content }] — content is JSX so each page can mix
 * paragraphs and lists freely. Section ids become the TOC anchor targets.
 */
export default function LegalDoc({ sections, footnote }) {
  return (
    <section className="section on-paper">
      <div className="wrap">
        <div className="legal">
          <Reveal className="legal-meta">
            <span className="stamp">
              Effective <b>{LEGAL_EFFECTIVE_DATE}</b>
            </span>
            <span className="stamp">
              Last updated <b>{LEGAL_EFFECTIVE_DATE}</b>
            </span>
          </Reveal>

          <Reveal as="nav" className="legal-toc" aria-label="On this page">
            <h2>On This Page</h2>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </Reveal>

          {sections.map((section) => (
            <Reveal as="section" id={section.id} key={section.id}>
              <h2 className="legal-h">{section.title}</h2>
              {section.content}
            </Reveal>
          ))}

          {footnote ? (
            <Reveal className="legal-callout">
              <p>{footnote}</p>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
