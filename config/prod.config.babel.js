const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'main'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        babelrc: false,
        presets: [require.resolve('babel-preset-react-app')]
      }
    },
    {
      test: /\.(css|scss|sass)$/,
      include: path.resolve(__dirname, 'src'),
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1
          }
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css', '.scss', '.sass', '*'],
    alias: {
      'babel-runtime': path.dirname(
        require.resolve('babel-runtime/package.json')
      )
    }
  },
  devtool: 'source-map',
  plugins: []
}