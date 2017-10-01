/**
 * @description
 * Functional version of a strict object check (Arrays and RegExps are not objects)
 * @example
 * var isObject = require('101/is-object');
 * [{}, { foo: 1 }, 100].map(isObject); // [true, true, false]
 * 
 * @module 101/is-object
 *
 * @function module:101/is-object
 * @param {*} val - value checked to be an object
 * @return {boolean} Whether the value is an object or not
 */
var exists = require('./exists');

module.exports = isObject;

function isObject (val) {
  return typeof val === 'object' &&
    exists(val) &&
    !Array.isArray(val) &&
    !(val instanceof RegExp) &&
    !(val instanceof String) &&
    !(val instanceof Number);
}