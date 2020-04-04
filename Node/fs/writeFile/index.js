let fs =require('fs')


function writeFile(path,content,flag ){
    return new Promise((resolve,reject)=>{
           fs.writeFile(path,content,{flag },err=>{
        if(err) throw err
        resolve()
        console.log('已保存')
    })
    })
 
}


writeFile('file.txt','测试\n').then(res=>{
    writeFile('file.txt','追加\n','a')
})



// a=>追加 默认覆盖

//then写法
writeFile('file.txt','测试2\n','a').then(res=>{
    writeFile('file.txt','追加3\n','a')
})


//es6
async function newWriteFile(){
   await writeFile('file.txt','测试2\n','a')
   await writeFile('file.txt','追加3\n','a')
 
}



