/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/home',
  images: {
    domains: ["image.tmdb.org", 'api.themoviedb.org'],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
};
