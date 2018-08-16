const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),

    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(js|jsx)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.less/,
            loader: 'style-loader!css-loader!postcss-loader!less-loader',
        }, {
            test: /\.css/,
            loader: 'style-loader!css-loader!postcss-loader',
        }],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules'),
        ],
    },
};
