const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    mode: 'development',
    module: {
        rules:[
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /styles\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template:'./src/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,
        }),
    ]
}