'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Replaces the vanilla `.reveal` IntersectionObserver.
 * Returns [ref, inView]; `inView` latches to true on first intersection
 * and the element is unobserved, matching the original one-shot behaviour.
 *
 *   const [ref, inView] = useReveal();
 *   <div ref={ref} className={`reveal${inView ? ' in' : ''}`} />
 */
export default function useReveal({ threshold = 0.18 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browsers / some test envs): show it.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setInView(true);
          io.unobserve(entry.target);
        });
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView];
}
