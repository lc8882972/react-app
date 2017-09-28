const path = require('path')
const webpack = require('webpack') //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index.js'
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // chunkFilename: '[id].[chunkhash:8].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      // {
      //   test: require.resolve('jquery'),
      //   use: [{
      //     loader: 'expose-loader',
      //     options: '$'
      //   }]
      // },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader',
          }],
          use: [
            {
              loader: 'css-loader' // translates CSS into CommonJS
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function (module) {
    //     // any required modules inside node_modules are extracted to vendor
    //     return (
    //       module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
    //     )
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   chunks: ['vendor']
    // }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config