const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'build.[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js',
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            inject: 'body',
            template: 'src/index.html',
            title: 'Title',
            yandexMetrika: true,
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true,
                    }
                }
            })
        ]
    },
};
