

/**
 * @description
 * Functional composition method. Works great with array.reduce.
 * @example
 * var compose = require('101/compose');
 * compose(isNaN, parseInt)('nope'); // isNaN(parseInt('nope')) // true
 * 
 * @module 101/compose
 *
 * @function module:101/compose
 * @param {function} f
 * @param {function} g
 * @return {function} 
 */
module.exports = compose;
 
function compose(f,g) {
  return function composed(/* args */) { 
    var args = Array.prototype.slice.call(arguments);

    return f(g.apply(null, args));
  } 
}
