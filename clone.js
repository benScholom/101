/** 
 * @description
 * Just exporting https://www.npmjs.org/package/clone
 * Only bc 101 uses it internally and it is a nice util
 * @example
 * var clone = require('101/clone');
 * var obj = {
 * foo: 1,
 * bar: 2
 * };
 * clone(obj); // { foo: 1, bar: 2 }
 * 
 * 
 * @module 101/clone
 *
 */
module.exports = require('clone');
