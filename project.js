
var path = require('path');

var piccolo = require('piccolo');

var project = piccolo();

    project.on('ready', function () {
      console.log('piccolo server is ready');
    });

    project.configure(function () {
      project.set('reload', 'auto');

      project.set('root', path.dirname(module.filename));
      project.set('temp', './temp');

      project.set('static', './static');
      project.set('template', './template');
      project.set('modules', './modules');
    });

    project.configure('development', function () {
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

    project.listen(8000);
