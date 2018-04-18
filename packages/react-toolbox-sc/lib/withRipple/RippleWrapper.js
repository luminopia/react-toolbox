'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  bottom: 0;\n  display: block;\n  left: 0;\n  pointer-events: none;\n  outline: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n  ', '\n'], ['\n  bottom: 0;\n  display: block;\n  left: 0;\n  pointer-events: none;\n  outline: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1;\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _withOverride = require('../utils/withOverride');

var _withOverride2 = _interopRequireDefault(_withOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RippleWrapper = _styledComponents2.default.span(_templateObject, (0, _withOverride2.default)('RippleWrapper'));

exports.default = RippleWrapper;