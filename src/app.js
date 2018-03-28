class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);

    this.state = {
      option: []
      // option: []
    }
  }
  handlePick() {
    let temp = Math.floor(Math.random() * this.state.option.length);
    console.log(this.state.option[temp]);
  }
  handleDelete() {
    this.setState(() => {
      return {
        option: []
      }
    })
  }
  handleAdd(e) {
    if(!e) {
      return "empty";
    }
    else if(this.state.option.indexOf(e) > -1) {
      return "already exist";
    }
    else {
      this.setState((pre) => {
        return {
          option: pre.option.concat([e])
        }
      })
    }
    
  }
  render() {
    const title = "Indecision";
    const subTitle = "put your life in computer";
    
    return (
      <div>
        <Header title = {title} subTitle = {subTitle}/>
        <Actions hasOptions = {this.state.option.length > 0} pick = {this.handlePick}/>
        <Options opt = {this.state.option} handleDelete = {this.handleDelete}/>
        <AddOptions add = {this.handleAdd}/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <p>This is my title: {this.props.title}</p>
        <p>This is my subtitle: {this.props.subTitle}</p>
      </div>
    );
  }
}

class Actions extends React.Component {
  render() {
    return (
      <div>
        <button disabled = {!this.props.hasOptions} onClick = {this.props.pick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
      <button onClick = {this.props.handleDelete}>Remove all</button>
        {
          this.props.opt.map((o) => <NewOption key = {o} text = {o}/>)
        }
        <NewOption />
      </div>
    );
  }
}

class NewOption extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleOption = this.handleOption.bind(this);
  }
  handleOption(e) {
    e.preventDefault();
    let temp = e.target.elements.option.value;
    if(temp) {
      this.props.add(temp);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit = {this.handleOption}>
          <input type = "text" name= "option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

// var jsx = (
//   <div>
//     <Header />
//     <Actions />
//     <Options />
//     <AddOptions />
//   </div>
// )
ReactDOM.render(<Indecision />, document.getElementById("app"));

