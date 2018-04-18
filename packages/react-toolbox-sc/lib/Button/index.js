'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    border-radius: ', ';\n    overflow: hidden;\n    ', '\n  '], ['\n    border-radius: ', ';\n    overflow: hidden;\n    ', '\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactToolboxCore = require('react-toolbox-core');

var _withOverride = require('../utils/withOverride');

var _withOverride2 = _interopRequireDefault(_withOverride);

var _RippleNode = require('../withRipple/RippleNode');

var _RippleNode2 = _interopRequireDefault(_RippleNode);

var _RippleWrapper = require('../withRipple/RippleWrapper');

var _RippleWrapper2 = _interopRequireDefault(_RippleWrapper);

var _ButtonNode = require('./ButtonNode');

var _ButtonNode2 = _interopRequireDefault(_ButtonNode);

var _LinkNode = require('./LinkNode');

var _LinkNode2 = _interopRequireDefault(_LinkNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = (0, _reactToolboxCore.buttonFactory)({
  passthrough: ['overrides', 'floating'],
  LinkNode: _LinkNode2.default,
  ButtonNode: _ButtonNode2.default
});

var withRipple = (0, _reactToolboxCore.withRippleFactory)({
  passthrough: ['overrides', 'floating'],
  RippleNode: _RippleNode2.default,
  RippleWrapper: (0, _styledComponents2.default)(_RippleWrapper2.default)(_templateObject, function (props) {
    return props.floating ? '50%' : '2px';
  }, (0, _withOverride2.default)('RippleWrapper'))
});

exports.default = withRipple()(Button);