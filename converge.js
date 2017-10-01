/**
 * @description
 * Converges an array of functions into one
 * @example
 * var converge = require('101/converge');
 * converge(mul, [add, sub])(6, 2); // mul(add(6, 2), sub(6, 2)) // (6+2) * (6-2) = 36
 * [ {a: true, b: false}
 * , {a: false, b: false}
 * , {a: true, b: true}
 * ].filter(converge(and , [pluck("a") , pluck("b")])); // [{a: true, b: true}]
 * [f, converge(g, [h, i]), j].reduce(compose); // f(g(h(j), i(j)))
 * 
 * @module 101/converge
 *
 * @function module:101/converge
 * @param {function} f
 * @param {Array} array of functions
 * @return {function}
 */
module.exports = converge;

function converge(f, funcs) {

  return function converged(/* args */) {
    var args = Array.prototype.slice.call(arguments);

    return f.apply(null, funcs.map(function(g) {
      return g.apply(null, args);
    }));
  };
}
