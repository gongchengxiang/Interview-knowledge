const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  mode:'development',
  entry:{
    index:  [
      path.join(__dirname, 'src/index.js'),
      // path.join(__dirname, 'src/index.scss') // 也可以在入口js中 import，也可以在这个入口处写
    ],
  },
  output:{
    path: path.join(__dirname, 'dist'),
    filename: 'assets/js/[name]-[chunkhash:8].js',
    publicPath: './',
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use:[ 
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 
          'sass-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name]-[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name]-[chunkhash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: `index.html`,
      inject: 'body',
      favicon: 'src/favicon.ico',
      chunks: ['index']
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}