/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "rb.gy",
      "image.tmdb.org",
      "https://lh3.googleusercontent.com/",
    ],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
};
