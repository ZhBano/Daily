const Koa =require('koa')
const app=new Koa()

app.use(async ctx=>{
    ctx.body='hello,word'
}).listen(3000)