'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactCssThemr = require('react-css-themr');

var _reactToolboxCore = require('react-toolbox-core');

var _RippleNode = require('../../hoc/withRipple/RippleNode');

var _RippleNode2 = _interopRequireDefault(_RippleNode);

var _RippleWrapper = require('../../hoc/withRipple/RippleWrapper');

var _RippleWrapper2 = _interopRequireDefault(_RippleWrapper);

var _createComponent = require('../../utils/createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _getNamespacedTheme = require('../../utils/getNamespacedTheme');

var _getNamespacedTheme2 = _interopRequireDefault(_getNamespacedTheme);

var _ButtonNode = require('./ButtonNode');

var _ButtonNode2 = _interopRequireDefault(_ButtonNode);

var _LinkNode = require('./LinkNode');

var _LinkNode2 = _interopRequireDefault(_LinkNode);

var _Button = require('./Button.css');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (0, _reactToolboxCore.buttonFactory)({
  passthrough: ['theme'],
  LinkNode: _LinkNode2.default,
  ButtonNode: _ButtonNode2.default
});

var withRipple = (0, _reactToolboxCore.withRippleFactory)({
  passthrough: function passthrough(props) {
    return {
      floating: props.floating,
      theme: (0, _getNamespacedTheme2.default)('ripple', props.theme)
    };
  },
  RippleNode: (0, _createComponent2.default)(_RippleNode2.default, {
    modifiers: ['floating']
  }),
  RippleWrapper: (0, _createComponent2.default)(_RippleWrapper2.default, {
    modifiers: ['floating']
  })
});

exports.default = (0, _reactCssThemr.themr)('RTButton', _Button2.default)(withRipple()(Button));