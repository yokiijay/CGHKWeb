const path = require('path')
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    about: './src/About/about.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    host: '0.0.0.0',
    overlay: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader', 'postcss-loader', 'resolve-url-loader',{
          loader: 'sass-loader',
          options: { sourceMap: true }
        }]
      },
      {
        test: /\.(jpg|png|svg|gif|webp)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images',
          }
        }]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new CleanPlugin(),
    new HtmlPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlPlugin({
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about']
    }),
    new MiniCssPlugin({
      filename: 'css/[name].style.css'
    })
  ]
}