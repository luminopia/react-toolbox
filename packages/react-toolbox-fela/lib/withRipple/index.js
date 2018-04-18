'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactToolboxCore = require('react-toolbox-core');

var _RippleNode = require('./RippleNode');

var _RippleNode2 = _interopRequireDefault(_RippleNode);

var _RippleWrapper = require('./RippleWrapper');

var _RippleWrapper2 = _interopRequireDefault(_RippleWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactToolboxCore.withRippleFactory)({
  RippleNode: _RippleNode2.default,
  RippleWrapper: _RippleWrapper2.default
});