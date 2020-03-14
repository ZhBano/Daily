# webpack的基本配置




# 安装

gulp全局安装 gulp的命令

webpack webpack的命令

全局和本地安装都要各安装一次
```bash
cnpm install webpack webpack-cli
cnpm install webpack webpack-cli -g
yarn add webpack --global 
```

# 四个核心概念

- 入口(entry)
- 输出(output)
- loader
- 插件(plugins)

# 配置文件

先新建一个`webpack.config.js`文件

相当于`gulpfile.js`

# 定义出口和入口


```js
const path =require('path')

module.exports = {
    mode: 'production',  //模式
    
    //入口
    //这种方式则会生成两个js文件
    entry:{ 
       index: './src/index.js',
       second:'./src/second.js'
    },
      output:{
        filename:'[name].js',
        path:path.join(__dirname,'dist')
    }


    // 数组方式会合并到一个js里面
    // entry:[
    //      './src/index.js',
    //     './src/second.js'
    // ],
    // output:{
    //     filename:'index.js',
    //     path:path.join(__dirname,'dist')
    // }
}

```

# 编译

在`webpack.config.js`的目录下终端中执行`webpack`的命令

编译成功后，在`output`文件下会生成`bundle.js`，这份文件就是被`webpack`给打包成功的文件