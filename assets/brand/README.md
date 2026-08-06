# Brand assets

Built from the supplied logo PNG (white background, dark navy + blue artwork).

| File | Where it is used |
| --- | --- |
| `logo.png` | The artwork as delivered, white surround flood-filled to transparent. Source for anything on a **light** background, and what the favicons were cut from. |
| `logo-on-dark.png` | Same lockup, lightened for dark surfaces — neutral ink inverted, brand blue brightened. Used by the Open Graph / Twitter card (`lib/shareImage.js`). |
| `badge-on-dark.png` | The truck-and-tires half of `logo-on-dark.png`, wordmark cropped off. The header and footer lockup (`components/BrandBadge.js`). |

The full lockup carries its own DISPATCH wordmark, which is illegible at header
height — hence the badge crop, with the site's type lockup spelling the name.

`app/icon.png` and `app/apple-icon.png` are the badge on the logo's native
white, so they read on both light and dark browser chrome.
