/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  let result = [];
  let set = new Set();

  for (let d = 2; d <= n; d++) {
    for (let n = 1; n < d; n++) {
      let decimal = n / d;
      if (!set.has(decimal)) {
        set.add(decimal);
        if (n % d !== 0) result.push(n + "/" + d);
      }
    }
  }

  return result;
};

console.log(simplifiedFractions(4));
