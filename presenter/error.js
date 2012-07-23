
var util = require('util');
var Document = require('document');
var format = require('format');

// Create changeTable prototype object
function Presenter() {
  Document.apply(this, arguments);

  // default options
  this.template('/default.html');
}
util.inherits(Presenter, Document);
module.exports = Presenter;

// handle all 404 errors
Presenter.prototype.error404 = function (error) {

  // get main nodes
  var title = this.find().only().elem('title').toValue();
  var content = this.find().only().attr('id', 'content').toValue();

  // setup stream
  this.container([title, content]);

  // modify <title>
  title.setContent('Error page').done();

  // modify #content element
  var output = format.h1('404 - Not Found') + format.pre(error.stack);
  content.setContent(output).done();
};
