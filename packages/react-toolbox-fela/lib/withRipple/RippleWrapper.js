'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactFela = require('react-fela');

var RippleNode = (0, _reactFela.createComponent)(function () {
  return {
    bottom: 0,
    display: 'block',
    left: 0,
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  };
}, 'span');

exports.default = RippleNode;