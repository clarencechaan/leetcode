/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  let arr = [0n, 1n, 2n, 5n];

  function recurse(n) {
    if (arr[n]) return arr[n];
    let result = recurse(n - 1) * 2n + recurse(n - 3);
    arr[n] = result;
    return result;
  }

  return Number(recurse(n) % BigInt(Math.pow(10, 9) + 7));
};

console.log(numTilings(10));
