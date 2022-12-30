/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["image.tmdb.org", "api.themoviedb.org", "i.pinimg.com"],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
};
