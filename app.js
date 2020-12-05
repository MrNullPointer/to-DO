const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  console.log(currentDay);

  if (currentDay === 6 || currentDay === 0){
      res.sendFile(__dirname + "/index.html")
  }
});

app.listen(3000, function () {
  console.log("Server is up and running on port 3000");
});
