const path = require('path');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        },
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    devtool: 'inline-source-map',
    output: {
        filename: "main.js"
    },
    plugins: [
        new MiniCSSExtractPlugin(),
        new HtmlWebpackPlugin( {
            template: "./src/index.pug",
            filename: "index.html",
            title: "Development"
        }),
        new TerserWebpackPlugin(),
        new CSSMinimizerWebpackPlugin(),
        new ESLintWebpackPlugin(),
        new StylelintPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin(), new CSSMinimizerWebpackPlugin()]
    },
    module: {
        rules: [
            {
                use: [{
                    loader: MiniCSSExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, 'css-loader'],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            },
        ]
    }
};