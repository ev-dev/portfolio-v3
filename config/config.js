import path from 'path'
import webpack from 'webpack'

export const ROOT_PATH = path.join(__dirname, '..')
export const APP_PATH = `${ROOT_PATH}/src`

export const CONFIG = {
  target: 'web',
  entry: [
    path.join(APP_PATH, 'main')
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],

    modules: [
      APP_PATH, 'node_modules'
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'BABEL_ENV': JSON.stringify(process.env.NODE_ENV),
      },
      '__DEV__': process.env.NODE_ENV === 'development',
      '__PROD__': process.env.NODE_ENV === 'production',
    })
  ]
}
