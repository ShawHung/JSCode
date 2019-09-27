const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  mode:"development",
  entry: {
    app: "./src/index.js",
  },
  devtool:"inline-source-map",
  devServer:{
    contentBase:'./dist',
    hot:true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "模块热替换"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};
