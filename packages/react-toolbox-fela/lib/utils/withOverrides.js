'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withOverrides;

var _merge = require('ramda/src/merge');

var _merge2 = _interopRequireDefault(_merge);

var _path = require('ramda/src/path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {
  return {};
};

function getPropsOverrides(tagName, props) {
  var overrides = (0, _path2.default)(['overrides', tagName], props) || noop;
  return overrides(props);
}

function withOverrides(tagName) {
  var defaultOverrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

  return function (props) {
    return (0, _merge2.default)(defaultOverrides(props), getPropsOverrides(tagName, props));
  };
}