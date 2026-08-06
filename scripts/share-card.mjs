/*
 * Regenerates the Open Graph / Twitter card into public/:
 *
 *     npm run share-card
 *
 * A script rather than something the build runs, and public/ rather than app/,
 * for two reasons:
 *
 *   - Generating the card during the build means a metadata route. The image
 *     convention exports an extensionless file under `output: export` (GitHub
 *     Pages serves those as application/octet-stream), and a `.png` route
 *     handler produced an artifact whose Pages deployment stalled for ten
 *     minutes and aborted. Committed PNGs are what this site deploys.
 *   - app/opengraph-image.png would trigger the metadata file convention, which
 *     overrides metadata.openGraph.images and prepends basePath to a
 *     metadataBase that already carries it — og:image came out doubled as
 *     /quaddispatch/quaddispatch/opengraph-image.png. From public/ the path is
 *     declared once, in app/layout.js.
 *
 * Plain node, so no JSX — element trees are built with createElement. Fonts and
 * the logo are read off disk; satori cannot use the woff2 next/font emits, and
 * it cannot fetch a local file itself.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createElement as h } from 'react';
import { ImageResponse } from 'next/og.js';
import sharp from 'sharp';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const SIZE = { width: 1200, height: 630 };

// Keep in step with lib/siteConfig.js — this script runs outside the Next
// build, so it cannot import that ES module.
const BRAND = {
  fullName: 'Quad Dispatch',
  tagline: 'TRUCK DISPATCH SERVICES',
};
const COPY = ['Top-paying freight, full back-office support,', 'and a dispatcher on call 24/7.'];

const font = (file) => readFile(path.join(ROOT, 'assets', 'fonts', file));

function roadStripe() {
  return h(
    'div',
    {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 8,
        display: 'flex',
        gap: 70,
        paddingLeft: 22,
      },
    },
    Array.from({ length: 10 }, (_, i) =>
      h('div', { key: i, style: { width: 60, height: 7, borderRadius: 4, background: '#f4731f' } })
    )
  );
}

function card(logoDataUri) {
  return h(
    'div',
    {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 98px',
        fontFamily: 'Inter',
        position: 'relative',
        /*
         * The warm glow rising off the lower middle of the card. It lives on
         * the root as stacked backgroundImage layers — satori drops gradients
         * set on absolutely-positioned overlay divs.
         */
        backgroundColor: '#0d1116',
        backgroundImage: [
          'radial-gradient(circle 560px at 58% 100%, rgba(244,115,31,.26), rgba(244,115,31,.07) 55%, rgba(13,17,22,0) 100%)',
          'linear-gradient(to top, rgba(244,115,31,.13), rgba(13,17,22,0) 45%)',
        ].join(', '),
      },
    },
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column', position: 'relative' } },
      h('img', { src: logoDataUri, width: 530, height: 339, alt: BRAND.fullName }),
      h(
        'div',
        {
          style: {
            display: 'flex',
            marginTop: 22,
            fontFamily: 'Barlow Condensed',
            fontWeight: 600,
            fontSize: 25,
            letterSpacing: 7,
            color: '#8b96a3',
            textTransform: 'uppercase',
          },
        },
        BRAND.tagline
      ),
      h(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: 34,
            fontSize: 27,
            lineHeight: 1.45,
            color: '#e7eaef',
          },
        },
        ...COPY.map((line, i) => h('div', { key: i, style: { display: 'flex' } }, line))
      )
    ),
    roadStripe()
  );
}

const [displayBold, displaySemiBold, body, logo] = await Promise.all([
  font('BarlowCondensed-Bold.ttf'),
  font('BarlowCondensed-SemiBold.ttf'),
  font('Inter-Regular.woff'),
  readFile(path.join(ROOT, 'assets', 'brand', 'logo-on-dark.png')),
]);

const rendered = Buffer.from(
  await new ImageResponse(card(`data:image/png;base64,${logo.toString('base64')}`), {
    ...SIZE,
    fonts: [
      { name: 'Barlow Condensed', data: displayBold, weight: 700, style: 'normal' },
      { name: 'Barlow Condensed', data: displaySemiBold, weight: 600, style: 'normal' },
      { name: 'Inter', data: body, weight: 400, style: 'normal' },
    ],
  }).arrayBuffer()
);

// satori's encoder leaves ~350 KB on the table; these are committed assets, so
// squeeze them before they land in the repo. No palette — it bands the glow.
const png = await sharp(rendered).png({ compressionLevel: 9, effort: 10 }).toBuffer();

for (const file of ['opengraph-image.png', 'twitter-image.png']) {
  await writeFile(path.join(ROOT, 'public', file), png);
  console.log(`wrote public/${file} (${png.length} bytes)`);
}
