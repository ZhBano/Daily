# Vue
 一套用于构建用户界面的渐进式框架
# vue实例
```js
//创建一个vue实例
var vm = new Vue({
  // 选项
}) 
```
或
```js
new Vue({
    el:'./#demo',
    data:{
        //数据对象
    },
    methods:{
        //function
    },
    conputed:{
        //计算属性
    }，
    watch:{
        //监听事件
    },
    template:`
    字符串模板
    `
   
})

```
都是vue实例   
- `el`可以理解为一个`作用域`或者`id名/类名`
- `data` 数据对象
- `methods` 方法 所有的事件都写在里面
- `conputed` 计算属性 里面也可以放函数，如果模板内的表达式有逻辑的就可以放到`conputed`里面
- `watch` 监听事件
  ```js
   computed:{
               name(){    (es6写法)
                   let firename='hello';
                   return firename + this.lastname
               },
                ==》相当于 
                name:function(){
                    let firename='hello';
                   return firename + this.lastname
                }


               nn1(){
                return this.lastname.length
               }

           },
      
            watch: {
                name(){
                    console.log(this.name)

                },
               
            }
  ```
`watch`监听`name`方法,获取方法里面值，`watch`监听的函数名要跟上面的一样才能监听到,只能用于同一个组件  

 
# 路由
props传参
首先在`router.js`里面创建一个props
```js
{
        path: 'sectio',
        component: sectio,
        name: 'sectio',
        props: {
          default: true,
          skill: ['123', 'js']
    
        },
        
      }
```
如果想在哪里调用它就在哪个组件里面调用
```js
//组件sectio
export default {
    props: ['skill']
   
}
```

