/**
 * @description
 * Functional version of &&. Works great with array.reduce.
 * 
 * @module 101/and
 * 
 * @example
 * var and = require('101/and');
 * and(true, false); // false
 * and(true, true);  // true
 * and(true, "foo");  // "foo"
 * 
 * @function module:101/and
 * @param {*} a - any value
 * @param {*} b - any value
 * @return {*} a && b
 */
module.exports = and;

function and (a, b) {
  return a && b;
}
