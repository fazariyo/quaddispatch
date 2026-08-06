import Image from 'next/image';
import badge from '@/assets/brand/badge-on-dark.png';

/*
 * The truck-and-tires half of the logo, shared by the header and footer brand
 * lockups. The full logo (assets/brand/logo.png) carries its own DISPATCH
 * wordmark, which is illegible at header height — hence the badge crop here,
 * with the site's type lockup spelling the name out. This is the lightened
 * variant, since the artwork is drawn for white paper.
 */
export default function BrandBadge() {
  return (
    <Image
      className="brand-badge"
      src={badge}
      alt=""
      priority
      sizes="100px"
    />
  );
}
