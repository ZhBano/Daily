let fs =require('fs')
let data=require('./data.js')
// import data from './data.js'

function writeFile(path,content,flag ){
    return new Promise((resolve,reject)=>{
           fs.writeFile(path,content,{flag },err=>{
        if(err) throw err
        resolve()
        console.log('已保存')
    })
    })
 
}

writeFile('index.html',data)
// console.log(data,'data')