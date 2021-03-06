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
var isComponentOfType_1 = require("../../utils/isComponentOfType");
function singlePickerFactory(_a) {
    var MonthsWrapper = _a.MonthsWrapper, Month = _a.Month, passthrough = _a.passthrough;
    var passProps = getPassThrough_1.default(passthrough);
    return (function (_super) {
        __extends(SinglePicker, _super);
        function SinglePicker() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                highlighted: undefined,
            };
            _this.handleDayMouseEnter = function (dateForDay, event) {
                _this.setState({ highlighted: dateForDay });
            };
            _this.renderMonth = function (month) { return (react_1.cloneElement(month, {
                highlighted: _this.state.highlighted,
                onDayClick: _this.props.onChange,
                onDayMouseEnter: _this.handleDayMouseEnter,
                selected: _this.props.selected,
            })); };
            return _this;
        }
        SinglePicker.prototype.render = function () {
            var _this = this;
            var _a = this.props, children = _a.children, onChange = _a.onChange, selected = _a.selected, rest = __rest(_a, ["children", "onChange", "selected"]);
            return (React.createElement(MonthsWrapper, __assign({}, rest, passProps(this.props, 'MonthsWrapper', this)), react_1.Children.map(children, function (child) { return (isComponentOfType_1.default(Month, child)
                ? _this.renderMonth(child)
                : child); })));
        };
        return SinglePicker;
    }(react_1.PureComponent));
}
exports.default = singlePickerFactory;
//# sourceMappingURL=SinglePicker.js.map