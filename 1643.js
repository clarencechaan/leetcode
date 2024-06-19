/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
var kthSmallestPath = function (destination, k) {
  let hCount = destination[1];
  let vCount = destination[0];
  const answerLength = hCount + vCount;

  function factorial(n) {
    let prod = 1;
    for (let i = 1; i <= n; i++) prod *= i;
    return prod;
  }

  function choose(n, r) {
    return Math.round(factorial(n) / (factorial(r) * factorial(n - r)));
  }

  let combinations = choose(hCount + vCount, vCount);

  let result = "";
  for (let i = 0; i < answerLength; i++) {
    const combinationsWithH = choose(hCount + vCount - 1, hCount - 1);
    const combinationsWithV = combinations - combinationsWithH;

    if (k <= combinationsWithH && hCount > 0) {
      hCount--;
      result += "H";
      combinations = combinationsWithH;
    } else {
      vCount--;
      result += "V";
      k -= combinationsWithH;
      combinations = combinationsWithV;
    }
  }

  return result;
};

console.log(kthSmallestPath([2, 3], 1));
