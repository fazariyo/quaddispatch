'use client';

import { useEffect, useState } from 'react';

/**
 * Renders the server/build-time year first so hydration matches exactly,
 * then corrects to the browser's year after mount (matters for a statically
 * exported page that outlives New Year's Eve).
 */
export default function CurrentYear({ fallback }) {
  const [year, setYear] = useState(fallback);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <span id="year">{year}</span>;
}
