"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function createElement(displayName, tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    var fn = function (props) {
        var children = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            children[_i - 1] = arguments[_i];
        }
        return (React.createElement.apply(React, [tagName, props].concat(children)));
    };
    fn.displayName = displayName;
    return fn;
}
exports.default = createElement;
//# sourceMappingURL=createElement.js.map