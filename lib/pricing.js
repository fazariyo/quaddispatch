/**
 * PRICING DATA — edit here, the /pricing page follows.
 *
 * NOTE: every `fee` below is a PLACEHOLDER. Replace them with your real
 * dispatch percentages before going live.
 *
 *   type      — truck / trailer type, also used as the value in the
 *               "Truck type" select on /carrier-setup
 *   fee       — headline number rendered large and orange
 *   feeNote   — the small line under the fee
 *   lead      — one-line description under the card title
 *   features  — bullet list (keep to 4-5 short items so the cards stay even)
 */
export const pricing = [
  {
    type: 'Dry Van',
    fee: '5%',
    feeNote: 'of gross per load',
    lead: '48 & 53 ft trailers',
    features: [
      'Load sourcing on your preferred lanes',
      'Broker setup, rate cons & confirmations',
      'Invoicing and factoring coordination',
      '24/7 dispatcher on call',
    ],
  },
  {
    type: 'Reefer',
    fee: '5%',
    feeNote: 'of gross per load',
    lead: '48 & 53 ft temperature-controlled',
    features: [
      'Temperature-sensitive freight vetting',
      'Multi-stop and drop-and-hook planning',
      'Detention and layover claim support',
      '24/7 dispatcher on call',
    ],
  },
  {
    type: 'Flatbed',
    fee: '6%',
    feeNote: 'of gross per load',
    lead: '48 & 53 ft trailers',
    features: [
      'Securement and tarping requirements checked upfront',
      'Permit-aware routing for wide loads',
      'Direct shipper and broker relationships',
      '24/7 dispatcher on call',
    ],
  },
  {
    type: 'Step Deck',
    fee: '6%',
    feeNote: 'of gross per load',
    lead: '48 & 53 ft trailers',
    features: [
      'Over-dimensional freight matching',
      'Height and permit checks before booking',
      'Ramps, tarps and securement noted on every load',
      '24/7 dispatcher on call',
    ],
  },
  {
    type: 'Hotshot',
    fee: '7%',
    feeNote: 'of gross per load',
    lead: 'Any size, any type',
    features: [
      'Expedited and partial-load sourcing',
      'Weight-aware matching for CDL and non-CDL',
      'Backhaul planning to cut dead-head',
      '24/7 dispatcher on call',
    ],
  },
  {
    type: 'Box Truck',
    fee: '7%',
    feeNote: 'of gross per load',
    lead: '24, 26 & 28 ft',
    features: [
      'Local, regional and expedited freight',
      'Liftgate and dock requirements confirmed',
      'Load board plus direct broker coverage',
      '24/7 dispatcher on call',
    ],
  },
  {
    type: 'Power Only',
    fee: '5%',
    feeNote: 'of gross per load',
    lead: 'Load-out, hook & drop, tow-away',
    features: [
      'Drop-and-hook and trailer pool programs',
      'Hook, drop and tow-away assignments',
      'Trailer interchange paperwork handled',
      '24/7 dispatcher on call',
    ],
  },
];

/* What every plan includes, regardless of truck type. */
export const pricingIncludes = [
  'No forced dispatch — you approve every load',
  'No long-term contract, cancel any time',
  'No setup or hidden monthly fees',
  'A dedicated dispatcher, not a call queue',
];

export const pricingNote =
  'Percentages shown are placeholders. Final rate depends on your lanes, trailer type and how many trucks you run — call dispatch for an exact quote.';

/** Truck types for the carrier setup / contact selects. */
export const truckTypes = pricing.map((plan) => plan.type);

export default pricing;
