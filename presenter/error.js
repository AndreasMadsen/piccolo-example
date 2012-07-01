
var util = require('util');
var Abstract = require('changeTable');
var format = require('format');

// Create changeTable prototype object
function ChangeTable() {
  Abstract.apply(this, arguments);

  // default options
  this.template('/default.html');
}
util.inherits(ChangeTable, Abstract);
module.exports = ChangeTable;

// handle all 404 errors
ChangeTable.prototype.error404 = function (error) {
  this.title('Error page');

  var output = format.h1('404 - Not Found') + format.pre(error.stack);
  this.content(output, 'div', 'content');
};
