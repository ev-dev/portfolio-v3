const path = require('path')
const webpack = require('webpack')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: path.join(__dirname, 'src', 'main'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, 'src'),
      loader: require.resolve('babel-loader'),
      options: {
        babelrc: false,
        presets: [require.resolve('babel-preset-react-app')],
        cacheDirectory: true
      }
    },
    {
      test: /\.css$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      use: [
        // require.resolve('style-loader'),
        // {
        //   loader: require.resolve('css-loader'),
        //   options: {
        //     importLoaders: 1
        //   }
        // },
        'style-loader', 
        { 
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        {
          loader: 'postcss-loader',
          options: {
            config: { path: './postcss.config.js'}
          }
        }
      ]
    },
    {
      test: /\.(png|jpg|jpeg)$/,
      loader: require.resolve('url-loader')
    }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '*'],
    alias: {
      'babel-runtime': path.dirname(
        require.resolve('babel-runtime/package.json')
      )
    }
  },
  devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',
  plugins: isDev
    ? [
      new LiveReloadPlugin({
        appendScriptTag: true
      })
    ]
    : []
}