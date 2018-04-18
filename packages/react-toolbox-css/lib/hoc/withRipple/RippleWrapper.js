'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createComponent = require('../../utils/createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _withRipple = require('./withRipple.css');

var _withRipple2 = _interopRequireDefault(_withRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createComponent2.default)('span', {
  name: 'rippleWrapper',
  theme: _withRipple2.default
});