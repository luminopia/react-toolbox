"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isReactNative_1 = require("./isReactNative");
function getNativeTouchPosition(event) {
    var firstTouch = event.touches[0];
    return firstTouch
        ? { x: firstTouch.pageX, y: firstTouch.pageY }
        : { x: 0, y: 0 };
}
function getWebTouchPosition(event) {
    return {
        x: event.touches[0].pageX - (window.scrollX || window.pageXOffset),
        y: event.touches[0].pageY - (window.scrollY || window.pageYOffset),
    };
}
function getTouchPosition(event) {
    return isReactNative_1.default()
        ? getNativeTouchPosition(event.nativeEvent)
        : getWebTouchPosition(event);
}
exports.default = getTouchPosition;
//# sourceMappingURL=getTouchPosition.js.map