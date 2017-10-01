/**
 * @description
 * Functional version of val typeof 'function'
 * @example
 * var isFunction = require('101/is-function');
 * [parseInt, function () {}, 'foo'].map(isFunction); // [true, true, false]
 * 
 * @module 101/is-function
 *
 * @function module:101/is-function
 * @param {*} val - value checked to be a function
 * @return {boolean} Whether the value is a function or not
 */
module.exports = isFunction;

function isFunction (v) {
  return typeof v === 'function';
}