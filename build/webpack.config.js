const path = require('path')
const webpack = require('webpack') //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const manifest = require('../vendor-manifest.json')

const ROOTDIR = path.resolve(__dirname, '../')
var config = {
  mode: 'development',
  entry: {
    app: [
      'react-hot-loader/patch',
      // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/entry.jsx'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router-dom',
      'redux',
      'react-redux',
      'react-router-redux',
      'axios'
    ]
  },
  output: {
    publicPath: '/',
    path: path.resolve(ROOTDIR, 'dist'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash:8].js'
  },
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    // runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(ROOTDIR, 'src')
    },
    // modules: [path.resolve(ROOTDIR, 'src'), 'node_modules']
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new BundleAnalyzerPlugin(),
    new webpack.DllReferencePlugin({
      manifest
    }),
  ]
}

module.exports = config