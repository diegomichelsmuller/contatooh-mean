var http = require('http');
var app  = require('./config/express')();
var config = require('./config/config')();

require('./config/passport')();
require('./config/database')(config.db);

http.createServer(app).listen(config.port, function(){
  console.log('Express Server ' + config.address +  ' (' + config.env 
              + ' )' + ' escutando na porta ' + config.port);
});