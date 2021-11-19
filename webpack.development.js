const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        static: path.join(__dirname, 'build'),
        historyApiFallback: true,
    },
    output: {
        publicPath: '/',
        filename: 'main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            title: 'Title',
            template: 'src/index.html',
        }),
    ],
};
