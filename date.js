//module initialization. module.exports is a javascript object.

module.exports.getDate = getDate;
module.exports.getDay = getDay;

function getDate() {
  //StackOverflow answer: how-to-format-a-javascript-date
  options = {
    year: "numeric",
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let today = new Date();
  let day = today.toLocaleString("en-US", options);
  return day;
}

function getDay() {
  let options = {
    weekday: "long",
  };
  let today = new Date();
  let day = today.toLocaleString("en-US", options);
  return day;
}
