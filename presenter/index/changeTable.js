
require('util', function (error, util) {
  if (error) return exports(error);

  require('changeTable', function (error, Abstract) {
    if (error) return exports(error);

    require('/customFormatModule.js', function (error, format) {
      if (error) return exports(error);

      // Create changeTable prototype object
      function changeTable() {
        Abstract.apply(this, arguments);

        // default options
        this.template('/default.html');
      }
      util.inherits(changeTable, Abstract);

      // When only one directory level is given
      changeTable.prototype.index = function () {
        this.title('Home page');

        var output = format.h1('Home page') + format.anchor('Go to about', '/about/');
        this.content(output, 'div', 'content');
      };

      // export changeTable
      exports(changeTable);
    });
  });
});
