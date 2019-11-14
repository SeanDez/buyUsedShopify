const webpack = require("webpack");
const dotEnvWebpack = require("dotenv-webpack");
const path = require("path");

const webpackConfiguration = {
  entry : {
    productFlow : "./frontEnd/productFlow/index.tsx"
    , adminArea : "./adminArea/AdminAreaFull.tsx"
  }
  , output : {
    filename : "[name].output.js"
    , path : path.join(__dirname, "public")
  }
  , watch : true
  // , watchOptions : { aggregateTimeout : 300 }
  , devtool : 'inline-source-map'
  , mode : "development"
  , devServer : {
    port: 3000
    , contentBase : [path.join(__dirname, 'public')] // ['./public']
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
        , exclude : [/node_modules/, /outputScripts/, /\.dependabot/, /\.next/, /\.idea/, /lib/, /pages/, /\.dependabot/]
      }, {
        enforce : 'pre'
          , test : /\.js$/
          , loader : 'source-map-loader'
        }
      ]
  }
};

module.exports = webpackConfiguration;
