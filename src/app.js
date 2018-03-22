console.log("hello");
var template = (
  <div>
    <h1>world</h1> 
    <p>good hello</p>
  </div>
)
var name = "bruce";
var age = 27;
var loca = "Lodon";
var user = {
  name: "bruce",
  age: 29,
  loca: "ca",
  option: ["good", "bad"]
}

function getOption(option) {
  if(option.length > 1) {
    return <li>{option[0]}</li>
  }
  else {
    return "nothing happen";
  }
}

const getLocation = (location) => <li>location: {location}</li>;
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
var new_tem = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <ol>
      {(user.age && user.age >= 27) && <li>age: {user.age}</li>}
      {getLocation(user.loca)}
      {getOption(user.option)}
    </ol>
  </div>
)
var approot = document.getElementById("app");
ReactDOM.render(new_tem, approot);