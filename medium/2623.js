/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let memo = {};
  return function (...args) {
    let str = args.join(",");
    if (memo[str] !== undefined) return memo[str];
    let result = fn(...args);
    memo[str] = result;
    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
