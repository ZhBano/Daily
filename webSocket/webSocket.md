# 重温 HTTP 协议
HTTP 协议可以总结几个特点：

- 一次性的、无状态的短连接：客户端发起请求、服务端响应、结束。
- 被动性响应：只有当客户端请求时才被执行，给予响应，不能主动向客户端发起响应。
- 信息安全性：得在服务器添加 SSL 证书，访问时用 HTTPS。
- 跨域：服务器默认不支持跨域，可在服务端设置支持跨域的代码或对应的配置。

# 认识 TCP
TCP 协议可以总结几个特点：

- 有状态的长连接：客户端发起连接请求，服务端响应并建立连接，连接会一直保持直到一方主动断开。
- 主动性：建立起与客户端的连接后，服务端可主动向客户端发起调用。
- 信息安全性：同样可以使用 SSL 证书进行信息加密，访问时用 WSS 。
- 跨域：默认支持跨域。

# 认识 WebSocket
WebSocket 目前由 W3C 进行标准化。WebSocket 已经受到 Firefox 4、Chrome 4、Opera 10.70 以及Safari 5 等浏览器的支持。 如果在前端我们可以把 AJAX 请求当作一个 HTTP 协议的实现，那么，WebSocket 就是 UDP 协议的一种实现。

# 服务端
- 安装第三方模块 ws：npm install ws
- 开启一个 WebSocket 的服务器，端口为 8080
```js
const {
    Server
}= require('ws')

//创建websocket服务器
let ws = new Server({
    port:8080
})

```
- 用 on 来进行事件监听
- connection：连接监听，当客户端连接到服务端时触发该事件
- close：连接断开监听，当客户端断开与服务器的连接时触发
- message：消息接受监听，当客户端向服务端发送信息时触发该事件
- send: 向客户端推送信息
```js
//创建连接
ws.on('connection',res=>{
    //打印所有客户端
    console.log(ws.clients)

    //连接如果成功就会返回服务端的信息
    res.send('hello world')
    } 

    //接受客户端传来的信息
    //单体发送
    res.onmessage = msg =>{
        console.log(msg.data)
        res.send('我收到信息了')
    }

    //群体发送
    res.onmessage = msg =>{
          ws.clients.forEach(function(client) { 
        client.send(msg.data)
    }); 
})
```
# 客户端
- 与服务器进行连接
```js
  //创建ws连接 需要开启服务器
        let ws=new WebSocket('ws://localhost:8080');
        console.log(ws) 
```
- onopen 监听客户端与服务器是否进行连接
```js
        //当网络连接建立时触发该事件
        ws.onopen=()=>{
            console.log('已连接')
        }
```      
- onmessage 监听服务器传来的信息
```js  
        //监听服务器广播过来的消息
        ws.onmessage= msg => {
            console.log(msg.data)
        }
```
- send 向服务器发送信息
```js
  document.getElementById('btn').onclick=()=>{
            // console.log(val.value)
            ws.send(val.value)
        }
```
- onclose：当服务端关闭时触发该事件
```js
//监听服务端断开
socket.onclose = function(){
    socket = null;
}
```