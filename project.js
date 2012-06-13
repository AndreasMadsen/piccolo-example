
// Load modules
var path = require('path');
var http = require('http');
var piccolo = require('piccolo');

// create new project
var project = piccolo();

// emits when piccolo ready
project.on('ready', function () {
  console.log('piccolo server is ready');
});

// configre piccolo
project.configure(function () {
  project.set('reload', 'auto');

  project.set('root', path.dirname(module.filename));
});

project.configure('development', function () {
  project.set('debug', true);
  project.set('cache', 'none');
});

project.configure('production', function () {
  project.set('cache', (60*60*24));

  /** not implemented
   * project.compile('static');
   * project.compile('template');
   * project.compile('modules');
   */
});

project.use('development');

project.build();

// setup http server
var server = http.createServer();

server.on('request', function (req, res) {
  if (req.url === '/favicon.ico') {
    res.end();
    return;
  }

  if (req.url === '/ignore') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    return;
  }

  project.route(req, res);
});

server.listen(8000, '127.0.0.1');
