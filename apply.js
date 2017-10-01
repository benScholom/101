/**
 * @description
 * Functional version of function.apply
 * @example
 * var apply = require('101/apply');
 * [sum].map(apply(null, [1, 2, 3])); // [6] = [sum(1,2,3)] = [1+2+3]
 * function sum () {  // sums all arguments  }
 * apply({ prop: 'val' })(function () { return this.prop; });  // 'val
 * 
 * @module 101/apply
 * 
 * @function module:101/apply
 * @param {*} thisArg - Context applied to fn
 * @param {array} args - Arguments applied to fn
 * @return {function} function which accepts a function, fn, and applies thisArg, and args to it. Returns fn.apply(thisArg, args).
 */
module.exports = apply;

function apply (thisArg, args) {
  return function (fn) {
    return fn.apply(thisArg, args);
  };
}