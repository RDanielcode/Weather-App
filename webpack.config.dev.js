const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

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
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },

    stats: {
        children: true
    },

    plugins:[
        new HtmlPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],

    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3300
    }
}
