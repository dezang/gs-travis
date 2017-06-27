const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/main.js',    
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },   
}