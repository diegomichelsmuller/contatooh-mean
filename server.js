var http = require('http');
var app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function (){
		console.log('Express Server escutando na porta: '+ app.get('port')); 
	});

// node helloworld
//http.createServer(function (req, res) {
//	res.writeHead(200, {'Content-Type': 'text/plain'});
//	res.end('Sou um servidor criado pelo NodeJs!\n');
//	}).listen(3000 , '127.0.0.1');