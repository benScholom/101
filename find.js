var isFunction = require('./is-function');
var exists = require('./exists');
var findIndex = require('./find-index');

/**
 * @description
 * Finds the first value in the list that passes the given function (predicate) and returns it's index.
 * If list is not provided find will return a partial-function which accepts a list as the first argument.
 * @example
 * var find = require('101/find');
 * var hasProps = require('101/has-properties');
 * var arr = [{ a: 1, b: 1 }, { b: 1 }, { c: 1 }];
 * var item = find(arr, hasProps({ a:1 }));
 * // returns { a: 1, b: 1 }
 * // returns null if not found
 * // partial-function
 * var partial = find(hasProps({ a: 1 }));
 * var item = partial(arr);
 * // returns { a: 1, b: 1 }
 * // returns null if not found
 * 
 * @module 101/find
 *
 * @function module:101/find
 *
 * @param {array|string} list - list to be searched
 * @param {function} predicate - executed on each item in the list and returns true when the item is found
 * @return {*} - first element which passes predicate
 *
 * @param {function} predicate - executed on each item in the list and returns true when the item is found
 * @return {function} - partial function (accepts list and returns first element that passes predicate)
 */
module.exports = find;

function find (list, predicate) {
  if (exists(list && list.length) && !isFunction(list)) {
    var index = findIndex(list, predicate);
    return ~index ? list[index] : null;
  }
  else if (isFunction(list)) {
    predicate = list;
    return function (list) {
      if (!exists(list && list.length)) {
        throw new TypeError('list must have length property');
      }
      var index = findIndex(list, predicate);
      return ~index ? list[index] : null;
    };
  }
  else {
    throw new TypeError('first argument must be a list (have length) or function');
  }
}
