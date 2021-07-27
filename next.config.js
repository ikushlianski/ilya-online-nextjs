const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

module.exports = {
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
};
