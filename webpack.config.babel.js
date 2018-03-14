import { resolve } from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const { NODE_ENV = 'development' } = process.env
const src = resolve(__dirname, 'src')
const dist = resolve(__dirname, 'dist')
const devtool = NODE_ENV === 'production' ? false : 'inline-source-map'

const extractScss = new ExtractTextPlugin({
  filename: 'TimePicker.css',
})

const Config = {
  context: __dirname,
  entry: {
    TimePicker: resolve(src, 'js/index.js'),
    TimePickerGlobal: resolve(src, 'js/global-index.js'),
  },
  output: {
    path: dist,
    filename: '[name].js',
    // library: 'TimePicker',
    // libraryTarget: 'umd',
  },
  devtool,
  target: 'web',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['env', { modules: false }]],
          plugins: ['transform-class-properties'],
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: extractScss.extract({
          use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
        }),
      },
    ],
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.scss'],
  },

  plugins: [extractScss],
}

export default Config
