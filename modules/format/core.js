
module.exports.h1 = function (text) {
  return '<h1>' + text + '</h1>';
};

module.exports.anchor = function (text, link) {
  return '<a href="' + link + '">' + text + '</a>';
};

module.exports.pre = function (text) {
  return '<pre>' + text + '</pre>';
};
