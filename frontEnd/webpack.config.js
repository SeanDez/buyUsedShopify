const webpack = require("webpack");
const dotEnvWebpack = require("dotenv-webpack");
const path = require("path");

const webpackConfiguration = {
  entry : {
    productFlow : path.join(__dirname, "productFlow/index.tsx")
    , registrationFlow : path.join(__dirname, 'registrationFlow/index.tsx')
  }
  , output : {
    filename : "outputFiles/[name].output.js"
    , path : path.resolve(__dirname, "")
    , publicPath : '/'
  }
  , watch : true
  // , watchOptions : { aggregateTimeout : 300 }
  , devtool : 'inline-source-map'
  , mode : "development"
  , devServer : {
    port: 3000
    , contentBase : [
      path.join(__dirname, 'productFlow')
      , path.join(__dirname, 'registrationFlow')
    ]
    , hot : true
    , historyApiFallback : true
  }
  , plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new dotEnvWebpack
  ]
  , node : {
    fs: "empty" // for dotenv to work correctly
  }
  , resolve : { extensions : ['.ts', '.tsx', '.js'] }
  , module : {
      rules : [
        {
        test : /\.ts(x?)$/
        , use : {
          loader: 'awesome-typescript-loader'
        }
        , exclude : [/node_modules/, /outputFiles/]
      }, {
        enforce : 'pre'
          , test : /\.js$/
          , loader : 'source-map-loader'
        }
      ]
  }
};

module.exports = webpackConfiguration;
