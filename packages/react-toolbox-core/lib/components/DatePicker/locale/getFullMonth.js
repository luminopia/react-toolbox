"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dateLocales_1 = require("./dateLocales");
var hasOwnProperty_1 = require("../../../utils/hasOwnProperty");
function getFullMonth(date, locale) {
    if (locale === void 0) { locale = 'en'; }
    var month = date.getMonth();
    var localeObject = dateLocales_1.default(locale);
    return hasOwnProperty_1.default(localeObject, 'months') && !!localeObject.months
        ? localeObject.months[month] || 'Unknown'
        : 'Unknown';
}
exports.default = getFullMonth;
//# sourceMappingURL=getFullMonth.js.map