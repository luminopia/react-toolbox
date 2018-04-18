"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ramda_1 = require("ramda");
var react_1 = require("react");
var getPassThrough_1 = require("../../utils/getPassThrough");
var getMousePosition_1 = require("../../utils/getMousePosition");
var getTouchPosition_1 = require("../../utils/getTouchPosition");
var measureElement_1 = require("../../utils/measureElement");
var defaults = {
    centered: false,
    className: '',
    multiple: true,
    passthrough: true,
    spread: 2,
};
var withRippleFactory = function (_a) {
    var RippleNode = _a.RippleNode, RippleWrapper = _a.RippleWrapper, passthrough = _a.passthrough;
    return (function (options) {
        if (options === void 0) { options = {}; }
        var passProps = getPassThrough_1.default(passthrough);
        var _a = __assign({}, defaults, options), defaultCentered = _a.centered, defaultClassName = _a.className, defaultMultiple = _a.multiple, defaultPassthrough = _a.passthrough, defaultSpread = _a.spread;
        return function withRipple(ComposedComponent) {
            return _a = (function (_super) {
                    __extends(RippledComponent, _super);
                    function RippledComponent() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.state = {
                            ripples: {},
                        };
                        _this.currentCount = 0;
                        _this.deactivateTimeout = null;
                        _this.ripples = {};
                        _this.rootNode = null;
                        _this.touchCache = false;
                        _this.getDescriptor = function (x, y, isTouch) { return (new Promise(function (resolve) {
                            if (_this.rootNode) {
                                measureElement_1.default(_this.rootNode).then(function (_a) {
                                    var left = _a.left, top = _a.top, height = _a.height, width = _a.width;
                                    resolve({
                                        active: true,
                                        isTouch: isTouch,
                                        width: Math.max(width, height) * _this.props.rippleSpread,
                                        x: _this.props.rippleCentered ? left + width / 2 : x - left,
                                        y: _this.props.rippleCentered ? top + height / 2 : y - top,
                                    });
                                });
                            }
                            else {
                                resolve({
                                    active: true,
                                    isTouch: isTouch,
                                    width: 0,
                                    x: 0,
                                    y: 0,
                                });
                            }
                        })); };
                        _this.getNextKey = function () {
                            _this.currentCount += 1;
                            return "ripple" + _this.currentCount;
                        };
                        _this.handleDeactivate = function () {
                            _this.setState({
                                ripples: ramda_1.keys(_this.state.ripples).reduce(function (result, rippleKey) {
                                    return ramda_1.assoc(rippleKey, __assign({}, _this.state.ripples[rippleKey], { active: false }), result);
                                }, {}),
                            });
                        };
                        _this.handleRippleFinish = function (key) {
                            var ripples = ramda_1.dissoc(key, _this.state.ripples);
                            _this.setState({ ripples: ripples });
                        };
                        _this.handleInnerRef = function (node) {
                            _this.rootNode = node;
                        };
                        _this.handleMouseDown = function (event) {
                            if (!_this.props.disabled && _this.props.ripple) {
                                var _a = getMousePosition_1.default(event), x = _a.x, y = _a.y;
                                _this.createRipple(x, y, false);
                            }
                            if (_this.props.onMouseDown) {
                                _this.props.onMouseDown(event);
                            }
                        };
                        _this.handleTouchStart = function (event) {
                            if (!_this.props.disabled) {
                                var _a = getTouchPosition_1.default(event), x = _a.x, y = _a.y;
                                _this.createRipple(x, y, true);
                            }
                            if (_this.props.onTouchStart) {
                                _this.props.onTouchStart(event);
                            }
                        };
                        _this.handleMouseUp = function (event) {
                            _this.deactivateTimeout = window.setTimeout(_this.handleDeactivate, 100);
                            if (_this.props.onMouseUp) {
                                _this.props.onMouseUp(event);
                            }
                        };
                        _this.handleTouchEnd = function (event) {
                            _this.deactivateTimeout = window.setTimeout(_this.handleDeactivate, 100);
                            if (_this.props.onMouseUp) {
                                _this.props.onTouchEnd(event);
                            }
                        };
                        _this.renderRipple = function (key, className, _a) {
                            var x = _a.x, y = _a.y, width = _a.width, active = _a.active, isTouch = _a.isTouch;
                            return (React.createElement(RippleNode, __assign({}, passProps(_this.props, 'RippleNode', _this), { active: active, idx: key, innerRef: function (node) { _this.ripples[key] = node; }, isTouch: isTouch, key: key, onDeactivate: _this.handleDeactivate, onFinish: _this.handleRippleFinish, spreadSize: width, startX: x, startY: y })));
                        };
                        return _this;
                    }
                    RippledComponent.prototype.componentWillUnmount = function () {
                        if (this.deactivateTimeout) {
                            clearTimeout(this.deactivateTimeout);
                        }
                    };
                    RippledComponent.prototype.rippleShouldTrigger = function (isTouch) {
                        var shouldStart = isTouch ? true : !this.touchCache;
                        this.touchCache = isTouch;
                        return shouldStart;
                    };
                    RippledComponent.prototype.createRipple = function (interactionX, interactionY, isTouch) {
                        var _this = this;
                        if (this.rippleShouldTrigger(isTouch)) {
                            this.getDescriptor(interactionX, interactionY, isTouch).then(function (descriptor) {
                                var ripples = (_a = {}, _a[_this.getNextKey()] = descriptor, _a);
                                _this.setState({
                                    ripples: _this.props.rippleMultiple
                                        ? __assign({}, _this.state.ripples, ripples) : ripples,
                                });
                                var _a;
                            });
                        }
                    };
                    RippledComponent.prototype.render = function () {
                        var _this = this;
                        var _a = this.props, children = _a.children, disabled = _a.disabled, ripple = _a.ripple, rippleCentered = _a.rippleCentered, rippleClassName = _a.rippleClassName, rippleMultiple = _a.rippleMultiple, rippleSpread = _a.rippleSpread, other = __rest(_a, ["children", "disabled", "ripple", "rippleCentered", "rippleClassName", "rippleMultiple", "rippleSpread"]);
                        var ripples = this.state.ripples;
                        var childRipples = ramda_1.keys(ripples).map(function (key) {
                            return _this.renderRipple(key, rippleClassName, ripples[key]);
                        });
                        var childProps = __assign({}, other, { onMouseDown: this.handleMouseDown, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onMouseUp: this.handleMouseUp });
                        var finalProps = (defaultPassthrough
                            ? __assign({}, childProps, { disabled: disabled }) : childProps);
                        if (!ripple) {
                            return React.createElement(ComposedComponent, finalProps, children);
                        }
                        return React.createElement(ComposedComponent, finalProps, children, (React.createElement(RippleWrapper, __assign({}, passProps(this.props, 'RippleWrapper', this), { className: rippleClassName, innerRef: this.handleInnerRef }), childRipples)));
                    };
                    return RippledComponent;
                }(react_1.Component)),
                _a.defaultProps = {
                    disabled: false,
                    ripple: true,
                    rippleCentered: defaultCentered,
                    rippleClassName: defaultClassName,
                    rippleMultiple: defaultMultiple,
                    rippleSpread: defaultSpread,
                },
                _a;
            var _a;
        };
    });
};
exports.default = withRippleFactory;
//# sourceMappingURL=withRipple.js.map