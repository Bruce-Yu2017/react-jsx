"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
  _inherits(Indecision, _React$Component);

  function Indecision(props) {
    _classCallCheck(this, Indecision);

    var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAdd = _this.handleAdd.bind(_this);
    _this.handleDeleteOne = _this.handleDeleteOne.bind(_this);
    _this.state = {
      option: props.option
      // option: []
    };
    return _this;
  }

  _createClass(Indecision, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('hello world');
      try {
        var json = localStorage.getItem("option");
        if (json) {
          var options = JSON.parse(json);
          console.log(options);
          this.setState(function () {
            return { option: options };
          });
        }
      } catch (e) {}
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // if(prevProps.option.length !== this.state.option.length) {

      // }
      var json = JSON.stringify(this.state.option);
      localStorage.setItem("option", json);
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var temp = Math.floor(Math.random() * this.state.option.length);
      console.log(this.state.option[temp]);
    }
  }, {
    key: "handleDeleteOne",
    value: function handleDeleteOne(opt) {
      this.setState(function (pre) {
        return {
          option: pre.option.filter(function (e) {
            return opt !== e;
          })
        };
      });
    }
  }, {
    key: "handleDelete",
    value: function handleDelete() {
      this.setState(function () {
        return { option: [] };
      });
    }
  }, {
    key: "handleAdd",
    value: function handleAdd(e) {
      if (!e) {
        return "empty";
      } else if (this.state.option.indexOf(e) > -1) {
        return "already exist";
      } else {
        this.setState(function (pre) {
          return { option: pre.option.concat([e]) };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision";
      var subTitle = "put your life in computer";

      // if(!this.state.option) return;
      var checkOption = this.state.option;
      !checkOption ? checkOption = 0 : checkOption = this.state.option.length;

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subTitle: subTitle }),
        React.createElement(Actions, { hasOptions: this.state.option.length > 0, pick: this.handlePick }),
        React.createElement(Options, {
          opt: this.state.option,
          handleDelete: this.handleDelete,
          handleDeleteOne: this.handleDeleteOne
        }),
        React.createElement(AddOptions, { add: this.handleAdd })
      );
    }
  }]);

  return Indecision;
}(React.Component);

Indecision.defaultProps = {
  option: []
};

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "This is my title: ",
      props.title
    ),
    React.createElement(
      "p",
      null,
      "This is my subtitle: ",
      props.subTitle
    )
  );
};
Header.defaultProps = {
  title: "default title",
  subTitle: "default subtitle"

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

};var Actions = function Actions(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.pick },
      "What should I do?"
    )
  );
};

// class Actions extends React.Component {
//   render() {
//     return (
//       <div>
//         <button disabled = {!this.props.hasOptions} onClick = {this.props.pick}>What should I do?</button>
//       </div>
//     )
//   }
// }

var Options = function Options(props) {
  // if (!props.opt) return;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDelete },
      "Remove all"
    ),
    props.opt.length === 0 && React.createElement(
      "p",
      null,
      "Please add action"
    ),
    props.opt.map(function (o) {
      return React.createElement(NewOption, {
        key: o,
        text: o,
        handleDeleteOne: props.handleDeleteOne
      });
    })
  );
};

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

var NewOption = function NewOption(props) {
  return React.createElement(
    "div",
    null,
    props.text,
    React.createElement(
      "button",
      {
        // onClick={props.handleDeleteOne(props.text)}
        onClick: function onClick() {
          props.handleDeleteOne(props.text);
        }
      },
      "Remove"
    )
  );
};

// class NewOption extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.text}</p>
//       </div>
//     )
//   }
// }

var AddOptions = function (_React$Component2) {
  _inherits(AddOptions, _React$Component2);

  function AddOptions(props) {
    _classCallCheck(this, AddOptions);

    var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

    _this2.handleOption = _this2.handleOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOptions, [{
    key: "handleOption",
    value: function handleOption(e) {
      e.preventDefault();
      var temp = e.target.elements.option.value;
      console.log(temp);
      var error = this.props.add(temp);
      this.setState(function () {
        return { error: error };
      });
      if (!error) {
        e.target.elements.option.value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add option"
          )
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

// var jsx = (
//   <div>
//     <Header />
//     <Actions />
//     <Options />
//     <AddOptions />
//   </div>
// )


ReactDOM.render(React.createElement(Indecision, null), document.getElementById("app"));
