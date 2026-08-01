'use client';

import useReveal from '@/lib/useReveal';

/**
 * Renders the element itself (no extra wrapper node, so the DOM/CSS
 * selectors stay identical to the original markup) and appends
 * `reveal` / `reveal in` to whatever classes it was given.
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useReveal();
  const classes = `${className} reveal${inView ? ' in' : ''}`.trim();

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
