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
var react_1 = require("react");
var isComponentOfType_1 = require("../../utils/isComponentOfType");
var getPassThrough_1 = require("../../utils/getPassThrough");
function rangePickerFactory(_a) {
    var MonthsWrapper = _a.MonthsWrapper, Month = _a.Month, passthrough = _a.passthrough;
    var passProps = getPassThrough_1.default(passthrough);
    return _b = (function (_super) {
            __extends(RangePicker, _super);
            function RangePicker() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.selecting = false;
                _this.handleDayClick = function (clickedDate, event) {
                    var _a = _this.props, focusedInput = _a.focusedInput, onChange = _a.onChange, onFocusedInputChange = _a.onFocusedInputChange, onHighlightedChange = _a.onHighlightedChange, resetToWhenFromChanges = _a.resetToWhenFromChanges, _b = _a.selected, selected = _b === void 0 ? {} : _b;
                    if (resetToWhenFromChanges && focusedInput !== 'END_DATE') {
                        onChange({ from: clickedDate, to: undefined });
                        onFocusedInputChange('END_DATE');
                        onHighlightedChange({ from: clickedDate, to: undefined });
                        _this.selecting = true;
                        return undefined;
                    }
                    if (!selected.from && !selected.to) {
                        if (focusedInput === 'END_DATE') {
                            onChange({ to: clickedDate });
                            onFocusedInputChange('START_DATE');
                            onHighlightedChange({ to: clickedDate });
                            _this.selecting = true;
                        }
                        else {
                            onChange({ from: clickedDate });
                            onFocusedInputChange('END_DATE');
                            onHighlightedChange({ from: clickedDate });
                            _this.selecting = true;
                        }
                    }
                    if (selected.from && !selected.to) {
                        if (focusedInput === 'START_DATE' ||
                            date_fns_1.isBefore(clickedDate, selected.from)) {
                            onChange({ from: clickedDate });
                            onFocusedInputChange('END_DATE');
                            onHighlightedChange({ from: clickedDate });
                            _this.selecting = true;
                        }
                        else {
                            onChange({ from: selected.from, to: clickedDate });
                            onFocusedInputChange(undefined);
                            onHighlightedChange({});
                            _this.selecting = false;
                        }
                    }
                    if (selected.to && !selected.from) {
                        if (focusedInput === 'END_DATE') {
                            onChange({ to: clickedDate });
                            onFocusedInputChange('START_DATE');
                            onHighlightedChange({ to: clickedDate });
                            _this.selecting = true;
                        }
                        else if (date_fns_1.isAfter(clickedDate, selected.to)) {
                            onChange({ from: clickedDate });
                            onFocusedInputChange('END_DATE');
                            onHighlightedChange({ from: clickedDate });
                            _this.selecting = true;
                        }
                        else {
                            onChange({ from: clickedDate, to: selected.to });
                            onFocusedInputChange(undefined);
                            onHighlightedChange({});
                            _this.selecting = false;
                        }
                    }
                    if (selected.to && selected.from) {
                        if (focusedInput === 'START_DATE') {
                            var to = date_fns_1.isBefore(clickedDate, selected.to)
                                ? selected.to
                                : undefined;
                            onChange({ from: clickedDate, to: to });
                            onFocusedInputChange('END_DATE');
                            onHighlightedChange({ from: clickedDate });
                            _this.selecting = true;
                        }
                        else if (focusedInput === 'END_DATE') {
                            if (date_fns_1.isAfter(clickedDate, selected.from)) {
                                onChange({ from: selected.from, to: clickedDate });
                                onFocusedInputChange(undefined);
                                onHighlightedChange({});
                                _this.selecting = false;
                            }
                            else {
                                onChange({ from: clickedDate });
                                onFocusedInputChange('END_DATE');
                                onHighlightedChange({ from: clickedDate });
                                _this.selecting = true;
                            }
                        }
                        else if (date_fns_1.isBefore(clickedDate, selected.to)) {
                            onChange({ from: clickedDate, to: selected.to });
                            onFocusedInputChange('END_DATE');
                            onHighlightedChange({ from: clickedDate });
                            _this.selecting = true;
                        }
                        else {
                            onChange({ from: selected.from, to: clickedDate });
                            onFocusedInputChange(undefined);
                            onHighlightedChange({});
                            _this.selecting = false;
                        }
                    }
                };
                _this.handleDayMouseEnter = function (dateForDay, event) {
                    var _a = _this.props, focusedInput = _a.focusedInput, onHighlightedChange = _a.onHighlightedChange;
                    var _b = _this.props.selected, selected = _b === void 0 ? {} : _b;
                    if (_this.selecting) {
                        if (focusedInput === 'END_DATE' && selected.from && date_fns_1.isAfter(dateForDay, selected.from)) {
                            onHighlightedChange({ from: selected.from, to: dateForDay });
                        }
                        else if (focusedInput === 'START_DATE' && selected.to && date_fns_1.isBefore(dateForDay, selected.to)) {
                            onHighlightedChange({ from: dateForDay, to: selected.to });
                        }
                    }
                };
                _this.handleDayMouseLeave = function (dateForDay, event) {
                    var _a = _this.props, focusedInput = _a.focusedInput, onHighlightedChange = _a.onHighlightedChange;
                    var _b = _this.props.selected, selected = _b === void 0 ? {} : _b;
                    if (_this.selecting) {
                        if (focusedInput === 'END_DATE' && selected.from && date_fns_1.isAfter(dateForDay, selected.from)) {
                            onHighlightedChange({ from: selected.from, to: undefined });
                        }
                        else if (focusedInput === 'START_DATE' && selected.to && date_fns_1.isBefore(dateForDay, selected.to)) {
                            onHighlightedChange({ from: undefined, to: selected.to });
                        }
                    }
                };
                _this.renderMonth = function (month) { return (react_1.cloneElement(month, {
                    highlighted: _this.props.highlighted,
                    onDayClick: _this.handleDayClick,
                    onDayMouseEnter: _this.handleDayMouseEnter,
                    onDayMouseLeave: _this.handleDayMouseLeave,
                    selected: _this.props.selected,
                })); };
                return _this;
            }
            RangePicker.prototype.render = function () {
                var _this = this;
                var _a = this.props, children = _a.children, focusedInput = _a.focusedInput, onChange = _a.onChange, selected = _a.selected, rest = __rest(_a, ["children", "focusedInput", "onChange", "selected"]);
                return (React.createElement(MonthsWrapper, __assign({}, rest, passProps(this.props, 'MonthsWrapper', this)), react_1.Children.map(children, function (child) { return (isComponentOfType_1.default(Month, child)
                    ? _this.renderMonth(child)
                    : child); })));
            };
            return RangePicker;
        }(react_1.Component)),
        _b.defaultProps = {
            onFocusedInputChange: function () { },
            onHighlightedChange: function () { },
        },
        _b;
    var _b;
}
exports.default = rangePickerFactory;
//# sourceMappingURL=RangePicker.js.map