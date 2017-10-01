var isFunction = require('./is-function');

/**
 * @description
 * Functional version of !
 * @example
 * var not = require('101/not');
 * not(isString)('hey'); // false
 * not(isString)(100);   // true
 * @module 101/not
 *
 * @function module:101/not
 * @param {*} val - value to inverse
 * @return {function} - function whose arguments and context are applied to fn and result is inversed
 */
module.exports = not;

function not (val) {
  if (isFunction(val)) {
    return function (/* args */) {
      return not(val.apply(this, arguments));
    };
  }
  else {
    return !val;
  }
}