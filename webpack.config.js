const path = require('path');

const settings = {
    development: require('./webpack.development'),
    production: require('./webpack.production'),
};

module.exports = (env, {mode}) => {
    return {
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
                path.resolve('./node_modules'),
            ],
            alias: {
                Actions: path.resolve(__dirname, 'src/actions/'),
                Components: path.resolve(__dirname, 'src/components/'),
                Constants: path.resolve(__dirname, 'src/constants/'),
                Helpers: path.resolve(__dirname, 'src/helpers/'),
            },
        },
        ...settings[mode],
    }
};
