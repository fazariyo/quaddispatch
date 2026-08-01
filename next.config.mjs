/** @type {import('next').NextConfig} */

/*
 * The site is served from https://fazariyo.github.io/quaddispatch, so every
 * route and asset needs the /quaddispatch prefix. Moving to a custom domain at
 * the root later is a one-liner: build with NEXT_PUBLIC_BASE_PATH= (empty).
 *
 * basePath already prefixes _next/static for us, so no assetPrefix is needed —
 * setting both is redundant.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/quaddispatch';

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
