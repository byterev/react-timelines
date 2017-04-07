"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react2.default.createElement(
    "div",
    { className: "sidebar__header" },
    _react2.default.createElement(
      "div",
      { className: "timebar-key" },
      "Timebar key 1"
    ),
    _react2.default.createElement(
      "div",
      { className: "timebar-key" },
      "Timebar key 2"
    ),
    _react2.default.createElement(
      "div",
      { className: "timebar-key" },
      "Timebar key 3"
    )
  );
};

exports.default = Header;
module.exports = exports["default"];