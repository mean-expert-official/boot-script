declare var Object: any;
import { ModelRegister } from '@mean-expert/model-register/index';
/**
 * @author Jonathan Casarrubias
 * @module Model Decorator
 * @license MIT
 * @description
 * This decorator will register fireloop models
 **/
export default function Model(arg: { hooks: {}, remotes: {} }) {
    function f(target: any)
    {
        function ff(reference: any)
        {
            target = Object.assign(target, arg);
            new ModelRegister(target, reference);
            return new target(reference.app)
        }
        return <any>ff;
    }
    return f
}
