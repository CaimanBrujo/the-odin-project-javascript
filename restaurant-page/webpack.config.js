const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../docs/restaurant-page'),
        filename: 'main.js',
        clean: true,
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            filename: 'index.html',
        }),
    ],
};
