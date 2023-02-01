/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function (n) {
  let result = 0;
  for (let a = 1; a <= n; a++)
    for (let b = 1; b <= n; b++) {
      let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if (c > n) continue;
      if (c % 1 === 0) result++;
    }
  return result;
};

console.log(countTriples(10));
