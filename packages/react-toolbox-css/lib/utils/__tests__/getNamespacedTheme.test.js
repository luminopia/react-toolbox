'use strict';

var _getNamespacedTheme = require('../getNamespacedTheme');

var _getNamespacedTheme2 = _interopRequireDefault(_getNamespacedTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = {
  primary: 'primary',
  secondary: 'secondary',
  rippleWrapper: 'wrapper',
  rippleNode: 'node'
};

describe('#getNamespacedTheme', function () {
  it('filters namespaced classnames from an object', function () {
    var result = (0, _getNamespacedTheme2.default)('ripple', theme);
    var expected = { wrapper: 'wrapper', node: 'node' };
    expect(result).toEqual(expected);
  });

  it('filters an empty object if there is no namespace', function () {
    var other = { primary: 'secondary' };
    var result = (0, _getNamespacedTheme2.default)('ripple', other);
    expect(result).toEqual({});
  });
});