const { i18n } = require('./next-i18next.config');
const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,
  i18n,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
        child_process: false,
      };
    }

    return config;
  },
};
