const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        publicPath: '/',
        filename: 'build.js',
        historyApiFallback: true,
    },
    plugins: [
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            inject: "body",
            title: 'Title',
            template: 'src/index.html',
        }),
    ],
};
