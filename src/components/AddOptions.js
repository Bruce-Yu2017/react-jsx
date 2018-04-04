import React from "react";

export default class AddOptions extends React.Component {
  state = {
    error: undefined
  }
  
  handleOption = (e) => {
    e.preventDefault();
    let temp = e.target.elements.option.value;
    console.log(temp);
    const error = this.props.add(temp);
    this.setState(() => ({ error }))
    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p className= "add-option-error">{this.state.error}</p>}
        <form 
          className = "add-option"
          onSubmit={this.handleOption}>
          <input className = "add-option__input" type="text" name="option" />
          <button className = "button">Add option</button>
        </form>
      </div>
    );
  }
}