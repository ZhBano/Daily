//原生创建服务器
let http = require('http').createServer((req,res)=>{}).listen(8081)
let io = require('socket.io')(http)
io.on('connection',(socket)=>{
    console.log('连接成功')
    
    //发送信息给客户端
    socket.emit('news',{msg:'Hello World'})

    //接收客户端返回的信息
    socket.on('client',data=>{
        console.log(data)
    })
    

    //单个发送
    socket.on('chat',data=>{
        socket.emit('serveChat',{meg:data.msg})
        console.log(data)
    })

    //简易聊天
    //多个发送  群播
    // 第一种
    socket.on('chat',data=>{
        io.emit('serveChat',{meg:data.msg})
        console.log(data)
    })

    // 第二种
    //fn 发送信息给客户端
    socket.on('chat',(data,fn)=>{
        fn(data.msg)
        console.log(data)
    })




})
