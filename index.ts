/**
 * @author Andres Jimenez Fork from @mean-expert/boot-script by Jonathan Casarrubias
 * @module Inject Decorator
 * @license MIT
 * @description
 * This decorator will return singleton instances
 * This avoids the need of creating static Injects
 **/
export function Inject() {
    function f(target: any)
    {
        function InjectInstance(reference: any)
        {
            return new target(reference);
        }
        return <any>InjectInstance;
    }
    return f
}
