class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.state = {
      visible: false
    }
  }
  show() {
    this.setState((pre) => {
      console.log(pre);
      return {
        visible: !pre.visible
      }
      
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick = {this.show}>{this.state.visible? "hide" : "show"}</button>
        <p>{this.state.visible? "something hide" : "show something"}</p>
      </div>
    )
  }
}
ReactDOM.render(<Visibility />, document.getElementById("app"));