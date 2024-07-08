const { webpack } = require('next/dist/compiled/webpack/webpack');
const { i18n } = require('./next-i18next.config')
const withTM = require('next-transpile-modules')(['puppeteer']);

module.exports = withTM({
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
    }
});