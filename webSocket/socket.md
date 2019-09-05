# 认识soket.io
 soket.io 可以理解为对 WebSocket 的一种封装。 soket.io 依靠事件驱动的模式，灵活的使用了自定义事件和调用事件来完成更多的场景，不必依赖过多的原生事件。

# 服务端
- 安装第三方模块 `npm install socket.io`
```js
//原生创建服务器
let http = require('http').createServer((req,res)=>{}).listen(8081)
let io = require('socket.io')(http)
io.on('connection',(socket)=>{
    console.log('连接成功')
})
```
- `socket.emit` 发送消息给客户端

```js
  socket.emit('news',{msg:'Hello World'})
```

-  `socket.on`监听客户端传来的数据
```js
  socket.on('chat',(data,fn)=>{
        fn(data.msg)  //返回客户端数据
        console.log(data)
    })
```

# 客户端
```js
    //创建连接
        let socket = io('http://localhost:8081')    
        console.log(socket)

        //监听服务器传来的信息
        socket.on('news',(data)=>{
            console.log(data)
        })


        //第三个参数接收服务器返回的回调
         socket.emit('chat',{msg:val},data=>{
               document.querySelector('#msg').innerHTML +=`<li>${data}</li>`
           })
```

写的有点粗略 很多api没有用到 具体的api可以参考[这里](https://socket.io/)
