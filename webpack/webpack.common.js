const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = function (options) {
   return {
      name: 'app',
      target: 'web',
      entry: './src/main.tsx',
      resolve: {
         extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
      module: {
         loaders: [
            {
                  test: /\.ts$/,
                  enforce: 'pre',
                  loader: 'tslint-loader',
                  // options: { 
                  //       typeCheck: true
                  // }
            },
            { 
                  test: /\.tsx?$/, 
                  use: [
                        {
                              loader: 'babel-loader',
                              options: {
                                    presets: ['@babel/preset-env', '@babel/preset-react'],
                              }
                        },
                        {
                              loader: 'awesome-typescript-loader' 
                        },
                  ]
            },
            {
                  test: /\.jsx?$/,
                  exclude: /node_modules/,
                  loader: 'babel-loader',
                  options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                  }
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
               test: /\.scss$/,
               loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
               test: /\.(eot|svg|ttf|woff|woff2)$/,
               loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
         ],
      },
      plugins: [
         new ExtractTextPlugin({
            filename: '[name].[hash:8].css',
            allChunks: true
         }),
         new CheckerPlugin()]
   }
};