import { resolve } from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

const { NODE_ENV = 'development' } = process.env
const src = resolve(__dirname, 'src')
const dist = resolve(__dirname, 'dist')
const devtool = NODE_ENV === 'production' ? false : 'inline-source-map'
console.log(devtool)

const extractScss = new ExtractTextPlugin({
    filename: 'TimePicker.css',
})


const Config = {
    context: __dirname,
    entry: resolve(src, 'js/timepicker.js'),
    output: {
        path: dist,
        filename: 'TimePicker.js',
        library: 'TimePicker',
        libraryTarget: 'umd',
    },
    devtool,
    target: 'web',

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['env'],
                plugins: ['transform-class-properties'],
            }
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: extractScss.extract({
                use: [
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            })
        }]

    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.scss'],
    },

    plugins: [
        extractScss,
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'stats.html',
            openAnalyzer: NODE_ENV === 'production',
            generateStatsFile: false,
            logLevel: 'error',
        }),
    ],
}

export default Config