//module initialization. module.exports is a javascript object.

exports.getDate = function () {
  //StackOverflow answer: how-to-format-a-javascript-date
  const options = {
    year: "numeric",
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const today = new Date();
  return today.toLocaleString("en-US", options);
};

exports.getDay = function () {
  const options = {
    weekday: "long",
  };
  const today = new Date();
  return today.toLocaleString("en-US", options);
};
