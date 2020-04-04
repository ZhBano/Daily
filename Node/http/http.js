var http = require('http');

const server=http.createServer((req, res)=>{
	console.log(req.aborted,'aborted')
	console.log(req.complete,'complete')
	console.log(req.headers,'headers')
	// console.log(req.httpVersion,'httpVersion')
	console.log(req.method,'method')

	console.log(req.rawHeaders,'rawHeaders')
	console.log(req.rawTrailers,'rawTrailers')
	console.log(req.socket,'socket')
	console.log(req.statusCode,'statusCode')
	console.log(req.statusMessage,'statusMessage')
	console.log(req.trailers,'trailers')

	console.log(req.url,'url')

	res.write('111')
	res.end();
}).listen(9528,'192.168.0.110');

// server.on('listening',data=>{
// 	console.log('开始监听')
	
// })

// server.on('connection',data=>{
// 	console.log("客户端已连接")
// })

// server.setTimeout(1000,date=>{
// 	console.log('超时')
// 	// console.log(date)
// })

// server.on('timeout',data=>{
// 	console.log('超市2')
// })

// console.log(server.listening,'22222333')