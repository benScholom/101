/**
 * @description
 * Functional version of val typeof 'string'
 * @example
 * var isString = require('101/is-string');
 * ['foo', 'bar', 1].map(isString); // [true, true, false]
 * 
 * @module 101/is-string
 *
 * @function module:101/is-string
 * @param {*} val - value checked to be a string
 * @return {boolean} Whether the value is an string or not
 */
module.exports = isString;

function isString (val) {
  return typeof val === 'string' || val instanceof String;
}
