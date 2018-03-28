let count = 0;
const show = () => {
  count ++;
  render();
}

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={show}>{count % 2 !== 0 ? "show" : "hide"}</button>
      {count % 2 == 0 && <p>Some details show here</p>}
    </div>
    
  )
  ReactDOM.render(template, approot);
}
var approot = document.getElementById("app");
render();