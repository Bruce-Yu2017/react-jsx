import React from "react";

const NewOption = (props) => {
  return (
    <div className="option">
      <p className= "option__text">{props.count}. {props.text}</p>
      <button
        className = "button button--link"
        onClick={() => {
          props.handleDeleteOne(props.text)
        }}
      >
        Remove
      </button>
    </div>
  )
}
export default NewOption;

// class NewOption extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.text}</p>
//       </div>
//     )
//   }
// }