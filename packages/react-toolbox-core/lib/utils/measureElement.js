"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isReactNative_1 = require("./isReactNative");
function measureElement(element) {
    return new Promise(function (resolve) {
        if (isReactNative_1.default()) {
            element.measure(function (x, y, width, height, pageX, pageY) {
                resolve({ left: pageX, top: pageY, width: width, height: height });
            });
        }
        else {
            var _a = element.getBoundingClientRect(), left = _a.left, top_1 = _a.top, width = _a.width, height = _a.height;
            resolve({ left: left, top: top_1, width: width, height: height });
        }
    });
}
exports.default = measureElement;
//# sourceMappingURL=measureElement.js.map