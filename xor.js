

/**
 * @description
 * Exclusive or Works great with array.reduce.
 * @example
 * var xor = require('101/xor');
 * xor(true, true);   // false
 * xor(true, false);  // true
 * xor(false, true);  // true
 * xor(false, false); // false
 * 
 * @module 101/xor
 *
 * @function module:101/xor
 * @param {*} a - any value
 * @param {*} b - any value
 * @return {boolean} a xor b
 */

module.exports = xor;

function xor (a, b) {
  return !(!a && !b) && !(a && b);
}
