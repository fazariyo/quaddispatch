# Photography

Sourced from `pdispatchers-images.zip` (supplied), re-encoded to WebP at roughly
2x their largest on-page display box. Originals were 0.1–3 MB PNGs; everything
here totals ~600 KB.

| File | Used by |
| --- | --- |
| `spec-*.webp` | `components/SpecializationGrid.js` — one photo per truck/trailer type, matched to the card it fronts (flatbed, power only, reefer, dry van, hotshot, box truck, step deck, RGN, Conestoga) |
| `svc-*.webp` | `components/ServicesGrid.js` — one per service card (finding loads, assigning loads, billing, driver response) |
| `highway-night.webp` | Backdrop for the home hero (`Hero.js`) and every subpage banner (`PageBanner.js`) |
| `mountain-pass.webp` | Backdrop for the about band (`AboutStrip.js`) |

Both backdrops sit under a scrim (`.hero::before`, `.pbanner::before`,
`.about::before`) that carries the contrast for the copy on top — check those
before swapping in a lighter image.

Two files from the zip were deliberately left out: `WhatsApp-Image-…png` and
`22.webp` are the **Phoenix Dispatchers** logo and wordmark, i.e. another
company's branding. The decorative gold strips and small raster icons were also
skipped — the palette is orange, and the site draws its icons as SVG.
