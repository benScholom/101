var keypather = require('keypather')();
var passAny = require('./pass-any');
var isString = require('./is-string');
var isNumber = require('./is-number');
var isObject = require('./is-object');

/**
 * @description
 * Functional version of delete obj[key].
 * When only a key is specified del returns a partial-function which accepts obj.
 * @example
 * var del = require('101/del');
 * var obj = {
 *   foo: 1,
 *   bar: 2
 * };
 * del(obj, 'foo'); // { bar: 2 }
 * // use it with array.map
 * [obj, obj, obj].map(del('foo')); // [{ bar: 2 }, {same}, {same}]
 * // supports keypaths by default
 * var obj = {
 *   foo: {
 *     moo: 1,
 *     boo: 2
 *   },
 *   bar: 3
 * };
 * del(obj, 'foo.moo'); // { foo: { boo: 2 }, bar:3 }
 * 
 * @module 101/del
 *
 * @function module:101/del
 * @param {*} [obj] - object on which the values will be del
 * @param {string} key - key of the value being del on obj
 * @return {*|function} The same obj without the deleted key or Partial-function del (which accepts obj) and returns the same obj without the deleted key.
 */
module.exports = del;

function del (obj, key) {
  if (arguments.length === 1) {
    // (key)
    key = obj;
    return function (obj) {
      return _del(obj, key);
    };
  }
  else {
    return _del(obj, key);
  }
}

function _del (obj, key) {
  var keys;
  var numberOrString = passAny(isString, isNumber);
  if (isObject(obj) && numberOrString(key)) {
    // (obj, key)
    keypather.del(obj, key);
    return obj;
  }
  else if (isObject(obj) && Array.isArray(key)) {
    // (obj, keys)
    keys = key;

    for (var i = 0; i < keys.length; i++) {
      keypather.del(obj, keys[i]);
    }
    return obj;
  }
  else {
    throw new TypeError('Invalid arguments: expected str, val or val, obj');
  }
}
