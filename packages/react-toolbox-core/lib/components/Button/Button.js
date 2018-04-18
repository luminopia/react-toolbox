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
var react_1 = require("react");
var getPassThrough_1 = require("../../utils/getPassThrough");
function buttonFactory(_a) {
    var ButtonNode = _a.ButtonNode, LinkNode = _a.LinkNode, passthrough = _a.passthrough;
    var passProps = getPassThrough_1.default(passthrough);
    return _b = (function (_super) {
            __extends(Button, _super);
            function Button() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.rootNode = null;
                _this.handleMouseUp = function (event) {
                    if (_this.rootNode) {
                        _this.rootNode.blur();
                    }
                    if (_this.props.onMouseUp) {
                        _this.props.onMouseUp(event);
                    }
                };
                _this.handleMouseLeave = function (event) {
                    if (_this.rootNode) {
                        _this.rootNode.blur();
                    }
                    if (_this.props.onMouseLeave) {
                        _this.props.onMouseLeave(event);
                    }
                };
                _this.handleInnerRef = function (node) {
                    var innerRef = _this.props.innerRef;
                    _this.rootNode = node;
                    if (innerRef) {
                        innerRef(node);
                    }
                };
                return _this;
            }
            Button.prototype.render = function () {
                var nodeTag = this.props.href ? 'LinkNode' : 'ButtonNode';
                var ButtonElement = this.props.href ? LinkNode : ButtonNode;
                var _a = this.props, children = _a.children, primary = _a.primary, flat = _a.flat, label = _a.label, type = _a.type, others = __rest(_a, ["children", "primary", "flat", "label", "type"]);
                var isPrimary = primary || (!others.accent && !others.neutral);
                var isNoneOther = !others.raised && !others.floating && !others.toggle;
                var isFlat = flat || isNoneOther;
                return (React.createElement(ButtonElement, __assign({}, others, passProps(this.props, nodeTag, this), { flat: isFlat, innerRef: this.handleInnerRef, onMouseLeave: this.handleMouseLeave, onMouseUp: this.handleMouseUp, primary: isPrimary, type: !this.props.href ? type : null }),
                    children,
                    label));
            };
            return Button;
        }(react_1.PureComponent)),
        _b.defaultProps = {
            accent: false,
            flat: false,
            floating: false,
            mini: false,
            neutral: true,
            primary: false,
            raised: false,
            type: 'button',
        },
        _b;
    var _b;
}
exports.default = buttonFactory;
//# sourceMappingURL=Button.js.map