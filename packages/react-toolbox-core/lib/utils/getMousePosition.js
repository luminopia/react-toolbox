"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMousePosition(event) {
    return {
        x: event.pageX - (window.scrollX || window.pageXOffset),
        y: event.pageY - (window.scrollY || window.pageYOffset),
    };
}
exports.default = getMousePosition;
//# sourceMappingURL=getMousePosition.js.map