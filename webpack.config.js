const path = require('path');

const settings = {
    development: require('./webpack.development'),
    production: require('./webpack.production'),
};

module.exports = (env, config) => {
    config = config || {mode : 'development'};

    return {
        mode: config,
        entry: path.join(__dirname, './src/index.tsx'),
        module: {
            rules: [{
                test: /\.(js|ts|tsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }, {
                test: /\.less/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
            }, {
                test: /\.css/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            }],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            modules: [
                path.resolve('./node_modules'),
            ],
            alias: {
                "~": path.resolve(__dirname, 'src'),
            },
        },
        ...settings[config.mode],
    }
};
