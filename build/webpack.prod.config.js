const path = require('path')
const webpack = require('webpack') //to access built-in plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const PROJECT_ROOT = path.resolve(__dirname, '../')
const NODE_MODULES = path.resolve(__dirname, 'node_modules')

var config = {
  name: 'app',
  mode: 'production',
  entry: {
    app: path.resolve(PROJECT_ROOT + '/src/main.jsx')
  },
  output: {
    publicPath: '/',
    path: path.resolve(PROJECT_ROOT, 'dist'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].chunk.[chunkhash:8].js'
  },
  devtool: '#source-map',
  optimization: {
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
        use: 'babel-loader',
        // exclude: /node_modules/,
        // include: path.resolve(PROJECT_ROOT, 'src')
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
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader'
        ]
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
    alias: {
      '@': path.resolve(PROJECT_ROOT, 'src')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].css",
      // chunkFilename: "css/[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(PROJECT_ROOT + '/src/index.html')
    })
  ]
}

module.exports = config