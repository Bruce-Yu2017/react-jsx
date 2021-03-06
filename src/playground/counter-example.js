class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.subOne = this.subOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("count");
      const cnt = JSON.parse(json);
      this.setState(() => ({count: cnt}))
    }
    catch(e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.count);
    localStorage.setItem("count", json);
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

ReactDOM.render(<Counter />, document.getElementById("app"));