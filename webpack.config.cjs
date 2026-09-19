const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mode: 'development', 
  entry: './src/dom.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather App',
        }),

        new webpack.DefinePlugin({
            API_KEY: JSON.stringify(process.env.API_KEY),
        }),
    ],
};
