'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withOverride;

var _path = require('ramda/src/path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withOverride(key) {
  return function (props) {
    return (0, _path2.default)(['overrides', key], props);
  };
}