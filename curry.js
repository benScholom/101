var slice = Array.prototype.slice;

/**
 * @description
 * Returns a curried function
 * @example
 * var curry = require('101/curry');
 * function add(a, b) { return a + b; }
 * var curriedAdd = curry(add);
 * var add2 = curriedAdd(2);
 * add2(6); // 8
 * add2(8); // 10
 * function join() { return Array.prototype.slice.call(arguments).join(''); }
 * curry(join, 3)(1)(0)(1); // "101"
 * 
 * @module 101/curry
 *
 * @function module:101/curry
 * @param {function} f - function to be curried
 * @param {integer} [n] - how many arguments to curry
 * @return {function} 
 */
module.exports = curry;

function curry(f, n) {
  var length = n || f.length;
  return _curry(f, length, []);
}

function _curry(f, n, args) {

  return function(/* args */) {
    var curryArgs = args.concat(slice.call(arguments));

    if (curryArgs.length >= n) {
      return f.apply(null, curryArgs.slice(0, n));
    } else {
      return _curry(f, n, curryArgs);
    }
  };
}
