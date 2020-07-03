const path = require('path');

const withSass = require('@zeit/next-sass');

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

module.exports = withSass({
  webpack(config, options) {
    return config;
  },
  env: {
    API_URL: process.env.API_URL,
  },
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    return {
      '/front-page': { page: '/front-page' },
      '/about': { page: '/about' },
      '/works': { page: '/works' },
      '/skills': { page: '/skills' },
      '/cv': { page: '/cv' },
    };
  },
});
