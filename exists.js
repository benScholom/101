/**
 * @description
 * Returns false for null and undefined, true for everything else.
 * @example
 * var exists = require('101/exists');
 * exists('foo');     // true
 * exists(null);      // false
 * exists(undefined); // false
 * 
 * @module {function} 101/exists
 * @type {function}
 *
 * @function module:101/exists
 * @param val {*} - value to be existance checked
 * @return {boolean} whether the value exists or not
 */
module.exports = exists;

function exists (val) {
  return val !== undefined && val !== null;
}