/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["rb.gy", "image.tmdb.org", 'ibb.co'],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
};
