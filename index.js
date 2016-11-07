"use strict";
var index_1 = require('@mean-expert/model-register/index');
module.exports = function Model(arg) {
    function f(target) {
        function ff(reference) {
            target = Object.assign(target, arg);
            new index_1.ModelRegister(target, reference);
            return new target(reference.app);
        }
        return ff;
    }
    return f;
};
//# sourceMappingURL=index.js.map