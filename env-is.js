var equals = require('./equals');
/**
 * @description
 * Functional version of str === process.env.NODE_ENV. Or's multiple environments.
 * @example
 * var envIs = require('101/env-is');
 * // process.env.NODE_ENV = development
 * envIs('development');     // true
 * envIs('production');      // false
 * envIs('staging', 'production');     // false
 * envIs('development', 'production'); // true
 * 
 * @module 101/env-is
 *
 * @function module:101/env-is
 * @param {*} array - Array of environments to check
 * @return {boolean} Any of the supplied arguments exists in process.env.NODE_ENV
 */
module.exports = envIs;

function envIs () {
  var args = Array.prototype.slice.call(arguments);
  return args.some(equals(process.env.NODE_ENV));
}