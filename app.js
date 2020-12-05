const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // setup EJS

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

  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("Server is up and running on port 3000");
});
