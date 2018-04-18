'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactFela = require('react-fela');

var _getFilterProps = require('../utils/getFilterProps');

var _getFilterProps2 = _interopRequireDefault(_getFilterProps);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactFela.createComponent)(_style2.default, 'a', (0, _getFilterProps2.default)(['accent', 'flat', 'floating', 'mini', 'neutral', 'primary', 'raised', 'type']));