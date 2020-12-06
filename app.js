const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); //required to process the inputs from user
app.set("view engine", "ejs"); // setup EJS
app.use(express.static("public")); // use static files

var items = []; // Global list of items
let workItems = [];

app.get("/", function (req, res) {
  let day = date.getDay(); //can be changed to get date or day
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

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server is up and running on port 3000");
});
