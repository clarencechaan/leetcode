/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  // we notice that when `k >= 2`, we can rearrange `s` in any possible ordering
  // => if `k >= 2`, we return the lexicographically smallest ordering of `s`
  // => if `k === 1`, we cycle through the `s.length` possible orderings to find
  //    the lexicographically smallest

  const ideal = s.split("").sort().join("");

  let ans = s;
  let str = s;
  if (k >= 2) ans = ideal;
  else
    for (let i = 0; i < s.length; i++) {
      str = str.slice(1) + str[0];
      if (str < ans) ans = str;
    }

  return ans;
};

console.log(orderlyQueue("cba", 1));
