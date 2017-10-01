/**
 * @description
 * Returns a function with flipped arguments
 * @example
 * var flip = require('101/flip');
 * var curry = require('101/curry');
 * var hasKeypaths = require('101/has-keypaths');
 * var hasFooBar = curry(flip(hasKeypaths))(['foo.bar']);
 * hasFooBar({ foo: { bar : true } }); // true
 * function prefix(pre, str) {
 *   return pre + str;
 * }
 * flip(prefix)('hello', '_'); // "_hello"
 * 
 * 
 * @module 101/flip
 *
 * 
 * @function module:101/flip
 * @param {function} f - function to be flipped
 * @return {function}
 */
module.exports = flip;

function flip(f) {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    return f.apply(this, args.reverse());
  }
}
