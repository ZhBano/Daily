const {
    Server
}= require('ws')

//创建websocket服务器
let ws = new Server({
    port:8080
})

//创建连接
ws.on('connection',res=>{
    //打印所有客户端
    console.log(ws.clients)

    //连接如果成功就会返回服务端的信息
    // res.send('hello world')

    //接受客户端传来的信息
    //单体发送
    // res.onmessage = msg =>{
    //     console.log(msg.data)
    //     res.send('我收到信息了')
    // }

    //群体发送
    res.onmessage = msg =>{
          ws.clients.forEach(function(client) { 
        client.send(msg.data)
    }); 
      
    }
   
    
})

