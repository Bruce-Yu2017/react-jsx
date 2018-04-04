import React from "react";
import NewOption from "./NewOption"

const Options = (props) => {
  return (
    <div>
      <div className = "widget-header">
        <h3 className= "widget-header__title">Your Options</h3>
        <button
          className="button button--link"
          onClick={props.handleDelete}>Remove all</button>
        
      </div>
      {props.opt.length === 0 && <p className = "message">Please add action</p>}
      {
        props.opt.map((o, index) => (
          <NewOption
            count = {index + 1}
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
