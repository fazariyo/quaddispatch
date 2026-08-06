import { renderShareImage } from '@/lib/shareImage';

/* Same card as the Open Graph image — see app/opengraph-image.png/route.js. */
export const dynamic = 'force-static';

export function GET() {
  return renderShareImage();
}
