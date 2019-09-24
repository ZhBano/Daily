const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry: './src/test.js',  // 入口
    mode: 'development',  //  打包模式
    output: { // 出口
        path: __dirname + '/build',  //  导出路径
        filename: 'index.js' // 导出的文件名
    },
    plugins: [new HtmlWebpackPlugin({template:'./src/index.html'})],  // 插件
    module: {
        rules: [
            {
                test: /\.css$/,  // 匹配所有.css后缀文件
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,  // 匹配所有.scss后缀文件
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}