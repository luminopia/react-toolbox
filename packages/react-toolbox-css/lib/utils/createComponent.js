'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createComponent;

var _react = require('react');

var _reactCssThemr = require('react-css-themr');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _assoc = require('ramda/src/assoc');

var _assoc2 = _interopRequireDefault(_assoc);

var _dissoc = require('ramda/src/dissoc');

var _dissoc2 = _interopRequireDefault(_dissoc);

var _flip = require('ramda/src/flip');

var _flip2 = _interopRequireDefault(_flip);

var _identity = require('ramda/src/identity');

var _identity2 = _interopRequireDefault(_identity);

var _merge2 = require('ramda/src/merge');

var _merge3 = _interopRequireDefault(_merge2);

var _reduce = require('ramda/src/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultOptions = {
  modifiers: [],
  theme: {}
};

function createComponent(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _merge = (0, _merge3.default)(defaultOptions, options),
      name = _merge.name,
      modifiers = _merge.modifiers,
      _theme = _merge.theme;

  var removeProps = function removeProps(props) {
    return (0, _reduce2.default)((0, _flip2.default)(_dissoc2.default), props, modifiers);
  };

  var getClassName = function getClassName(theme, className, props) {
    return (0, _classnames2.default)(theme[name], className, (0, _reduce2.default)(function (result, modifier) {
      return theme[modifier] ? (0, _assoc2.default)(theme[modifier], props[modifier], result) : result;
    }, {}, modifiers));
  };

  var themeShape = _propTypes2.default.shape((0, _reduce2.default)(function (result, modifier) {
    return (0, _assoc2.default)(modifier, _propTypes2.default.string, result);
  }, name ? _defineProperty({}, name, _propTypes2.default.string) : {}, modifiers));

  var CSSComponent = function (_Component) {
    _inherits(CSSComponent, _Component);

    function CSSComponent() {
      _classCallCheck(this, CSSComponent);

      return _possibleConstructorReturn(this, (CSSComponent.__proto__ || Object.getPrototypeOf(CSSComponent)).apply(this, arguments));
    }

    _createClass(CSSComponent, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            innerRef = _props.innerRef,
            theme = _props.theme,
            others = _objectWithoutProperties(_props, ['className', 'innerRef', 'theme']);

        var mergedTheme = _theme ? (0, _reactCssThemr.themeable)(_theme, theme) : theme;
        var passThrough = typeof target === 'string' ? { ref: innerRef } : { innerRef: innerRef, theme: theme };

        return (0, _react.createElement)(target, _extends({
          className: getClassName(mergedTheme, className, others)
        }, removeProps(others), passThrough));
      }
    }]);

    return CSSComponent;
  }(_react.Component);

  CSSComponent.propTypes = {
    className: _propTypes2.default.string,
    innerRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
    theme: themeShape
  };
  CSSComponent.defaultProps = {
    innerRef: _identity2.default
  };
  CSSComponent.displayName = typeof target === 'string' ? 'CSSComponent (' + target + ')' : 'CSSComponent (' + target.displayName + ')';


  return CSSComponent;
}