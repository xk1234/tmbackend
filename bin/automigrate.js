var path = require("path");

var app = require(path.resolve(__dirname, "../server/server"));
var ds = app.datasources.pgres;
ds.automigrate("Author", function (err) {
  if (err) throw err;

  var authors = [
    {
      name: "yxk",
    },
    {
      name: "jannie",
    },
  ];
  var count = authors.length;
  authors.forEach(function (author) {
    app.models.Author.create(author, function (err, model) {
      if (err) throw err;

      console.log("Created:", model);

      count--;
      if (count === 0) ds.disconnect();
    });
  });
});
