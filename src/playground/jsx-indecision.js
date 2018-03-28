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

function getOption(option) {
  if (option.length > 1) {
    return <li>{option[0]}</li>
  }
  else {
    return "nothing happen";
  }
}

const getLocation = (location) => <li>location: {location}</li>;


let count = 0;
const addOne = () => {
  // console.log(count++);
  count++;
  reRenderPage();
}

const reset = () => {
  user.option.length = 0;
  reRenderPage();
}
let user = {
  name: "bruce",
  age: 29,
  loca: "ca",
  option: []
}


const onFormSubmit = (e) => {
  e.preventDefault();
  const opt = e.target.elements.option.value;
  if (opt) {
    user.option.push(opt);
    e.target.elements.option.value = "";
  }
  reRenderPage();
}
const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * user.option.length);
  const option = user.option[randomNum];
  alert(option);
}
const reRenderPage = () => {
  const tem2 = (
    <div>
      {user.option.length > 0 ? <p>Here are your options:</p> : <p>No options</p>}
      <button onClick={reset}>reset</button>
      {
        user.option.map((option) => {
          return <p key={option}>option: {option}</p>
        })
      }
      <button onClick={makeDecision}>Make decision</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>submit</button>
      </form>
    </div>
  )
  ReactDOM.render(tem2, approot);
}


var approot = document.getElementById("app");
reRenderPage();