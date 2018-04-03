import React from "react";
import NewOption from "./NewOption"

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
            handleDeleteOne={props.handleDeleteOne}
          />
        ))
      }
    </div>
  );
}

export default Options;

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
