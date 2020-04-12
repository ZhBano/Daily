let fs=require('fs')


let write =fs.createWriteStream('index.txt')

write.on('open',data=>{
    console.log('文件打开')
})

write.on('ready',_=>{
    console.log('文件写入已准备')
})


write.on('close',_=>{
    console.log('文件写入完成，关闭')
})



write.write('1111')
write.end()


