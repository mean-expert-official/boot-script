"use strict";
var index_1 = require('@mean-expert/model-register/index');
function Model(arg) {
    function f(target) {
        function ff(reference) {
            target = Object.assign(target, arg);
            new index_1.ModelRegister(target, reference);
            return new target(reference.app);
        }
        return ff;
    }
    return f;
}
exports.Model = Model;
//# sourceMappingURL=index.js.map