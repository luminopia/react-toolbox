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
var date_fns_1 = require("date-fns");
var getPassThrough_1 = require("../../utils/getPassThrough");
var getSelectionMatch_1 = require("./getSelectionMatch");
function dayFactory(_a) {
    var DayNode = _a.DayNode, passthrough = _a.passthrough;
    var passProps = getPassThrough_1.default(passthrough);
    return _b = (function (_super) {
            __extends(Day, _super);
            function Day() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.getSelectedMatch = ramda_1.memoize(getSelectionMatch_1.default);
                _this.getHighlightedMatch = ramda_1.memoize(getSelectionMatch_1.default);
                _this.handleClick = function (event) {
                    var _a = _this.props, day = _a.day, isDayDisabled = _a.isDayDisabled, onClick = _a.onClick, viewDate = _a.viewDate;
                    if (date_fns_1.isSameMonth(day, viewDate) && !isDayDisabled(day)) {
                        onClick(day, event);
                    }
                };
                _this.handleMouseEnter = function (event) {
                    var _a = _this.props, day = _a.day, isDayDisabled = _a.isDayDisabled, onMouseEnter = _a.onMouseEnter, viewDate = _a.viewDate;
                    if (date_fns_1.isSameMonth(day, viewDate) && !isDayDisabled(day)) {
                        onMouseEnter(day, event);
                    }
                };
                _this.handleMouseLeave = function (event) {
                    var _a = _this.props, day = _a.day, isDayDisabled = _a.isDayDisabled, onMouseLeave = _a.onMouseLeave, viewDate = _a.viewDate;
                    if (date_fns_1.isSameMonth(day, viewDate) && !isDayDisabled(day)) {
                        onMouseLeave(day, event);
                    }
                };
                return _this;
            }
            Day.prototype.shouldComponentUpdate = function (nextProps) {
                if (nextProps.isDayBlocked !== this.props.isDayBlocked ||
                    nextProps.isDayDisabled !== this.props.isDayDisabled ||
                    nextProps.day.getTime() !== this.props.day.getTime() ||
                    nextProps.viewDate.getTime() !== this.props.viewDate.getTime()) {
                    return true;
                }
                if ((this.props.selected || nextProps.selected) && !getSelectionMatch_1.equalSelectionMatch(this.getSelectedMatch(nextProps.day, this.props.selected, this.props.viewDate), this.getSelectedMatch(nextProps.day, nextProps.selected, nextProps.viewDate))) {
                    return true;
                }
                if ((this.props.highlighted || nextProps.highlighted) && !getSelectionMatch_1.equalSelectionMatch(this.getHighlightedMatch(nextProps.day, this.props.highlighted, this.props.viewDate), this.getHighlightedMatch(nextProps.day, nextProps.highlighted, nextProps.viewDate))) {
                    return true;
                }
                return false;
            };
            Day.prototype.render = function () {
                var _a = this.props, day = _a.day, highlighted = _a.highlighted, isDayBlocked = _a.isDayBlocked, isDayDisabled = _a.isDayDisabled, selected = _a.selected, viewDate = _a.viewDate, rest = __rest(_a, ["day", "highlighted", "isDayBlocked", "isDayDisabled", "selected", "viewDate"]);
                var selectedMatch = this.getSelectedMatch(day, selected, viewDate);
                var highlightedMatch = this.getHighlightedMatch(day, highlighted, viewDate);
                var isHighlighted = highlightedMatch.selected || highlightedMatch.inRange;
                return (React.createElement(DayNode, __assign({}, rest, passProps(this.props, 'DayNode', this), { blocked: isDayBlocked && isDayBlocked(day), disabled: isDayDisabled && isDayDisabled(day), highlighted: isHighlighted, inRange: selectedMatch.inRange, onClick: this.handleClick, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, outOfMonth: !date_fns_1.isSameMonth(viewDate, day), selected: selectedMatch.selected, selectedSource: selectedMatch.source, today: date_fns_1.isToday(day) }), day.getDate()));
            };
            return Day;
        }(react_1.PureComponent)),
        _b.defaultProps = {
            isDayBlocked: ramda_1.F,
            isDayDisabled: ramda_1.F,
        },
        _b;
    var _b;
}
exports.default = dayFactory;
//# sourceMappingURL=Day.js.map