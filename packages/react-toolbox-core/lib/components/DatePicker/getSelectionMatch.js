"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
function equalSelectionMatch(match1, match2) {
    return (match1.inRange === match2.inRange) &&
        (match1.selected === match2.selected) &&
        (match1.source === match2.source);
}
exports.equalSelectionMatch = equalSelectionMatch;
function getSelectionMatch(day, selected, viewDate) {
    if (!selected) {
        return { inRange: false, selected: false, source: null };
    }
    if (selected instanceof Date && date_fns_1.isSameDay(selected, day)) {
        return { inRange: false, selected: true, source: null };
    }
    if (!(selected instanceof Date)) {
        var from = selected.from, to = selected.to;
        var isOutOfRange = from && to && !date_fns_1.isSameMonth(day, viewDate);
        var dayToCompare = isOutOfRange ? getDayToCompare(day, viewDate) : day;
        var rangeIsDefined = !!from && !!to;
        // Check if it is selected
        if (from && date_fns_1.isSameDay(day, from) && !isOutOfRange) {
            return { inRange: rangeIsDefined, selected: true, source: 'from' };
        }
        if (to && date_fns_1.isSameDay(day, to) && !isOutOfRange) {
            return { inRange: rangeIsDefined, selected: true, source: 'to' };
        }
        // Check when it is a day out of range
        if (isOutOfRange) {
            if (date_fns_1.isBefore(day, viewDate)) {
                if (from && date_fns_1.isSameDay(dayToCompare, from)) {
                    return { inRange: false, selected: false, source: null };
                }
            }
            else if (to && date_fns_1.isSameDay(dayToCompare, to)) {
                return { inRange: false, selected: false, source: null };
            }
        }
        // Check when it is within range
        if (from && to && date_fns_1.isWithinRange(dayToCompare, from, to)) {
            return { inRange: true, selected: false, source: null };
        }
    }
    return { inRange: false, selected: false, source: null };
}
exports.default = getSelectionMatch;
function getDayToCompare(day, viewDate) {
    return date_fns_1.isBefore(day, viewDate)
        ? date_fns_1.startOfMonth(viewDate)
        : date_fns_1.endOfMonth(viewDate);
}
//# sourceMappingURL=getSelectionMatch.js.map