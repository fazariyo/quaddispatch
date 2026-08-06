import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import boxTruck from '@/assets/photos/spec-box-truck.webp';
import conestoga from '@/assets/photos/spec-conestoga.webp';
import dryVan from '@/assets/photos/spec-dry-van.webp';
import flatbed from '@/assets/photos/spec-flatbed.webp';
import hotshot from '@/assets/photos/spec-hotshot.webp';
import powerOnly from '@/assets/photos/spec-power-only.webp';
import reefer from '@/assets/photos/spec-reefer.webp';
import rgn from '@/assets/photos/spec-rgn.webp';
import stepDeck from '@/assets/photos/spec-step-deck.webp';

/*
 * Each card is fronted by a photo of the equipment it names — clearer at a
 * glance than the line icons that used to sit here.
 */
const SPECS = [
  { title: 'Flatbed', note: '48 & 53 ft trailers only', photo: flatbed, alt: 'Empty aluminium flatbed trailer' },
  { title: 'Power Only', note: 'Load-out, hook & drop, tow-away', photo: powerOnly, alt: 'Day-cab tractor running without a trailer' },
  { title: 'Reefer', note: '48 & 53 ft trailers only', photo: reefer, alt: 'Refrigerated trailer with its reefer unit' },
  { title: 'Dry Van', note: '48 & 53 ft trailers only', photo: dryVan, alt: 'Enclosed dry van trailer' },
  { title: 'Hotshot', note: 'Any size, any type', photo: hotshot, alt: 'Pickup pulling a gooseneck hotshot trailer' },
  { title: 'Box Truck', note: '24, 26 & 28 ft', photo: boxTruck, alt: 'Straight box truck at a loading bay' },
  { title: 'Step Deck', note: '48 & 53 ft trailers only', photo: stepDeck, alt: 'Step deck trailer with its lower deck' },
  { title: 'RGN Trailer', note: 'Any size, any type', photo: rgn, alt: 'Lowboy RGN trailer loaded with a haul truck' },
  { title: 'Conestoga', note: '48 & 53 ft trailers only', photo: conestoga, alt: 'Conestoga trailer with its rolling tarp system' },
];

export default function SpecializationGrid() {
  return (
    <section className="section spec" id="spec">
      <div className="wrap">
        <Reveal className="sec-head center">
          <span className="eyebrow">Our Specialization</span>
          <h2 className="h-disp">Every Major Truck &amp; Trailer Type</h2>
          <p>Whatever you run, we know where it earns the most.</p>
        </Reveal>

        <div className="spec-grid">
          {SPECS.map((spec) => (
            <Reveal as="article" className="spec-card" key={spec.title}>
              <Image
                className="spec-media"
                src={spec.photo}
                alt={spec.alt}
                sizes="(max-width:560px) 92vw, (max-width:1024px) 46vw, 31vw"
              />
              <div className="spec-body">
                <h3>{spec.title}</h3>
                <small>{spec.note}</small>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="center">
          <Link className="btn btn-ghost" href="/services">
            Discover More <span className="arr">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
