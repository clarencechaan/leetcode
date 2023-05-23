/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
  arr.sort((a, b) => (a > b ? -1 : 1));
  let totalSum = 0;
  for (const val of arr) totalSum += val;

  let sum = 0;
  let bestVal = arr[0];
  let minDiff = Math.abs(totalSum - target);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let val = Math.abs(target - (totalSum - sum)) / (i + 1);
    if (val % 0.5 === 0) val = Math.floor(val);
    else val = Math.round(val);
    let diff = Math.abs(target - (val * (i + 1) + totalSum - sum));
    if (
      val < arr[i] &&
      (val >= arr[i + 1] || i + 1 === arr.length) &&
      (diff < minDiff || (diff === minDiff && val < bestVal))
    ) {
      bestVal = val;
      minDiff = diff;
    }
  }

  return bestVal;
};

console.log(findBestValue([4, 9, 3], 10));
