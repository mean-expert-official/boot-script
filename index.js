"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function BootScript() {
    function f(target) {
        function BootScriptInstance(reference) {
            return new target(reference);
        }
        return BootScriptInstance;
    }
    return f;
}
exports.BootScript = BootScript;
function BootScriptAsync() {
    function f(target) {
        function BootScriptInstance(reference, cb) {
            return new target(reference, cb);
        }
        return BootScriptInstance;
    }
    return f;
}
exports.BootScriptAsync = BootScriptAsync;
//# sourceMappingURL=index.js.map