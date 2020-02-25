const path = require('path');

const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

module.exports = withCss(
  withSass({
    webpack(config, options) {
      return config;
    },
    env: {
      API_URL: process.env.API_URL,
    },
  }),
);
