import React from "react";

const Header = (props) => {
  return (
    <div className = "header">
      <div className = "container">
        <h1 className="header__title">{props.title}</h1>
        <h3 className="header__subtitle">{props.subTitle}</h3>
      </div>
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