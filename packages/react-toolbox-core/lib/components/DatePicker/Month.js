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
var getFullDayOfWeek_1 = require("./locale/getFullDayOfWeek");
var getFullMonth_1 = require("./locale/getFullMonth");
var getMonthMatrix_1 = require("./getMonthMatrix");
var getMonthAffected_1 = require("./getMonthAffected");
function monthFactory(_a) {
    var Day = _a.Day, DaysWeek = _a.DaysWeek, DaysWrapper = _a.DaysWrapper, MonthTitle = _a.MonthTitle, MonthWrapper = _a.MonthWrapper, Weekday = _a.Weekday, WeekdaysWrapper = _a.WeekdaysWrapper, passthrough = _a.passthrough;
    var passProps = getPassThrough_1.default(passthrough);
    return (function (_super) {
        __extends(Month, _super);
        function Month() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.getMonthMatrix = ramda_1.memoize(getMonthMatrix_1.default);
            _this.renderDays = function () {
                var _a = _this.props, highlighted = _a.highlighted, isDayBlocked = _a.isDayBlocked, isDayDisabled = _a.isDayDisabled, onDayClick = _a.onDayClick, onDayMouseEnter = _a.onDayMouseEnter, onDayMouseLeave = _a.onDayMouseLeave, selected = _a.selected, sundayFirstDayOfWeek = _a.sundayFirstDayOfWeek, viewDate = _a.viewDate;
                var monthMatrix = _this.getMonthMatrix(viewDate.getTime(), sundayFirstDayOfWeek);
                var weeks = [];
                var days;
                for (var i = 0; i < monthMatrix.length; i++) {
                    days = [];
                    for (var j = 0; j < 7; j++) {
                        var monthDay = monthMatrix[i][j];
                        days[j] = (React.createElement(Day, __assign({}, passProps(_this.props, 'Day', _this), { day: monthDay, highlighted: highlighted, isDayBlocked: isDayBlocked, isDayDisabled: isDayDisabled, key: monthDay.getTime().toString(), onClick: onDayClick, onMouseEnter: onDayMouseEnter, onMouseLeave: onDayMouseLeave, selected: selected, viewDate: viewDate })));
                    }
                    weeks[i] = (React.createElement(DaysWeek, __assign({}, passProps(_this.props, 'DaysWeek', _this), { key: "" + i + viewDate.getTime().toString() }), days));
                }
                return weeks;
            };
            _this.renderWeekDay = function (weekDay) { return (React.createElement(Weekday, __assign({}, passProps(_this.props, 'Weekday', _this), { key: getFullDayOfWeek_1.default(weekDay, _this.props.locale), weekDay: weekDay }), getFullDayOfWeek_1.default(weekDay, _this.props.locale))); };
            _this.renderWeekDays = function () {
                var idxs = ramda_1.range(0, 7);
                var sundayFirstDayOfWeek = _this.props.sundayFirstDayOfWeek;
                var sortedDaysIdx = sundayFirstDayOfWeek ? idxs : idxs.slice(1).concat([idxs[0]]);
                return sortedDaysIdx.map(_this.renderWeekDay);
            };
            return _this;
        }
        Month.prototype.shouldComponentUpdate = function (nextProps) {
            if (this.props.viewDate.getTime() !== nextProps.viewDate.getTime() ||
                this.props.isDayBlocked !== nextProps.isDayBlocked ||
                this.props.isDayDisabled !== nextProps.isDayDisabled ||
                this.props.onDayClick !== nextProps.onDayClick ||
                this.props.onDayMouseEnter !== nextProps.onDayMouseEnter ||
                this.props.onDayMouseLeave !== nextProps.onDayMouseLeave ||
                this.props.sundayFirstDayOfWeek !== nextProps.sundayFirstDayOfWeek) {
                return true;
            }
            if (getMonthAffected_1.default(this.props.viewDate, this.props.selected) ||
                getMonthAffected_1.default(nextProps.viewDate, nextProps.selected) ||
                getMonthAffected_1.default(this.props.viewDate, this.props.highlighted) ||
                getMonthAffected_1.default(nextProps.viewDate, nextProps.highlighted)) {
                return true;
            }
            return false;
        };
        Month.prototype.render = function () {
            var _a = this.props, highlighted = _a.highlighted, isDayBlocked = _a.isDayBlocked, isDayDisabled = _a.isDayDisabled, locale = _a.locale, onDayClick = _a.onDayClick, onDayMouseEnter = _a.onDayMouseEnter, selected = _a.selected, sundayFirstDayOfWeek = _a.sundayFirstDayOfWeek, viewDate = _a.viewDate, rest = __rest(_a, ["highlighted", "isDayBlocked", "isDayDisabled", "locale", "onDayClick", "onDayMouseEnter", "selected", "sundayFirstDayOfWeek", "viewDate"]);
            return (React.createElement(MonthWrapper, __assign({}, rest, passProps(this.props, 'MonthWrapper', this)),
                React.createElement(MonthTitle, __assign({}, passProps(this.props, 'MonthTitle', this), { viewDate: viewDate }),
                    getFullMonth_1.default(viewDate),
                    " ",
                    viewDate.getFullYear()),
                React.createElement(WeekdaysWrapper, __assign({}, passProps(this.props, 'WeekdaysWrapper', this)), this.renderWeekDays()),
                React.createElement(DaysWrapper, __assign({}, passProps(this.props, 'DaysWrapper', this)), this.renderDays())));
        };
        return Month;
    }(react_1.Component));
}
exports.default = monthFactory;
//# sourceMappingURL=Month.js.map