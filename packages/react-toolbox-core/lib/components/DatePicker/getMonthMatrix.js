"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
function getMonthMatrix(time, sundayFirstDayOfWeek) {
    var monthMatrix = [];
    var viewDate = new Date(time);
    var firstDay = sundayFirstDayOfWeek
        ? date_fns_1.subDays(date_fns_1.startOfWeek(viewDate), 1)
        : date_fns_1.startOfWeek(viewDate);
    var lastDay = sundayFirstDayOfWeek
        ? date_fns_1.subDays(date_fns_1.lastDayOfWeek(date_fns_1.lastDayOfMonth(viewDate)), 1)
        : date_fns_1.lastDayOfWeek(date_fns_1.lastDayOfMonth(viewDate));
    var nweeks = Math.ceil(date_fns_1.differenceInCalendarDays(lastDay, firstDay) / 7);
    for (var i = 0; i < nweeks; i++) {
        monthMatrix[i] = [];
        for (var j = 0; j < 7; j++) {
            var monthDay = date_fns_1.addDays(firstDay, j + i * 7);
            monthMatrix[i][j] = monthDay;
        }
    }
    return monthMatrix;
}
exports.default = getMonthMatrix;
//# sourceMappingURL=getMonthMatrix.js.map