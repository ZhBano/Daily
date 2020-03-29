const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports= {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'index.js',
        path:__dirname + '/dist'
    },
    plugins: [
       
        new HtmlWebpackPlugin({
        title:'热跟新',
        template:'./src/index.html'
    }),
        

],
devServer:{
    port:9528,
    open:true,
    hot:false,
    contentBase:__dirname+'/dist'
}



}