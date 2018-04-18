"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateLocales_1 = require("./dateLocales");
var hasOwnProperty_1 = require("../../../utils/hasOwnProperty");
function getFullDayOfWeek(weekDay, locale) {
    if (locale === void 0) { locale = 'en'; }
    var localeObject = dateLocales_1.default(locale);
    return hasOwnProperty_1.default(localeObject, 'weekdays') && localeObject.weekdays
        ? localeObject.weekdays[weekDay] || 'Unknown'
        : 'Unknown';
}
exports.default = getFullDayOfWeek;
//# sourceMappingURL=getFullDayOfWeek.js.map