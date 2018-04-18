"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ramda_1 = require("ramda");
function getPassThroughProps(option) {
    if (option === void 0) { option = []; }
    return function (props, node, instance) { return (Array.isArray(option)
        ? ramda_1.pick(option, props)
        : option(props, node, instance)); };
}
exports.default = getPassThroughProps;
//# sourceMappingURL=getPassThrough.js.map