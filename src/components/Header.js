import React from "react";

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

export default Header;

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