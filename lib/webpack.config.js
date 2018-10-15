const path = require("path")
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

const r = url => path.resolve(__dirname, url)
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        r('./src/index.js')
    ],
    output: {
        path: r('./dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'env', 'react'
                    ],
                    cacheDirectory: true,
                }
            }, 
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: `url-loader?limit=500&name=./src/public/images/[name].[ext]?[hash:8]`
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.tpl.html',
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
    },
    resolve: {
        extensions: ['.js', 'config.js', '.json'],
        alias: {
            '@components': path.resolve(__dirname, './src/componens'),
        }
    },
}