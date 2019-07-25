const path = require('path')
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const HtmlPlugin = require('html-webpack-plugin')
const MiniCssPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    /* 每增加一个页面都在这里引入口 */
    index: './src/index.js',
    'about-CGHK': './src/About-CGHK/about-CGHK.js',
    'about': './src/About/about.js',
    'about-committee': './src/About-committee/about-committee.js',
    'about-committee-link': './src/About-committee-link/about-committee-link.js',
    'perspective': './src/Perspective/perspective.js',
    'perspective-link': './src/Perspective-link/perspective-link.js',
    'events': './src/Events/events.js',
    'service': './src/Service/service.js',
    'service-link': './src/Service-link/service-link.js',
    'membership': './src/Membership/membership.js',
    'private-policy': './src/Private-Policy/private-policy.js',
    'service-research': './src/Service-Research/service-research.js',
    'donate': './src/Donate/donate.js',
    'contact': './src/Contact/contact.js',
    'publication': './src/Publication/publication.js',
    'media': './src/Media/media.js',
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
    // minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [
    new CleanPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!api', '!api/*', '!api/*/*'],
    }),
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
    new HtmlPlugin({
      template: './src/perspective-link.html',
      filename: 'perspective-link.html',
      chunks: ['perspective-link']
    }),
    new HtmlPlugin({
      template: './src/events.html',
      filename: 'events.html',
      chunks: ['events']
    }),
    new HtmlPlugin({
      template: './src/service.html',
      filename: 'service.html',
      chunks: ['service']
    }),
    new HtmlPlugin({
      template: './src/service-link.html',
      filename: 'service-link.html',
      chunks: ['service-link']
    }),
    new HtmlPlugin({
      template: './src/membership.html',
      filename: 'membership.html',
      chunks: ['membership']
    }),
    new HtmlPlugin({
      template: './src/private-policy.html',
      filename: 'private-policy.html',
      chunks: ['private-policy']
    }),
    new HtmlPlugin({
      template: './src/service-research.html',
      filename: 'service-research.html',
      chunks: ['service-research']
    }),
    new HtmlPlugin({
      template: './src/donate.html',
      filename: 'donate.html',
      chunks: ['donate']
    }),
    new HtmlPlugin({
      template: './src/contact.html',
      filename: 'contact.html',
      chunks: ['contact']
    }),
    new HtmlPlugin({
      template: './src/publication.html',
      filename: 'publication.html',
      chunks: ['publication']
    }),
    new HtmlPlugin({
      template: './src/media.html',
      filename: 'media.html',
      chunks: ['media']
    }),
    new HtmlPlugin({
      template: './src/about-committee.html',
      filename: 'about-committee.html',
      chunks: ['about-committee']
    }),
    new HtmlPlugin({
      template: './src/about-committee-link.html',
      filename: 'about-committee-link.html',
      chunks: ['about-committee-link']
    }),
    new MiniCssPlugin({
      filename: 'css/[name].style.css'
    })
  ]
}