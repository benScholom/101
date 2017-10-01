
'use strict';

module.exports = values;

/**
 * @description
 * Borrowing from underscorejs
 * https://github.com/jashkenas/underscore
 * Retrieve the values of an object's properties
 * @example
 * var values = require('101/values');
 * var obj {
 *   foo: 'apple',
 *   bar: 'orange'
 * };
 * var objValues = values(obj);
 * objValues // ['apple', 'orange']
 * @module 101/values
 *
 * @param {Object} obj
 * @return {Array}
 */
function values (obj) {
  var keys = Object.keys(obj);
  var length = keys.length;
  var vals = new Array(length);
  for (var i = 0; i < length; i++) {
    vals[i] = obj[keys[i]];
  }
  return vals;
}
