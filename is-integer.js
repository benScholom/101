/**
 * @description
 * Returns true if n is an integer.
 * @example
 * var isInteger = require('101/is-Integer');
 * isInteger(101); // true
 * isInteger(101.01); // false
 * 
 * @module 101/is-integer
 *
 * @function module:101/is-integer
 * @param {*} val - value checked to be a string
 * @return {boolean} Whether the value is an integer or not
 */

module.exports = isInteger;

function isInteger (val) {
  return typeof val === 'number' && isFinite(val) && Math.floor(val) === val;
}
