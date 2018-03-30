class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.subOne = this.subOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: props.count
    }
  }
  addOne() {
    this.setState((pre) => {
      return {
        count: pre.count +1
      };
    }) 
  }
  subOne() {
    this.setState((pre) => {
      return {
        count: pre.count -1
      }
    })
  }
  reset() {
    this.setState((pre) => {
      return {
        count: 0
      }
    })
  }
  render() {
    let count = 0;
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick = {this.addOne}>+1</button>
        <button onClick={this.subOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}
Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter />, document.getElementById("app"));