var isString = require('./is-string');
var isFunction = require('./is-function');
var pluck = require('./pluck');

/**
 * @description
 * Hashes an array into groups based on the value of a provided common key.
 * @example
 * var groupBy = require('101/group-by');
 * var arr = [
 *     {id: 1, foo: 'bar'},
 *     {id: 2, foo: 'qux'},
 *     {id: 3, foo: 'qux'}
 * ];
 * groupBy(arr, 'foo')
 * // {
 * //   bar: [
 * //     {id: 1, foo: 'bar'}
 * //   ],
 * //   qux: [
 * //     {id: 2, foo: 'qux'},
 * //     {id: 3, foo: 'qux'}
 * //   ]
 * // }
 * // always provide initial value when using with reduce!
 * arr.reduce(groupBy('foo'), {}) // assumes pluck if passed string
 * arr.reduce(groupBy(pluck('foo')), {}) // also accepts function
 * /*
 * {
 *   bar: [
 *     {id: 1, foo: 'bar'}
 *   ],
 *   qux: [
 *     {id: 2, foo: 'qux'},
 *     {id: 3, foo: 'qux'}
 *   ]
 * }
 *
 * @module 101/index-by
 *
 * @function module:101/index-by
 * @param {array|function|string} arr|indexer - array of objects to be indexed
 * @param {string|function} indexer - the common keypath or function which accepts an object and returns an index key
 * @return {obj|function} indexed|indexByPartial An object whose keys are the values of their common key and values are the original values.
 *     Or a partial function which applies the passed indexer to each object.
*/
module.exports = function(arrOrIndexer, indexer) {
  var arr;
  if (Array.isArray(arrOrIndexer)) {
    arr = arrOrIndexer;
    return arr.reduce(indexBy(indexer), {});
  }
  else {
    indexer = arrOrIndexer;
    if (!isString(indexer) && !isFunction(indexer)) {
      throw new TypeError('indexer must be a string or function');
    }
    return indexBy(indexer);
  }
}

function indexBy (indexer) {
  if (isString(indexer)) {
    indexer = pluck(indexer);
  }
  return function(prev, cur, index, arr) {
    var key = indexer(cur)
    prev[key] = prev[key] || []
    prev[key].push(cur);
    return prev;
  };
}