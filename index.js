"use strict";
/**
 * @author Andres Jimenez Fork from @mean-expert/boot-script by Jonathan Casarrubias
 * @module Inject Decorator
 * @license MIT
 * @description
 * This decorator will return singleton instances
 * This avoids the need of creating static Injects
 **/
function Inject() {
    function f(target) {
        function InjectInstance(reference) {
            return new target(reference);
        }
        return InjectInstance;
    }
    return f;
}
exports.Inject = Inject;
