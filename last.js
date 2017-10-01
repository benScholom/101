var isObject = require('./is-object');
var exists = require('./exists');
var isFunction = require('./is-function');

/**
 * @description
 * Returns the last value of the item.
 * @example
 * var last = require('101/last');
 * last([1, 2, 3]); // 3
 * last('hello');   // 'o'
 * 
 * @module 101/last
 *
 * @function module:101/last
 * @param {array|string|object} item - item whose last value is returned
 * @return {*} Last value of an array. Last char of a string. Last value of an object. Last char of item.toString() for everything else.
 */
module.exports = last;

function last (item) {
  var val;
  if (exists(item && item.length) && !isFunction(item)) {
    val = item[item.length - 1];
  }
  else {
    val = (item && item.toString) ? last(item.toString()) : undefined;
  }
  return val;
}