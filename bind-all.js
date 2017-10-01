var isFunction = require('./is-function');
var keysIn = require('./keys-in');
/**
 * @description
 * Bind a passed object methods.
 * If methods name to bing are not specified, all the object methods are binded
 * @example
 * var bindAll = require('101/bind-all');
 * var obj = {
 *     init: function() {
 *       this.on(this.handler);
 *   },
 *   on: function(handler) {
 *       return handler();
 *   },
 *   handler: function() {
 *       console.log(this.msg);
 *   },
 *   msg: 'Hello World'
 * }
 * obj.init(); // undefined
 * bindAll(obj);
 * obj.init(); // "Hello World"
 * bindAll(obj, ['handler']);
 * obj.init(); // "Hello World"
 * 
 * @module 101/bind-all
 *
 * @function module:101/bind-all
 *
 * @param {object} object - object to bind
 * @param {array|string} [methods] - array or space-separated string containing the names of the methods to bind
 * @return {object} the binded object
 */
module.exports = bindAll;

function bindAll (object, methods) {
  if (methods && !Array.isArray(methods)) {
    throw new TypeError('The second argument must be an array');
  }

  var keys = methods || keysIn(object);

  // Bind all the specified methods
  keys.forEach(function(key) {
    var target = object[key];
    // skip for non-functions and when the target does not exist
    if (!target || !isFunction(target)) { return; }

    object[key] = target.bind(object);
  });

  return object;
}
