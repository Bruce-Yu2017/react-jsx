import React from "react";

const Actions = (props) => (
  <div>
    <button 
      className = "big-button"
      disabled={!props.hasOptions} 
      onClick={props.pick}>What should I do?
    </button>
  </div>
)


export default Actions;

// class Actions extends React.Component {
//   render() {
//     return (
//       <div>
//         <button disabled = {!this.props.hasOptions} onClick = {this.props.pick}>What should I do?</button>
//       </div>
//     )
//   }
// }