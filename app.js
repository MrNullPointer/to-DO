const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); //required to process the inputs from user
app.set("view engine", "ejs"); // setup EJS
app.use(express.static("public")); // use static files

var items = []; // Global list of items
let workItems = [];

app.get("/", function (req, res) {
  //StackOverflow answer: how-to-format-a-javascript-date
  options = {
    year: "numeric",
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var today = new Date();
  day = today.toLocaleString("en-US", options);

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newListItems: workItems });
});

app.get("/about", function(req, res){
  res.render("about");
})

app.listen(3000, function () {
  console.log("Server is up and running on port 3000");
});
