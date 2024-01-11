/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function (variables, target) {
  function isGood(idx) {
    let [a, b, c, m] = variables[idx];
    a = BigInt(a);
    b = BigInt(b);
    c = BigInt(c);
    m = BigInt(m);
    return Number((a ** b % 10n) ** c % m) === target;
  }

  let result = [];
  for (let i = 0; i < variables.length; i++) if (isGood(i)) result.push(i);
  return result;
};

console.log(
  getGoodIndices(
    [
      [2, 3, 3, 10],
      [3, 3, 3, 1],
      [6, 1, 1, 4],
    ],
    2
  )
);
