const Koa =require('koa')
const app=new Koa()
const router = require('koa-Router')();


/**
 * 中间件优先级最高 
 * next的意思相当于是否继续执行下面方法
 * 如果没有写next 则会中断不再执行
 * */
app.use(async (ctx,next)=>{
   console.log(4)
   await next()
   console.log(5)
})

app.use(async (ctx,next)=>{
   console.log(6)
   await next()
   console.log(7)
})


//设置路由
router.get('/',  async (ctx, next) => {
    console.log(1)
    ctx.body='首页'
  await next();
  console.log(2)
  });



router.get('/news',async (ctx, next) => {
    console.log(3)
    ctx.body='新闻'
    //获取路径的参数
    console.log(ctx.query,'query') // { id: '11' }
 });



// 配置动态路由
 router.get('/news/:id', (ctx, next) => {
    ctx.body='动态路由'
    console.log(4)
 
 });


//开启路由
app.use(router.routes());


app.listen(3000)

