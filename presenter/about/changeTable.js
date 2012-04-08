
require('util', function (error, util) {
  if (error) throw error;

  require('changeTable', function (error, Abstract) {
    if (error) throw error;

    // Create changeTable prototype object
    function changeTable() {
      Abstract.apply(this, arguments);

      // default options
      this.template('/template/default.html');
    }
    util.inherits(changeTable, Abstract);

    // When only one directory level is given
    changeTable.prototype.index = function () {
      this.title('About page');
      this.content('<h1>Hallo World</h1><a href="/"> Go to home </a>', 'div', 'content');
    };

    // export changeTable
    exports(changeTable);
  });
});
