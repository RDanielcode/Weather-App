const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
// const CssMinimizer = require('css-minimizer-webpack-plugin');
const TerserPLugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    resolve:{
        extensions :['js']
    },

    mode: 'production',

    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
            },

            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },

            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    stats: {
        children: true
    },

    plugins:[
        new HtmlPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),

        new MiniCssPlugin({
            filename: '[name].css'
        }), 
    ],

    optimization:{
        minimize: true,
        minimizer: [
            // new CssMinimizer(),
            new TerserPLugin(),
        ]
    },

    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3300
    }
}
