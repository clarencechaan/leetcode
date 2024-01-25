/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  arr.sort((a, b) => (a > b ? 1 : -1));
  let set = new Set(arr);
  let prodMap = {};
  for (const num of arr) prodMap[num] = new Set();
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length; j++)
      if (set.has(arr[i] * arr[j]))
        prodMap[arr[i] * arr[j]].add(arr[i]).add(arr[j]);

  for (const prod in prodMap) {
    let pairs = [];
    for (const factor of prodMap[prod]) {
      pairs.push([factor, prod / factor]);
      prodMap[prod].delete(factor);
      prodMap[prod].delete(prod / factor);
    }
    prodMap[prod] = pairs;
  }

  let memo = {};
  function numOfWays(prod) {
    if (memo[prod]) return memo[prod];
    let result = 1;
    for (const [factor1, factor2] of prodMap[prod])
      result +=
        numOfWays(factor1) * numOfWays(factor2) * (factor1 !== factor2 ? 2 : 1);
    memo[prod] = result;
    return result;
  }

  let result = 0;
  for (const num of arr) result += numOfWays(num);
  return result % (10 ** 9 + 7);
};

console.log(numFactoredBinaryTrees([2, 4]));
