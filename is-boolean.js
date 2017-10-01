/**
 * @description
 * Functional version of val typeof 'boolean'
 * @example
 * var isBoolean = require('101/is-boolean');
 * [true, false, 1].map(isBoolean); // [true, true, false]
 *
 * @module 101/is-boolean
 *
 * @function module:101/is-boolean
 * @param {*} val - value checked to be a boolean
 * @return {boolean} Whether the value is a boolean or not
 */
module.exports = isBoolean;

function isBoolean (val) {
  return typeof val === 'boolean';
}