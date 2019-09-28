const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")


module.exports = {
  entry:{
    app:"./src/index.js"
  },
  devtool:"inline-source-map",
  devServer:{
    contnetBase:"./dist",
    hot:true
  },
  output:{
    name:"[name].bundle.js",
    path:path.resolve(__dirname,"dist")
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:"tree Shaking"
    }),
    new webpack.HotModuleReplacementPlugin()
<<<<<<< HEAD
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'css-loader',
          'style-loader'
        ]
      }
    ]
  }
=======
  ]
>>>>>>> 9181b1f4cc9317ba765f4d60990a44adcb1ddb22
}