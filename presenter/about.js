
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

// When only one directory level is given
ChangeTable.prototype.index = function () {
  this.title('About page');

  var output = format.h1('About page') + format.anchor('Go to home', '/');
  this.content(output, 'div', 'content');
};
