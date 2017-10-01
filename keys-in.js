/**
 * @description
 * Get all the keys compositing an object, including the `Object.prototype`
 * @example
 * var keysIn = require('101/keys-in');
 * var User = function() {
 *   this.msg = 'Hello World';
 * }
 * User.prototype.isLoggedIn = function() { example function  }
 * var user = new User();
 * keysIn(user); // ['msg', 'isLoggedIn']
 * 
 * @module 101/keys-in
 * 
 * @function module:101/keys-in
 * @param {object} object - the object from which to extract the keys
 * @return {array} array of keys
 */
module.exports = keysIn;

function keysIn(object) {
  if (!object) { return []; }

  var keys = [];
  for (var key in object) {
    keys.push(key);
  }

  return keys;
}
