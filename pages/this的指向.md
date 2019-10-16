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


### ES6 箭头函数this指向
```js
//例子 1
var val=2
var obj={
    val:1,
    fn:()=>{
        console.log(this.val)
    }
}
obj.fn()
```
- `obj.fn()` ==> 输出 2   
- 箭头函数与普通函数的区别在于`箭头函数中的this是在定义函数的时候绑定，而不是在执行函数的时候绑定`
- 所谓的定义时候绑定，就是`this`是继承自父执行上下文！！中的`this`，比如这里的箭头函数中的`this.val`，箭头函数本身与fn平级以`key:value`的形式，也就是箭头函数本身所在的对象为`obj`，而`obj`的父执行上下文就是`window`，因此这里的`this.val`实际上表示的是`window.val`，因此输出的是2。(this只有在函数被调用，或者通过构造函数new Object()的形式才会有this)
- 所以上面的`obj`可以看成`obj={val:1,fn:()=>{console.log(this.val)}`,不难看出`fn`和`val`处于平级,由此`this.val=window.val`
```js
//例子 2
var val=2
var obj={
    val:1,
    fn(){
       this.val=3
     return {
         a:()=>{
           console.log(this.val)
       }
    }
    
    }
}
let b=obj.fn()
b.a()

```
- `b.a()` ==> 输出 3 分析一下
- 可以看到`a`在`fn`里面,不属于平级,而且箭头函数里面是没有`this`的,因此继承自父执行上下文,往上找,所以输出3,如果去掉`this.val=3` 输出1
```js
//例 3
var val=2
var obj={
    val:1,
    fn(){
        setTimeout(()=>{
            console.log(this.val)
        }) 

    }
}
obj.fn()
```
- 再看看这简单的例子 输出 2 

> 总结: 普通函数可以用 `.` 判断谁调用`this`就指向谁, 箭头函数相反,箭头函数是将`this`动态变静态, 因此判断`this`不用看谁调用,只看定义时的绑定就行了,通过判断是否同级,再往上找`this`

如果还是不懂可以参考一下这两篇文章 [普通函数+箭头函数](https://blog.csdn.net/w390058785/article/details/82884032)
[箭头函数](https://blog.csdn.net/weixin_39460408/article/details/80607792)

