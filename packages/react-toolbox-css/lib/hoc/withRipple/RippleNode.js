'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transitions = require('../../utils/transitions');

var _createComponent = require('../../utils/createComponent');

var _createComponent2 = _interopRequireDefault(_createComponent);

var _withRipple = require('./withRipple.css');

var _withRipple2 = _interopRequireDefault(_withRipple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RippleNodeComponent = (0, _createComponent2.default)('span', {
  name: 'rippleNode',
  modifiers: ['active'],
  theme: _withRipple2.default
});

var RippleNode = function (_Component) {
  _inherits(RippleNode, _Component);

  function RippleNode() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RippleNode);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RippleNode.__proto__ || Object.getPrototypeOf(RippleNode)).call.apply(_ref, [this].concat(args))), _this), _this.handleDeactivate = function () {
      _this.props.onDeactivate(_this.props.idx);
    }, _this.handleOpacityEnd = function () {
      (0, _transitions.removeOnTransitionEnded)(_this.rootNode, _this.handleOpacityEnd);
      _this.props.onFinish(_this.props.idx);
    }, _this.handleRef = function (node) {
      var innerRef = _this.props.innerRef;

      _this.rootNode = node;
      if (innerRef) innerRef(node);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RippleNode, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var isTouch = this.props.isTouch;

      getEventTypes(isTouch).forEach(function (eventType) {
        document.addEventListener(eventType, _this2.handleDeactivate);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _transitions.addOnTransitionEnded)(this.rootNode, this.handleOpacityEnd);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      var isTouch = this.props.isTouch;

      getEventTypes(isTouch).forEach(function (eventType) {
        document.removeEventListener(eventType, _this3.handleDeactivate);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          idx = _props.idx,
          innerRef = _props.innerRef,
          isTouch = _props.isTouch,
          onDeactivate = _props.onDeactivate,
          onFinish = _props.onFinish,
          spreadSize = _props.spreadSize,
          startX = _props.startX,
          startY = _props.startY,
          styles = _props.styles,
          rest = _objectWithoutProperties(_props, ['active', 'idx', 'innerRef', 'isTouch', 'onDeactivate', 'onFinish', 'spreadSize', 'startX', 'startY', 'styles']);

      var style = {
        height: spreadSize + 'px',
        left: startX + 'px',
        marginLeft: '-' + spreadSize / 2 + 'px',
        marginTop: '-' + spreadSize / 2 + 'px',
        top: startY + 'px',
        width: spreadSize + 'px'
      };

      return _react2.default.createElement(RippleNodeComponent, _extends({}, rest, {
        active: active,
        className: styles,
        innerRef: this.handleRef,
        style: style
      }));
    }
  }]);

  return RippleNode;
}(_react.Component);

RippleNode.propTypes = {
  active: _propTypes2.default.bool,
  idx: _propTypes2.default.string,
  innerRef: _propTypes2.default.func,
  isTouch: _propTypes2.default.bool,
  onDeactivate: _propTypes2.default.func,
  onFinish: _propTypes2.default.func,
  spreadSize: _propTypes2.default.number,
  startX: _propTypes2.default.number,
  startY: _propTypes2.default.number
};


function getEventTypes(isTouch) {
  return isTouch ? ['touchend', 'touchmove'] : ['mouseup'];
}

exports.default = RippleNode;