/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["rb.gy", "image.tmdb.org"],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
};
