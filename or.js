/**
 * @description
 * Functional version of ||
 * @example
 * var or = require('101/or');
 * or(true, true);   // true
 * or(true, false);  // true
 * or(false, false); // false
 * or("foo", false); // "foo"
 * 
 * @module 101/or
 *
 * @function module:101/or
 * @param {*} a - any value
 * @param {*} b - any value
 * @return {*} a || b
 */

module.exports = or;

function or (a, b) {
  return a || b;
}
