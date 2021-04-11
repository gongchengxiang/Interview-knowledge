const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports={
  entry:{
    index: path.resolve(__dirname,'src/index.js')
  },
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'assets/js/[name]-[chunkhash:8].js',
    chunkFilename:'assets/js/[name]-[chunkhash:8].js',
    publicPath: './'
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        include: /src/,
        use: { loader: 'babel-loader' }
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
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name]-[contenthash:8].css',
      chunkFilename: "assets/css/[name].[contenthash:8].css"
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: `index.html`,
      inject: 'body',
      favicon: './public/favicon.ico',
      // chunks: ['index'],
      title: 'webpack study'
    }),
    new CleanWebpackPlugin(),
  ],
}