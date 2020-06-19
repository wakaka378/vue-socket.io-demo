/*
 * @Descripttion: 
 * @version: 
 * @Author: fanliu
 * @Date: 2020-06-19 18:22
 * @LastEditors: fanliu
 * @LastEditTime: 2020-06-19 18:30
 */

var http = require('http');
var io = require('socket.io');

var server = http.createServer(function (req, res) {

  var headers = {};
  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
  headers["Access-Control-Allow-Credentials"] = true;
  headers["Access-Control-Max-Age"] = '86400'; // 24 hours
  headers["Access-Control-Allow-Headers"] = "X-Requested-With, Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept";
  res.writeHead(200, headers);
  res.end();
});

server.listen(1024,function() {
	console.log('server runing at 127.0.0.1:1024')
})


var socket = io.listen(server, {origins: '*:*'});

socket.on('connection',function(socket) {
	console.log('客户端有连接')
	
	socket.on('disconnect', () => {
		console.log('客户端断开')
	})
	
	socket.emit('welcome','欢迎连接socket')
	// socket.emit('connecting')
	// socket.emit('disconnect')
	// socket.emit('connect_failed')
	// socket.emit('connect')

  socket.on('hello', data => {
		console.log('接收客户端发送数据', data)
	})

});
