var isString = require('./is-string');
var isNumber = require('./is-number');
var isObject = require('./is-object');
var keypather = require('keypather')();

/**
 * @description
 * Functional version of obj[key] = val.
 * When only a key and val are specified set returns a partial-function which accepts obj.
 * @example
 * var set = require('101/set');
 * var obj = {
 *   foo: 1,
 *   bar: 2
 * };
 * set(obj, 'foo'); // 1
 * // use it with array.map
 * [obj, obj, obj].map(set('foo', 100)); // [{ foo: 100, bar: 2 }, {same}, {same}]
 * // supports keypaths by default
 * var obj = {
 *   bar: 2
 * };
 * set(obj, 'foo.qux', 100); // { foo: { qux: 100 }, bar: 2 }
 * set(obj, {
 *   'foo.qux': 100
 *   'yolo': 1
 * }); // { foo: { qux: 100 }, bar: 2, yolo: 1 }
 * 
 * @module 101/set
 *
 * @function module:101/set
 * @param {*} [obj] - object on which the values will be set
 * @param {string} key - key of the value being set on obj
 * @param {*} val - value of the key being set on obj
 * @return {*|function} The same obj with new value set or Partial-function set (which accepts obj) and returns the same obj with val set
 */
module.exports = set;

function set (obj, key, val) {
  var setObj;
  if (arguments.length === 1) {
    // (setObj)
    setObj = obj;
    return function (obj) {
      return setKeypaths(obj, setObj); // extends original
    };
  }
  if (arguments.length === 2) {
    if (isString(obj) || isNumber(obj)) {
      // (key, val)
      val = key;
      key = obj;
      setObj = {};
      keypather.set(setObj, key, val);
      return function (obj) {
        return setKeypaths(obj, setObj); // extends original
      };
    }
    else if (isObject(key)) {
      // (obj, setObj)
      setObj = key;
      return setKeypaths(obj, setObj); // extends original
    }
    else {
      throw new TypeError('Invalid arguments: expected string, number, or object');
    }
  }
  else {
    setObj = {};
    keypather.set(setObj, key, val);
    return setKeypaths(obj, setObj); // extends original
  }
}

function setKeypaths (obj, setObj) {
  Object.keys(setObj).forEach(function (keypath) {
    var val = setObj[keypath];
    keypather.set(obj, keypath, val);
  });
  return obj;
}