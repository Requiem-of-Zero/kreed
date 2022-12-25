/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["image.tmdb.org", "drive.google.com"],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
};
