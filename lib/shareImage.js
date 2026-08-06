import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import siteConfig from '@/lib/siteConfig';

/*
 * Open Graph / Twitter card, generated at build time instead of shipped as a
 * flat PNG so the brand name and tagline follow lib/siteConfig.js. Fonts are
 * read off disk (satori cannot use the woff2 that next/font emits).
 */
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const FONT_DIR = path.join(process.cwd(), 'assets', 'fonts');

async function loadFonts() {
  const [displayBold, displaySemiBold, body] = await Promise.all([
    readFile(path.join(FONT_DIR, 'BarlowCondensed-Bold.ttf')),
    readFile(path.join(FONT_DIR, 'BarlowCondensed-SemiBold.ttf')),
    readFile(path.join(FONT_DIR, 'Inter-Regular.woff')),
  ]);

  return [
    { name: 'Barlow Condensed', data: displayBold, weight: 700, style: 'normal' },
    { name: 'Barlow Condensed', data: displaySemiBold, weight: 600, style: 'normal' },
    { name: 'Inter', data: body, weight: 400, style: 'normal' },
  ];
}

/** The full logo as a data URI — satori cannot fetch a local file itself. */
async function loadLogo() {
  const png = await readFile(path.join(process.cwd(), 'assets', 'brand', 'logo-on-dark.png'));
  return `data:image/png;base64,${png.toString('base64')}`;
}

/** The dashed road stripe along the bottom edge. */
function RoadStripe() {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 8,
        display: 'flex',
        gap: 70,
        paddingLeft: 22,
      }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i} style={{ width: 60, height: 7, borderRadius: 4, background: '#f4731f' }} />
      ))}
    </div>
  );
}

export async function renderShareImage() {
  const { brand } = siteConfig;
  const logo = await loadLogo();

  return new ImageResponse(
    (
      <div
        style={{
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
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- satori only renders img */}
          <img src={logo} width={530} height={339} alt={brand.fullName} />

          <div
            style={{
              display: 'flex',
              marginTop: 22,
              fontFamily: 'Barlow Condensed',
              fontWeight: 600,
              fontSize: 25,
              letterSpacing: 7,
              color: '#8b96a3',
              textTransform: 'uppercase',
            }}
          >
            {brand.tagline}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 34,
              fontSize: 27,
              lineHeight: 1.45,
              color: '#e7eaef',
            }}
          >
            <div style={{ display: 'flex' }}>Top-paying freight, full back-office support,</div>
            <div style={{ display: 'flex' }}>and a dispatcher on call 24/7.</div>
          </div>
        </div>

        <RoadStripe />
      </div>
    ),
    { ...size, fonts: await loadFonts() }
  );
}

export default renderShareImage;
