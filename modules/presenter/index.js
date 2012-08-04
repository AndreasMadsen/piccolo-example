
var util = require('util');
var Document = require('document');
var marked = require('marked');

// Create changeTable prototype object
function Presenter() {
  Document.apply(this, arguments);

  // default options
  this.template('/default.html');
}
util.inherits(Presenter, Document);
module.exports = Presenter;

// When only one directory level is given
Presenter.prototype.index = function () {

  // get main nodes
  var title = this.find().only().elem('title').toValue();
  var content = this.find().only().attr('id', 'content').toValue();

  // setup stream
  this.container([title, content]);

  // modify <title>
  title.setContent('Home page').done();

  // modify #content element
  this.readStatic('/index.md', function (error, text) {
    if (error) throw error; // TODO?

    content.setContent( marked(text) ).done();
  });
};
