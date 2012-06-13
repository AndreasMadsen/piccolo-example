
require('util', function (error, util) {
  if (error) return exports(error);

  require('changeTable', function (error, Abstract) {
    if (error) return exports(error);

    require('customFormatModule', function (error, format) {
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
        this.title('About page');

        var output = format.h1('About page') + format.anchor('Go to home', '/');
        this.content(output, 'div', 'content');
      };

      // export changeTable
      exports(changeTable);
    });
  });
});
