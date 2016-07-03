var express = require('express'),
    path =    require('path');
	
var server = express();
server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(80, function () {
  console.log('Server listening on port 80!');
});

