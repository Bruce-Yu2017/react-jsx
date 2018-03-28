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

    _this.state = {
      option: []
      // option: []
    };
    return _this;
  }

  _createClass(Indecision, [{
    key: "handlePick",
    value: function handlePick() {
      var temp = Math.floor(Math.random() * this.state.option.length);
      console.log(this.state.option[temp]);
    }
  }, {
    key: "handleDelete",
    value: function handleDelete() {
      this.setState(function () {
        return {
          option: []
        };
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
          return {
            option: pre.option.concat([e])
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision";
      var subTitle = "put your life in computer";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subTitle: subTitle }),
        React.createElement(Actions, { hasOptions: this.state.option.length > 0, pick: this.handlePick }),
        React.createElement(Options, { opt: this.state.option, handleDelete: this.handleDelete }),
        React.createElement(AddOptions, { add: this.handleAdd })
      );
    }
  }]);

  return Indecision;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "This is my title: ",
          this.props.title
        ),
        React.createElement(
          "p",
          null,
          "This is my subtitle: ",
          this.props.subTitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Actions = function (_React$Component3) {
  _inherits(Actions, _React$Component3);

  function Actions() {
    _classCallCheck(this, Actions);

    return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
  }

  _createClass(Actions, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { disabled: !this.props.hasOptions, onClick: this.props.pick },
          "What should I do?"
        )
      );
    }
  }]);

  return Actions;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          { onClick: this.props.handleDelete },
          "Remove all"
        ),
        this.props.opt.map(function (o) {
          return React.createElement(NewOption, { key: o, text: o });
        }),
        React.createElement(NewOption, null)
      );
    }
  }]);

  return Options;
}(React.Component);

var NewOption = function (_React$Component5) {
  _inherits(NewOption, _React$Component5);

  function NewOption() {
    _classCallCheck(this, NewOption);

    return _possibleConstructorReturn(this, (NewOption.__proto__ || Object.getPrototypeOf(NewOption)).apply(this, arguments));
  }

  _createClass(NewOption, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          this.props.text
        )
      );
    }
  }]);

  return NewOption;
}(React.Component);

var AddOptions = function (_React$Component6) {
  _inherits(AddOptions, _React$Component6);

  function AddOptions(props) {
    _classCallCheck(this, AddOptions);

    var _this6 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

    _this6.handleOption = _this6.handleOption.bind(_this6);
    return _this6;
  }

  _createClass(AddOptions, [{
    key: "handleOption",
    value: function handleOption(e) {
      e.preventDefault();
      var temp = e.target.elements.option.value;
      if (temp) {
        this.props.add(temp);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
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
