const path =require('path')

module.exports = {
    mode: 'production',
    entry:{
       index: './src/index.js',
       second:'./src/second.js'
    },
    // entry:[
    //      './src/index.js',
    //     './src/second.js'
    // ],
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'dist')
    }
}