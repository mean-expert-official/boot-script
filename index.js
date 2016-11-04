var ModelRegister = require('@mean-expert/model-register/index');
/**
 * @author Jonathan Casarrubias
 * @module Model Decorator
 * @license MIT
 * @description
 * This decorator will register fireloop models
 **/
module.exports = function Model(target) {
  var original = target;
  var f = function (reference) {
    new ModelRegister(target, reference);
    return  original.bind(this, reference)
  }
  f.prototype = original.prototype;
  return f;
}
