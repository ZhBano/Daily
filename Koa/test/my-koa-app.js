const Koa =require('koa')
const app=new Koa()
const router = require('koa-Router')();



//设置路由
router.get('/', (ctx, next) => {
    ctx.body='首页'
 
  });



router.get('/news', (ctx, next) => {
    ctx.body='新闻'
    //获取路径的参数
    console.log(ctx.query,'query') // { id: '11' }
 });



// 配置动态路由
 router.get('/news/:id', (ctx, next) => {
    ctx.body='动态路由'
 
 });


//开启路由
app.use(router.routes());


app.listen(3000)

