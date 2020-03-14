var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports= {
    mode:'production',
    entry:'./src/index.js',
    output:{
        filename:'[hash].js',
        path:__dirname + '/dist'
    },

    module:{
        rules:[
            {
                test: /\.css$/, // 匹配所有.css后缀文件
                use:['style-loader', 'css-loader']

            },

            {
                test: /\.scss$/,  // 匹配所有.scss后缀文件
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
        title:'动态生成html',
        template:'./src/index.html'
    })
]

}