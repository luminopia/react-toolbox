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
var date_fns_1 = require("date-fns");
var ramda_1 = require("ramda");
var react_1 = require("react");
var getPassThrough_1 = require("../../utils/getPassThrough");
function datePickerFactory(_a) {
    var Month = _a.Month, NextNode = _a.NextNode, PickerWrapper = _a.PickerWrapper, PrevNode = _a.PrevNode, RangePicker = _a.RangePicker, SinglePicker = _a.SinglePicker, passthrough = _a.passthrough;
    var passProps = getPassThrough_1.default(passthrough);
    return _b = (function (_super) {
            __extends(DatePicker, _super);
            function DatePicker() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    viewDate: _this.props.viewDate,
                };
                _this.changeViewDate = function (viewDate) {
                    _this.setState({ viewDate: viewDate });
                };
                _this.handleNext = function () {
                    var viewDate = _this.state.viewDate;
                    _this.changeViewDate(date_fns_1.addMonths(viewDate, +1));
                };
                _this.handlePrev = function () {
                    var viewDate = _this.state.viewDate;
                    _this.changeViewDate(date_fns_1.addMonths(viewDate, -1));
                };
                _this.renderMonth = function (month) {
                    var _a = _this.props, isDayBlocked = _a.isDayBlocked, isDayDisabled = _a.isDayDisabled, locale = _a.locale, onDayClick = _a.onDayClick, onDayMouseEnter = _a.onDayMouseEnter, onDayMouseLeave = _a.onDayMouseLeave, sundayFirstDayOfWeek = _a.sundayFirstDayOfWeek;
                    var viewDate = _this.state.viewDate;
                    var viewFullYear = viewDate.getFullYear();
                    var viewMonth = viewDate.getMonth() + month;
                    var monthViewDate = new Date(viewFullYear, viewMonth, 1);
                    return (React.createElement(Month, __assign({}, passProps(_this.props, 'Month', _this), { isDayBlocked: isDayBlocked, isDayDisabled: isDayDisabled, key: monthViewDate.getTime().toString(), locale: locale, onDayClick: onDayClick, onDayMouseEnter: onDayMouseEnter, onDayMouseLeave: onDayMouseLeave, sundayFirstDayOfWeek: sundayFirstDayOfWeek, viewDate: monthViewDate })));
                };
                _this.renderPicker = function () {
                    var _a = _this.props, focusedInput = _a.focusedInput, highlighted = _a.highlighted, mode = _a.mode, numberOfMonths = _a.numberOfMonths, onChange = _a.onChange, onFocusedInputChange = _a.onFocusedInputChange, onHighlightedChange = _a.onHighlightedChange, resetToWhenFromChanges = _a.resetToWhenFromChanges, selected = _a.selected;
                    var Picker = mode === 'SINGLE' ? SinglePicker : RangePicker;
                    var children = ramda_1.map(_this.renderMonth, ramda_1.range(0, numberOfMonths));
                    var pickerTypeName = mode === 'SINGLE' ? 'SinglePicker' : 'RangePicker';
                    var rangePickerProps = { focusedInput: focusedInput, onFocusedInputChange: onFocusedInputChange, resetToWhenFromChanges: resetToWhenFromChanges };
                    var pickerTypeProps = mode === 'SINGLE' ? {} : rangePickerProps;
                    var baseProps = passProps(_this.props, pickerTypeName, _this);
                    return react_1.createElement(Picker, __assign({}, baseProps, pickerTypeProps, { highlighted: highlighted,
                        onChange: onChange,
                        onHighlightedChange: onHighlightedChange,
                        selected: selected }), children);
                };
                return _this;
            }
            DatePicker.prototype.render = function () {
                var _a = this.props, focusedInput = _a.focusedInput, isDayBlocked = _a.isDayBlocked, isDayDisabled = _a.isDayDisabled, locale = _a.locale, mode = _a.mode, numberOfMonths = _a.numberOfMonths, onChange = _a.onChange, selected = _a.selected, sundayFirstDayOfWeek = _a.sundayFirstDayOfWeek, viewDate = _a.viewDate, rest = __rest(_a, ["focusedInput", "isDayBlocked", "isDayDisabled", "locale", "mode", "numberOfMonths", "onChange", "selected", "sundayFirstDayOfWeek", "viewDate"]);
                return (React.createElement(PickerWrapper, __assign({}, rest, passProps(this.props, 'PickerWrapper', this)),
                    React.createElement(PrevNode, __assign({}, passProps(this.props, 'PrevNode', this), { onClick: this.handlePrev }), '<'),
                    React.createElement(NextNode, __assign({}, passProps(this.props, 'NextNode', this), { onClick: this.handleNext }), '>'),
                    this.renderPicker()));
            };
            return DatePicker;
        }(react_1.Component)),
        _b.defaultProps = {
            mode: 'RANGE',
            numberOfMonths: 2,
        },
        _b;
    var _b;
}
exports.default = datePickerFactory;
//# sourceMappingURL=DatePicker.js.map