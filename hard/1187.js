/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function (arr1, arr2) {
  arr2.sort((a, b) => (a > b ? 1 : -1));

  // return the smallest number in `arr2` that is strictly greater than `floor`
  // if no such number exists, return `false`
  function getNum(floor) {
    let min = 0;
    let max = arr2.length;
    let mid = Math.floor((min + max) / 2);

    while (min < max) {
      if (arr2[mid] <= floor) min = mid + 1;
      else max = mid;
      mid = Math.floor((min + max) / 2);
    }

    if (arr2[mid] !== undefined) return arr2[mid];
    return false;
  }

  const memo = Array(arr1.length)
    .fill()
    .map(() => ({}));

  function minOps(idx = 0, prev = -1) {
    if (idx === arr1.length) return 0;
    if (memo[idx][prev]) return memo[idx][prev];

    const skip = arr1[idx] > prev ? minOps(idx + 1, arr1[idx]) : Infinity;

    const num = getNum(prev);
    if (num === false) return skip;
    const take = 1 + minOps(idx + 1, num);

    const result = Math.min(skip, take);
    memo[idx][prev] = result;

    return result;
  }

  let result = minOps();
  if (result === Infinity) result = -1;

  return result;
};

console.log(makeArrayIncreasing([1, 5, 3, 6, 7], [1, 3, 2, 4]));
