class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDeleteOne = this.handleDeleteOne.bind(this);
    this.state = {
      option: props.option
      // option: []
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("option");
      const options = JSON.parse(json);
      this.setState(() => ({ option: options }))
    }
    catch(e) {

    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    // if(prevProps.option.length !== this.state.option.length) {
      
    // }
    const json = JSON.stringify(this.state.option);
    localStorage.setItem("option", json);
    
  }
  
  handlePick() {
    let temp = Math.floor(Math.random() * this.state.option.length);
    console.log(this.state.option[temp]);
  }
  handleDeleteOne(opt) {
    this.setState((pre) => ({
      option: pre.option.filter((e) => {
        return opt !== e
      })
    }))
  }
  handleDelete() {
    this.setState(() => ({option: []}))
  }
  handleAdd(e) {
    if(!e) {
      return "empty";
    }
    else if(this.state.option.indexOf(e) > -1) {
      return "already exist";
    }
    else {
      this.setState((pre) => ({option: pre.option.concat([e])}));
    }
    
  }
  render() {
    const title = "Indecision";
    const subTitle = "put your life in computer";
    
    return (
      <div>
        <Header title = {title} subTitle = {subTitle}/>
        <Actions hasOptions = {this.state.option.length > 0} pick = {this.handlePick}/>
        <Options 
          opt = {this.state.option} 
          handleDelete = {this.handleDelete}
          handleDeleteOne = {this.handleDeleteOne}
        />
        <AddOptions add = {this.handleAdd}/>
      </div>
    )
  }
}
Indecision.defaultProps = {
  option: []
}

const Header = (props) => {
  return (
    <div>
      <p>This is my title: {props.title}</p>
      <p>This is my subtitle: {props.subTitle}</p>
    </div>
  );
}
Header.defaultProps = {
  title: "default title",
  subTitle: "default subtitle"
}

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>This is my title: {this.props.title}</p>
//         <p>This is my subtitle: {this.props.subTitle}</p>
//       </div>
//     );
//   }
// }

const Actions = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.pick}>What should I do?</button>
    </div>
  )
}

// class Actions extends React.Component {
//   render() {
//     return (
//       <div>
//         <button disabled = {!this.props.hasOptions} onClick = {this.props.pick}>What should I do?</button>
//       </div>
//     )
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDelete}>Remove all</button>
      {props.opt.length === 0 && <p>Please add action</p>}
      {
        props.opt.map((o) => (
          <NewOption 
            key={o} 
            text={o} 
            handleDeleteOne = {props.handleDeleteOne}
          />
        ))
      }
    </div>
  );
}

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//       <button onClick = {this.props.handleDelete}>Remove all</button>
//         {
//           this.props.opt.map((o) => <NewOption key = {o} text = {o}/>)
//         }
//         <NewOption />
//       </div>
//     );
//   }
// }

const NewOption = (props) => {
  return (
    <div>
      {props.text}
      <button 
        // onClick={props.handleDeleteOne(props.text)}
        onClick = {() => {
          props.handleDeleteOne(props.text)
        }}
      >
      Remove
      </button>
    </div>
  )
}

// class NewOption extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.text}</p>
//       </div>
//     )
//   }
// }

class AddOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleOption = this.handleOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleOption(e) {
    e.preventDefault();
    let temp = e.target.elements.option.value;
    console.log(temp);
    const error = this.props.add(temp);
    this.setState(() => ({error}))
    if(!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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

