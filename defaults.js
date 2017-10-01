var isObject = require('./is-object');
var isBoolean = require('./is-boolean');
var exists = require('./exists');

/**
 * @description
 * Mixes in properties from source into target when
 * the property is not a property of `target`
 * @example
 * var defaults = require('101/defaults');
 * var opts = { foo: 0, bar: 1 };
 * var defs = { foo: 1, bar: 2, qux: 2 };
 * defaults(opts, defs); // returns mutated `opts` { foo: 0, bar: 1, qux: 2 }
 * [opts].map(defaults(defs)); // [ { foo: 0, bar: 1, qux: 2 } ]
 * var opts = {
 *   foo: {
 *     one: 1,
 *     two: 2
 *   }
 * };
 * var defs = {
 *   foo: {
 *     two: 20,
 *     three: 30
 *   }
 * };
 * defaults(opts, defs); // { foo: { one: 1, two: 2, three: 30 } }
 * 
 * @module 101/defaults
 *
 * @param  {Object} [target] Mix into
 * @param  {Object} source The defaults description
 * @return {Object}        THe resulting target
 */
module.exports = defaults;

function defaults (target, source, deep) {
  if (arguments.length === 1) {
    source = target;
    return function (target) {
      return defaults(target, source);
    };
  } else if (isBoolean(source)) {
    deep = source;
    source = target;
    return function (target) {
      return defaults(target, source, deep);
    };
  }
  target = target || {};
  deep = deep || false;
  if (!source) {
    return target;
  }
  return reduceObject(target, source, deep);
}

function reduceObject (target, source, deep) {
  return Object.keys(source).reduce(function (target, key) {
    if (isObject(target[key]) && isObject(source[key]) && deep) {
      reduceObject(target[key], source[key]);
      return target;
    }
    target[key] = exists(target[key]) ? target[key] : source[key];
    return target;
  }, target);
}
