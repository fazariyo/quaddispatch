/** @type {import('next').NextConfig} */

/*
 * The site is served from https://quaddispatch.com at its root, so no path
 * prefix. It used to live at https://fazariyo.github.io/quaddispatch, where
 * every route and asset needed a /quaddispatch prefix; that URL now redirects
 * to the domain. Set NEXT_PUBLIC_BASE_PATH to go back to a subpath — and note
 * that a wrong prefix here 404s every asset, since basePath rewrites the URLs
 * inside the HTML but not where the files land in out/.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig = {
  reactStrictMode: true,

  // Emit a plain static site into out/. GitHub Pages cannot run a Node server,
  // which is also why app/api/* had to go — route handlers cannot be exported.
  output: 'export',

  // No image optimizer sits in front of Pages.
  images: { unoptimized: true },

  // Export each route as a directory + index.html, so /services/ resolves
  // without depending on the host guessing a .html extension.
  trailingSlash: true,

  basePath,
};

export default nextConfig;
