'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNamespacedTheme;

var _assoc = require('ramda/src/assoc');

var _assoc2 = _interopRequireDefault(_assoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNamespacedTheme(namespace, theme) {
  return Object.keys(theme).filter(function (key) {
    return key.startsWith(namespace);
  }).reduce(function (result, key) {
    return (0, _assoc2.default)(removeNamespace(key, namespace), theme[key], result);
  }, {});
}

function removeNamespace(key, themeNamespace) {
  var capitalized = key.substr(themeNamespace.length);
  return capitalized.slice(0, 1).toLowerCase() + capitalized.slice(1);
}