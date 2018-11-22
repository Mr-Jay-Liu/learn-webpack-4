const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry:{
        app:'./src/index.js',
        another:'./src/another-module.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    mode:'none',
    devtool:'source-map',
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'代码分离'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};