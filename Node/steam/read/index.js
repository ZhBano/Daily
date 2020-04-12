let fs =require('fs')

let read =fs.createReadStream('../write/index.txt')

read.on('open',data=>{
    console.log('文件打开')
})

read.on('ready',_=>{
    console.log('文件读入已准备')
})


read.on('close',_=>{
    console.log('文件读入完成，关闭')
})

read.on('data',data=>{
    console.log(data.toString())
})

