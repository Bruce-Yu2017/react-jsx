import React from "react";
import AddOptions from "./AddOptions";
import Header from "./Header";
import Actions from "./Actions";
import Options from "./Options";
import OptionModal from "./OptionModal";
export default class Indecision extends React.Component {
  state = {
    option: []
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
      return "empty";
    }
    else if (this.state.option.indexOf(e) > -1) {
      return "already exist";
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
        <Actions hasOptions={this.state.option.length > 0} pick={this.handlePick} />
        <Options
          opt={this.state.option}
          handleDelete={this.handleDelete}
          handleDeleteOne={this.handleDeleteOne}
        />
        <OptionModal />
        <AddOptions add={this.handleAdd} />
      </div>
    )
  }
}
Indecision.defaultProps = {
  option: []
}
