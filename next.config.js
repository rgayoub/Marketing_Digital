/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const nextConfig = {
  images: {
    domains: ['flowbite.s3.amazonaws.com'],
  },
};

module.exports = withVideos(nextConfig);