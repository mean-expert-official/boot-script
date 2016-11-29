"use strict";
/**
 * @author Andres Jimenez Fork from @mean-expert/boot-script by Jonathan Casarrubias
 * @module Inject Decorator
 * @license MIT
 * @description
 * This decorator will return singleton instances
 * This avoids the need of creating static Injects
 **/
function Inject(injectionKey) {
    function f(target) {
        var targetType = target.constructor;
        if (!targetType.hasOwnProperty('__inject__')) {
            targetType.__inject__ = {};
        }
        targetType.__inject__ = injectionKey;
        function InjectInstance(reference) {
            return new target(reference);
        }
        return InjectInstance;
    }
    return f;
}
exports.__esModule = true;
exports["default"] = Inject;
