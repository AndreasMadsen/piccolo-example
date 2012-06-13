
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

      // handle all 404 errors
      changeTable.prototype.error404 = function (error) {
        this.title('Error page');

        var output = format.h1('404 - Not Found') + format.pre(error.stack);
        this.content(output, 'div', 'content');
      };

      // export changeTable
      exports(changeTable);
    });
  });
});
