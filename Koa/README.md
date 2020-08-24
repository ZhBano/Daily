# Koa是什么？

Koa是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架, 不在内核方法中绑定任何中间件， 它仅仅提供了一个轻量优雅的函数库,最大的特点就是可以避免异步嵌套
<br/>
<br/>
<br/>

# Koa的基本使用
```js
// 引入Koa
var koa = require('koa');
// 实例化Koa
var app = new koa();
 
// 配置中间件
app.use( async(ctx)=>{
    ctx.body = "你好,koa"
});
 
// 监听端口
app.listen(3000)
```
<br/>
<br/>
<br/>

# 使用路由
```
npm i koa-Router
```

基本使用
```js

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


```


