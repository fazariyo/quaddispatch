import Reveal from '@/components/Reveal';

/**
 * Subpage header. Same visual language as the home hero — dark gradient,
 * orange glow, lane stripe — but static: no truck and no animation.
 */
export default function PageBanner({ eyebrow, title, subtitle }) {
  return (
    <section className="pbanner">
      <div className="wrap pbanner-inner center">
        {eyebrow ? (
          <Reveal as="span" className="eyebrow" style={{ justifyContent: 'center' }}>
            {eyebrow}
          </Reveal>
        ) : null}
        <Reveal as="h1" className="h-disp">
          {title}
        </Reveal>
        {subtitle ? <Reveal as="p">{subtitle}</Reveal> : null}
      </div>
      <div className="pbanner-stripe" aria-hidden="true"></div>
    </section>
  );
}
