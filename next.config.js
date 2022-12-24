/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["rb.gy"],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
};
