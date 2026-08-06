import { renderShareImage } from '@/lib/shareImage';

/*
 * Served as a route handler rather than app/opengraph-image.js because the
 * metadata convention exports an extensionless file under `output: export`,
 * and GitHub Pages hands those to crawlers as application/octet-stream.
 * `force-static` renders the PNG once at build time.
 */
export const dynamic = 'force-static';

export function GET() {
  return renderShareImage();
}
