"use strict";

console.log("hello");
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "world"
  ),
  React.createElement(
    "p",
    null,
    "good hello"
  )
);
var name = "bruce";
var age = 27;
var loca = "Lodon";
var user = {
  name: "bruce",
  age: 29,
  loca: "ca",
  option: ["good", "bad"]
};

function getOption(option) {
  if (option.length > 1) {
    return React.createElement(
      "li",
      null,
      option[0]
    );
  } else {
    return "nothing happen";
  }
}

var getLocation = function getLocation(location) {
  return React.createElement(
    "li",
    null,
    "location: ",
    location
  );
};
// {
//   if(location) {
//     return <li>location: {location}</li>;
//   }
// }

// function getLocation(location) {
//   if(location) {
//     return <li>location: {location}</li>;
//   }
// }
var new_tem = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name.toUpperCase()
  ),
  React.createElement(
    "ol",
    null,
    user.age && user.age >= 27 && React.createElement(
      "li",
      null,
      "age: ",
      user.age
    ),
    getLocation(user.loca),
    getOption(user.option)
  )
);
var approot = document.getElementById("app");
ReactDOM.render(new_tem, approot);
