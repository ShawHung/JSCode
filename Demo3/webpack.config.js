const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")


module.exports = {
  entry:{
    app:"./src/index.js"
  },
  devtool:"inline-source-map",
  output:{
    name:"[name].bundle.js",
    path:path.resolve(__dirname,"dist")
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:""
    })

  ]
}