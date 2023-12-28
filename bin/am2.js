var path = require("path");

var app = require(path.resolve(__dirname, "../server/server"));
var ds = app.datasources.pgres;
ds.automigrate("Task", function (err) {
  if (err) throw err;

  var tasks = [
    {
      title: "Sleep",
      description: "Sleep a lot",
      status: "in-progress",
      dueDate: new Date(),
      authorId: 1
    },
    {
      title: "Do work",
      description: "Do a lot of work",
      status: "completed",
      dueDate: new Date(),
      authorId: 1
    },
  ];
  var count = tasks.length;
  tasks.forEach(function (task) {
    app.models.Task.create(task, function (err, model) {
      if (err) throw err;

      console.log("Created:", model);

      count--;
      if (count === 0) ds.disconnect();
    });
  });
});
