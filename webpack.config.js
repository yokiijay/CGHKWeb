const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    /* 每增加一个页面都在这里引入口 */
    index: './src/index.js',
    'about-CGHK': './src/About-CGHK/about-CGHK.js',
    'about': './src/About/about.js',
    'perspective': './src/Perspective/perspective.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    host: '0.0.0.0',
    overlay: true,
    hot: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            // options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            // options: { sourceMap: true }
          },
          {
            loader: 'resolve-url-loader',
            // options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          },
        ]
      },
      {
        test: /\.(jpg|png|svg|gif|webp)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images'
          }
        }]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new CleanPlugin(),
    /* 每增加一个页面都在这里引入口 + chunks */
    new HtmlPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlPlugin({
      template: './src/about-CGHK.html',
      filename: 'about-CGHK.html',
      chunks: ['about-CGHK']
    }),
    new HtmlPlugin({
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
    new HtmlPlugin({
      template: './src/perspective.html',
      filename: 'perspective.html',
      chunks: ['perspective']
    }),
  ]
}