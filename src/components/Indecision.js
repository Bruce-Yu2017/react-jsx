import React from "react";
import AddOptions from "./AddOptions";
import Header from "./Header";
import Actions from "./Actions";
import Options from "./Options";
import OptionModal from "./OptionModal";
export default class Indecision extends React.Component {
  state = {
    option: [],
    selectedOption: undefined
  }
  
  componentDidMount = () => {
    console.log('hello world')
    try {
      const json = localStorage.getItem("option");
      if (json) {
        const options = JSON.parse(json);
        this.setState(() => ({ option: options }));
      }

    }
    catch (e) {

    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const json = JSON.stringify(this.state.option);
    localStorage.setItem("option", json);
  }

  handlePick = () => {
    let temp = Math.floor(Math.random() * this.state.option.length);
    console.log(this.state.option[temp]);
    this.setState(() => ({
      selectedOption: this.state.option[temp]
    }))
  }

  closeModal = () => {
    console.log("close")
    this.setState(() => ({
      selectedOption: false
    }))
  }
  
  handleDeleteOne = (opt) => {
    this.setState((pre) => ({
      option: pre.option.filter((e) => {
        return opt !== e
      })
    }))
  }
  
  handleDelete = () => {
    this.setState(() => ({ option: [] }))
  }
  
  handleAdd = (e) => {
    if (!e) {
      return "Enter valid value to add item";
    }
    else if (this.state.option.indexOf(e) > -1) {
      return "Your input value has already existed.";
    }
    else {
      this.setState((pre) => ({ option: pre.option.concat([e]) }));
    }

  }
  render() {
    const title = "Indecision";
    const subTitle = "put your life in computer";
    let checkOption = this.state.option;
    !checkOption ? checkOption = 0 : checkOption = this.state.option.length;

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <div className = "container">
          <Actions hasOptions={this.state.option.length > 0} pick={this.handlePick} />
          <div className = "widget">
            <Options
              opt={this.state.option}
              handleDelete={this.handleDelete}
              handleDeleteOne={this.handleDeleteOne}
            />
            <AddOptions add={this.handleAdd} />
          </div>
          
          <OptionModal
            selectedOption={this.state.selectedOption}
            closeModal={this.closeModal}
          />
          
        </div> 
      </div>
    )
  }
}
Indecision.defaultProps = {
  option: []
}
