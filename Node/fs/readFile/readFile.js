let fs =require('fs')
fs.readFile('test.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        // data默认输出buffer 二进制 需要转成字符串
        console.log(data.toString(),'data')
    }
})