var get = require('./pluck');
var put = require('./put');
var curry = require('./curry');
var clone = require('./clone');

/**
 * @description
 * Create a lens to access a data structure. When passed a property key as a string, it returns a function fn(obj) that acts as a getter for that. 
 * It also exposes .set(value, obj) and .mod(fn, obj).
 * @example
 * var fooLens = lens('foo');
 * var toUpper = function(str) { return str.toUpperCase(); };
 * var obj = {
 *   foo: 'foo',
 *   bar: 'bar'
 * };
 * fooLens(obj); // => 'foo'
 * fooLens.set('moo', obj); // => { foo: 'moo', bar: 'bar' }
 * fooLens.mod(toUpper, obj); // => { foo: 'MOO', bar: 'bar' }
 * 
 * @example
 * // You may also provide getter and setter functions.
 * var arr = ['foo', 'bar'];
 * var first = lens(
 *     function(arr) { return arr[0]; },
 *     function(val, arr) { var clone = arr.slice(); clone[0] = val; return clone; }
 * );
 * first(arr); // => 'foo'
 * first.set('moo')(arr); // => ['moo', 'bar']
 * first.mod(toUpper)(arr); // => ['FOO', 'bar']
 * 
 * @module 101/lens
 *
 * @function module:101/lens
 * @param {string|function} key|getter - key or getter function
 * @param {function} [setter] - setter function
 * @return {function} lens
 */
module.exports = lens;

function lens(getter, setter) {
  var _lens, key;

  if (arguments.length === 1) {
    // (key)
    key = getter;
    return lens(get(key), _setter(key));
  } else {
    // (getter, setter)
    _lens = getter;
  }

  _lens.set = curry(setter, 2);
  _lens.mod = curry(function(mod, obj) {
    return _lens.set(mod(_lens(obj)), clone(obj));
  });
  return _lens;
}

function _setter(key) {
  return function(value, obj) {
    return put(obj, key, value);
  };
}
