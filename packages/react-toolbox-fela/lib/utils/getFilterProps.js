'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFilterProps;

var _assoc = require('ramda/src/assoc');

var _assoc2 = _interopRequireDefault(_assoc);

var _concat = require('ramda/src/concat');

var _concat2 = _interopRequireDefault(_concat);

var _keys = require('ramda/src/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFilterProps() {
  var toRemove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _toRemove = (0, _concat2.default)(['innerRef', 'overrides'], toRemove);
  return function (props) {
    return (0, _keys2.default)(props).reduce(function (result, prop) {
      return _toRemove.indexOf(prop) === -1 ? (0, _assoc2.default)(prop, props[prop], result) : result;
    }, {});
  };
}