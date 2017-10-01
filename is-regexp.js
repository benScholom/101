/**
 * @description
 * Check if a value is an instance of RegExp
 * @example
 * var isRegExp = require('101/is-regexp');
 * [new RegExp('.*'), /./, {}, 1].map(isRegExp); // [true, true, false, false]
 * //removed * from after . in /./ to allow JSDocs
 * 
 * @module 101/is-regexp
 *
 * @function module:101/is-regexp
 * @param {*} val - value checked to be an instance of RegExp
 * @return {boolean} Whether the value is an object or not
 */

module.exports = function isRegExp (val) {
  return Object.prototype.toString.call(val) == '[object RegExp]';
};

