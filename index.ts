/**
 * @author Andres Jimenez Fork from @mean-expert/boot-script by Jonathan Casarrubias
 * @module Inject Decorator
 * @license MIT
 * @description
 * This decorator will return singleton instances
 * This avoids the need of creating static Injects
 **/
export default function Inject(injectionKey : any) {
    function f(target: any )
    {
        const targetType : { __inject__? : any } = target.constructor;
        
        if (!targetType.hasOwnProperty('__inject__')) {
            targetType.__inject__ = {};
        }

        targetType.__inject__ = injectionKey;
        function InjectInstance(reference: any)
        {
            return new target(reference);
        }
        return <any>InjectInstance;
    }
    return f
}
