const { i18n } = require('./next-i18next.config');
const withTM = require('next-transpile-modules')(['puppeteer-core']);

module.exports = withTM({
    reactStrictMode: true,
    i18n,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        });

        return config;
    },
});
