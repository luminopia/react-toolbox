'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactFela = require('react-fela');

var _reactToolboxCore = require('react-toolbox-core');

var _RippleNode = require('../withRipple/RippleNode');

var _RippleNode2 = _interopRequireDefault(_RippleNode);

var _RippleWrapper = require('../withRipple/RippleWrapper');

var _RippleWrapper2 = _interopRequireDefault(_RippleWrapper);

var _getFilterProps = require('../utils/getFilterProps');

var _getFilterProps2 = _interopRequireDefault(_getFilterProps);

var _withOverrides = require('../utils/withOverrides');

var _withOverrides2 = _interopRequireDefault(_withOverrides);

var _ButtonNode = require('./ButtonNode');

var _ButtonNode2 = _interopRequireDefault(_ButtonNode);

var _LinkNode = require('./LinkNode');

var _LinkNode2 = _interopRequireDefault(_LinkNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (0, _reactToolboxCore.buttonFactory)({
  passthrough: ['overrides', 'floating'],
  ButtonNode: _ButtonNode2.default,
  LinkNode: _LinkNode2.default
});

var withRipple = (0, _reactToolboxCore.withRippleFactory)({
  passthrough: function passthrough(props, name) {
    if (name === 'RippleWrapper') {
      return {
        overrides: props.overrides,
        floating: props.floating
      };
    }
    return {};
  },
  RippleNode: _RippleNode2.default,
  RippleWrapper: (0, _reactFela.createComponent)((0, _withOverrides2.default)('RippleWrapper', function (props) {
    return {
      borderRadius: props.floating ? '50px' : '2px',
      overflow: 'hidden'
    };
  }), _RippleWrapper2.default, (0, _getFilterProps2.default)(['floating']))
});

exports.default = withRipple()(Button);