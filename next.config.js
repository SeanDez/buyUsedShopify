const { parsed: localEnv } = require("dotenv").config();
const withCSS = require("@zeit/next-css");
const path = require('path');

const webpack = require("webpack");
const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY);

module.exports = withCSS({
  webpack: config => {
    const env = { API_KEY: apiKey };
    config.plugins.push(new webpack.DefinePlugin(env));
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/' // relative to main output path
          }
        }
      ]
    });
    
    config.node = {fs: "empty"};
  
    return config;
  }
});
