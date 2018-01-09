import { CONFIG, APP_PATH } from './config'
import { HotModuleReplacementPlugin, NamedModulesPlugin } from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default merge({
  entry: [
    'react-hot-loader/patch',
  ],

  devtool: 'eval',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }))
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: require.resolve('url-loader')
      }
    ]
  },
  // module: {
  //   rules: [{
  //     test: /\.css$/,
  //     use: [{
  //       loader: 'style-loader'
  //     }, {
  //       loader: 'css-loader',
  //       query: {
  //         modules: true,
  //         localIdentName: '[local]__[path][name]__[hash:base64:5]'
  //       }
  //     }]
  //   }]
  // },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${APP_PATH}/index.html`
    })
  ],

  performance: {
    hints: false,
  },

  devServer: {
    historyApiFallback: true,
    contentBase: APP_PATH,
    openPage: '',
    inline: true,
    noInfo: false,
    open: true,
    port: 9999,
    hot: true,

    stats: {
      errorDetails: true,
      publicPath: false,
      children: false,
      warnings: true,
      version: true,
      modules: false,
      timings: true,
      reasons: false,
      colors: true,
      assets: true,
      chunks: false,
      source: false,
      errors: true,
      hash: true,
    },
  },
}, CONFIG)
