
exports({
  h1: function (text) {
    return '<h1>' + text + '</h1>';
  },

  anchor: function (text, link) {
    return '<a href="' + link + '">' + text + '</a>';
  },

  pre : function (text) {
    return '<pre>' + text + '</pre>';
  }
});
