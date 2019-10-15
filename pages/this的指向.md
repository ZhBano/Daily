# This指向问题
### this指向只和调用函数的对象有关,看一下面的例子
```js
//例 1
var val=2
const obj={
    val:1,
    fn(){
        console.log(this.val)
    }
}
obj.fn()  
let obj1= obj.fn
obj1()
```
其实想知道`this`的指向无非看`.`谁调用它,我们来分析一下   
- `obj.fn()` ==> 输出 1  `obj.`就是调用`fn` 所以`this`指向这个对象的上下文(`context`) 也就是指向obj对象内部的`val`   
- `obj1()` ==> 输出 2  我们可以把`obj1()`看过`window.obj1()` 所以`this`指向全局的`val` 

```js
//例 2
var val=2
var obj={
    val:1,
    fn(){
        return  function(){
             console.log(this.val)
        }
       
    }
}
obj.fn()() 
```
那我们加个`return`呢
- `obj.fn()()` ==> 输出 2 咦 什么意思? 我们分解一下 首先`obj.fn()` ==> 输出 `function(){console.log(this.val) }` 然后加个`()` 不就===`window()` 所以`this`指向全局

