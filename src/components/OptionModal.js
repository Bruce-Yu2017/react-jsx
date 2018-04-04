import React from "react";
import Modal from 'react-modal';
export default class OptionModal extends React.Component {
  componentWillMount = () => {
    Modal.setAppElement('body')
  }
  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={this.props.closeModal}
      >
        <h3>Selected Option</h3>
        {this.props.selectedOption && <p>{this.props.selectedOption}</p>}
        <button onClick={this.props.closeModal}>close</button>
      </Modal>
    )
  }
} 


