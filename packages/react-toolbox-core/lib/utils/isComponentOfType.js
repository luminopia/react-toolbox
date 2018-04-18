"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isComponentOfType(classType, reactElement) {
    if (typeof reactElement === 'string' || typeof reactElement === 'number' || !reactElement) {
        return false;
    }
    else {
        return reactElement.type === classType;
    }
}
exports.default = isComponentOfType;
//# sourceMappingURL=isComponentOfType.js.map