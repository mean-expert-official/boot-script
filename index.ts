/**
 * @author Jonathan Casarrubias
 * @module BootScript Decorator
 * @license MIT
 * @description
 * This decorator will return boot script instances
 * This avoids the need of creating static bootscripts
 **/
export function BootScript() {
    function f(target: any)
    {
        function BootScriptInstance(reference: any)
        {
            return new target(reference);
        }
        return <any>BootScriptInstance;
    }
    return f
}

export function BootScriptAsync() {
    function f(target: any)
    {
        function BootScriptInstance(reference: any, cb: Function)
        {
            return new target(reference, cb);
        }
        return <any>BootScriptInstance;
    }
    return f
}
