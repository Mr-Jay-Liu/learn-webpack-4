const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack')

module.exports = {
    entry:{
        app:'./src/index.js',
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    mode:'production',
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'tree shaking'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ]
};