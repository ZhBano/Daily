# Object.assign()方法的使用
 Object.assign()这个方法是ES6提供来实现浅复制的
 ## 语法 
 ```js
  Object.assign(target, ...sources);
 ```
 ## 参数
 - target: 目标对象
 - sources: 源对象
 ## 描述
 ```js
 const objA = { name: 'xx', age: 14}
 const obj =object.assign({},objA)
 //将objA里面的对象复制到一个空的对象中,如果用重名的话后面的将会替代前面的值
 //这种方法感觉像obj={...objA}
 ```
 ## Demo
 ```js
 // ES6 对象提供了 Object.assign()这个方法来实现浅复制。
// Object.assign() 可以把任意多个源对象自身可枚举的
// 属性拷贝给目标对象，然后返回目标对象。第一参数即为目标对象
// 在实际项目中，我们为了不改变源对象。一般会把目标对象传为{}
 
const objA = { name: 'xx', age: 14}
const objB = { adress: 'shanghai'}
const objC = {}
const obj = Object.assign(objC, objA, objB)
 
//  Object.assign(目标对象, 源对象 ...)
console.log(objA) // { name: 'xx', age: 14}
console.log(objB) // { adress: 'shanghai'}
console.log(objC) // { name: 'xx', age: 14, adress: 'shanghai'}
console.log(obj) // { name: 'xx', age: 14, adress: 'shanghai'}

 ```
 ```js
 const object1 = {
  a: 1,
  b: 2,
  c: 3
};
const object2 = Object.assign({c: 4, d: 5}, object1);
console.log(object2.c, object2.d);
// expected output: 3 5 sources原有的不会被覆盖
 ```