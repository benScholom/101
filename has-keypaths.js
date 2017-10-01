var eql = require('deep-eql');
var keypather = require('keypather')();
var isObject = require('./is-object');
var isBoolean = require('./is-boolean');
var isArray = Array.isArray;

/**
 * @description
 * Determines whether the keypaths exist and have the specified values.
 * If obj is not provided findIndex will return a partial-function which accepts a obj as the first argument.
 * @example
 * var hasKeypaths = require('101/has-keypaths');
 * var obj = {
 *   foo: {
 *     bar: {
 *       qux: 1
 *     }
 *   }
 * };
 * hasKeypaths(obj, ['foo.bar.qux']);      // true
 * hasKeypaths(obj, { 'foo.bar.qux': 1 }); // true
 * hasKeypaths(obj, ['foo.qux']);          // false
 * hasKeypaths(obj, { 'foo.bar': 2 });     // false
 * hasKeypaths(obj, { 'foo.bar': 1, 'nope': 1 }); // false
 * // optional 'deep' arg, defaults to true
 * var barObj = { bar: 1 };
 * hasKeypaths(obj, { 'foo.bar': barObj });         // true
 * hasKeypaths(obj, { 'foo.bar': barObj }, true);   // true
 * hasKeypaths(obj, { 'foo.bar': barObj }, false);  // false
 * hasKeypaths(obj, { 'foo.bar': obj.foo }, false); // true
 * hasKeypaths(obj, ['foo.bar'], false);            // true, uses [hasOwnProperty vs in](http://stackoverflow.com/questions/13632999/if-key-in-object-or-ifobject-hasownpropertykey)
 * // use it with find, findIndex, or filter!
 * var arr = [obj, { b: 1 }, { c: 1 }];
 * find(arr, hasKeypaths({ 'foo.bar.qux':1 })); // { foo: { bar: { qux: 1 } } }
 * find(arr, hasKeypaths(['foo.bar.qux']));     // { foo: { bar: { qux: 1 } } }
 * // use it to verify options object has required properties
 * var opts = {
 *   host: 'localhost',
 *   port: '3333',
 *   user: {
 *     id: 5
 *   }
 * };
 * hasKeypaths(opts, ['host', 'port', 'user.id']); // true
 *
 * @module 101/has-keypaths
 *
 * @function module:101/has-keypaths
 * @param {object} [obj] - the object whose properties being checked
 * @param {object|array} keypaths - keypaths and values (object) or keypath strings expected to exist on the object (array)
 * @param {boolean} [deep] - deep equals when values are specified (objects are recursed),
 *   deep keypath existance (prototype) when only keys are specified
 * @return {boolean|function} Has keypaths or Partial-function function hasKeypaths (which accepts obj)
 */
module.exports = function (obj, keypaths, deep) {
  if (arguments.length === 1) {
    keypaths = obj;
    return function (obj) {
      return hasKeypaths(obj, keypaths, deep);
    };
  }
  else {
    return hasKeypaths(obj, keypaths, deep);
  }
};

function hasKeypaths (obj, keypaths, deep) {
  var has = false;
  deep = !isBoolean(deep) ? true : deep;
  if (isObject(keypaths)) {
    has = Object.keys(keypaths).every(function (keypath) {
      return deep ?
        eql(keypather.get(obj, keypath), keypaths[keypath]) :
        keypather.get(obj, keypath) === keypaths[keypath];
    });
  }
  else if (isArray(keypaths)) {
    has = keypaths.every(function (keypath) {
      return deep ?
        keypather.in(obj, keypath) :
        keypather.has(obj, keypath);
    });
  }

  return has;
}