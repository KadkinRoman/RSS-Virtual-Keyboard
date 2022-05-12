const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const loader = require('sass-loader');
const ESLintPlugin = require('eslint-webpack-plugin');


let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: mode,
    entry: {
        scripts: './src/index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new ESLintPlugin({
            emitWarning: false
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
                //При работе с pug заменить на index.pug
        })
    ],
    module: {
        rules: [{
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(sa|c|sc)ss$/i,
                use: [
                    (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            //options
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.pug$/i,
                loader: 'pug-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.m?js$/i,
                exclude: /(node_modules|dist)/,
                use: ['babel-loader']
            }
        ]
    }
}