import React from "react";

const NewOption = (props) => {
  return (
    <div>
      {props.text}
      <button
        // onClick={props.handleDeleteOne(props.text)}
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