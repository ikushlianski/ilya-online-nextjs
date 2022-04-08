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
    LOOKING_FOR_JOB: process.env.LOOKING_FOR_JOB,
  },
});
