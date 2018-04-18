"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
function getMonthAffected(date, selected) {
    if (!selected) {
        return false;
    }
    if (selected instanceof Date && date_fns_1.isSameMonth(date, selected)) {
        return true;
    }
    if (!(selected instanceof Date)) {
        var from = selected.from, to = selected.to;
        if (from && date_fns_1.isSameMonth(date, from)) {
            return true;
        }
        if (to && date_fns_1.isSameMonth(date, to)) {
            return true;
        }
        if (from && to && date_fns_1.isWithinRange(date, from, to)) {
            return true;
        }
    }
    return false;
}
exports.default = getMonthAffected;
//# sourceMappingURL=getMonthAffected.js.map