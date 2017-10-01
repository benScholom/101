/**
 * @description
 * Assert if a given array contains a value
 * @example
 * var includes = require('101/includes');
 * var haystack = ['a', 'b', 'c', 'd', 'e'];
 * includes(haystack, 'c'); // true
 * // optional 3rd argument, searchFrom. Begin searching the target array from a specified index.
 * includes(haystack, 'c', 3); // false
 * includes(haystack, 'c', 0); // true
 * // partial argument functionality
 * var i = includes(haystack);
 * i('c') // true
 * i('g') // false
 * // example composition usage:
 * var not = require('101/not');
 * var notIn = not(includes);
 * [1, 2, 3, 4, 5].filter(notIn([1, 2, 3])); // [4, 5]
 * 
 * @module 101/includes
 * 
 * @param {Array} array
 * @param {*} searchElement
 * @param {Number} fromIndex
 * @return Boolean
 *
 */
'use strict';

var isNumber = require('./is-number');

module.exports = function (array, searchElement, fromIndex) {
  if (arguments.length === 1) {
    return includes.bind(null, array);
  } else {
    return includes(array, searchElement, fromIndex);
  }
};

function includes (array, searchElement, fromIndex) {
  if (!isNumber(fromIndex)) {
    fromIndex = 0;
  }
  if (Array.prototype.includes) {
    return Array.prototype.includes.call(array, searchElement, fromIndex);
  } else {
    // ES7 Array.prototype.includes polyfill (modified)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Browser_compatibility
    var O = Object(array);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = fromIndex;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) {
        return true;
      }
      k++;
    }
    return false;
  }
}
