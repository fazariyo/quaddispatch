'use client';

import { useEffect, useState } from 'react';
import useReveal from '@/lib/useReveal';

const STATS = [
  { prefix: '', target: 20000, decimals: 0, suffix: '+', label: 'Loads Booked' },
  { prefix: '$', target: 8000, decimals: 0, suffix: '+', label: 'Weekly Gross Revenue' },
  { prefix: '$', target: 2.5, decimals: 1, suffix: '+', label: 'Per Mile Average' },
];

const DURATION = 1600;

function fmt(n, decimals) {
  return decimals > 0
    ? n.toFixed(decimals)
    : Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/** Counts up once `run` flips true; snaps straight to the final value under reduced motion. */
function Counter({ target, decimals, suffix, run }) {
  const [text, setText] = useState('0');

  useEffect(() => {
    if (!run) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(fmt(target, decimals) + suffix);
      return undefined;
    }

    let frame;
    let start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3); /* ease-out cubic */
      setText(fmt(target * eased, decimals) + (p === 1 ? suffix : ''));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [run, target, decimals, suffix]);

  return <span className="count">{text}</span>;
}

function Stat({ prefix, target, decimals, suffix, label }) {
  const [ref, inView] = useReveal();

  return (
    <div ref={ref} className={`stat reveal${inView ? ' in' : ''}`}>
      <b>
        {prefix}
        <Counter target={target} decimals={decimals} suffix={suffix} run={inView} />
      </b>
      <span>{label}</span>
    </div>
  );
}

export default function StatsBand() {
  return (
    <section className="stats" aria-label="Company statistics">
      <div className="wrap stats-grid">
        {STATS.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
