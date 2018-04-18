'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  0%   { transform: scale(0); }\n  100% { transform: scale(1); }\n'], ['\n  0%   { transform: scale(0); }\n  100% { transform: scale(1); }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation: ', ' 800ms linear;\n  background-color: currentColor;\n  border-radius: 50%;\n  height: ', 'px;\n  left: ', 'px;\n  margin-left: -', 'px;\n  margin-top: -', 'px;\n  opacity: ', ';\n  outline: none;\n  pointer-events: none;\n  position: absolute;\n  top: ', 'px;\n  transform: scale(1);\n  transition-duration: 800ms;\n  transition-property: opacity;\n  width: ', 'px;\n  z-index: 100;\n  ', '\n'], ['\n  animation: ', ' 800ms linear;\n  background-color: currentColor;\n  border-radius: 50%;\n  height: ', 'px;\n  left: ', 'px;\n  margin-left: -', 'px;\n  margin-top: -', 'px;\n  opacity: ', ';\n  outline: none;\n  pointer-events: none;\n  position: absolute;\n  top: ', 'px;\n  transform: scale(1);\n  transition-duration: 800ms;\n  transition-property: opacity;\n  width: ', 'px;\n  z-index: 100;\n  ', '\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _transitions = require('../utils/transitions');

var _withOverride = require('../utils/withOverride');

var _withOverride2 = _interopRequireDefault(_withOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          startY = _props.startY;

      return _react2.default.createElement(Node, _extends({}, this.props, {
        active: active,
        innerRef: this.handleRef,
        spreadSize: spreadSize,
        startX: startX,
        startY: startY
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

var scale = (0, _styledComponents.keyframes)(_templateObject);

var Node = _styledComponents2.default.span(_templateObject2, scale, function (props) {
  return props.spreadSize;
}, function (props) {
  return props.startX;
}, function (props) {
  return props.spreadSize / 2;
}, function (props) {
  return props.spreadSize / 2;
}, function (props) {
  return props.active ? 0.3 : 0;
}, function (props) {
  return props.startY;
}, function (props) {
  return props.spreadSize;
}, (0, _withOverride2.default)('RippleNode'));

exports.default = RippleNode;