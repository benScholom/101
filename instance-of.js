/**
 * @description
 * Functional version of JavaScript's instanceof, returns a
 * partial function which expects a value argument and returns
 * true if the value is an instance of the Class (false if not).
 * @example
 * var instanceOf = require('101/instance-of');
 * ['foo', 'bar', 1].map(instanceOf('string')); // [true, true, false]
 * 
 * @module 101/instance-of
 *
 * @function module:101/instance-of
 * @param {function} Class - Class of which the value should be
 * @return {function} Partial-function instanceOfClass (which accepts any value and returns if the value is an instance of the specified class)
 */

// (function)(val)
module.exports = instanceOf;

function instanceOf (Class) {
  return function (val) {
    return val instanceof Class;
  };
}