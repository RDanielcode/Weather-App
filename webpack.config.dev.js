const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    resolve:{
        extensions :['.js']
    },

    mode: 'development',

    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },

            {
                test: /\.css$/,
                use: [
                    MiniCssPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.jpg$/,
                loader: 'file-loader',
            }
        ]
    },

    plugins:[
        new HtmlPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),

        new MiniCssPlugin({
            filename: 'assets/[name].css'
        })
    ],

    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3300
    }
}
