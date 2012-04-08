
var piccolo = require('piccolo');
var http = require('http');

var project = piccolo();
    project.on('ready', function () {
      console.log('piccolo server is ready');
    });
    project.attach(http.createServer().listen(8000));
