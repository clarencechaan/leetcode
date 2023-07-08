/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {
  let sumMap = { 0: { left: 0 } };
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    sumMap[sum] = { left: i + 1 };
  }

  for (let val in sumMap) {
    val = parseInt(val);
    if (sumMap[val + target]) {
      sumMap[val].right = sumMap[val + target].left;
    }
  }

  let sumMapArr = Object.entries(sumMap);
  let minLR = [];
  let min = Infinity;
  for (let i = 0; i < sumMapArr.length; i++) {
    if (sumMapArr[i][1].right)
      min = Math.min(min, sumMapArr[i][1].right - sumMapArr[i][1].left);
    minLR[i] = min;
  }

  let minRL = [];
  min = Infinity;
  for (let i = sumMapArr.length - 1; i >= 0; i--) {
    if (sumMapArr[i][1].right)
      min = Math.min(min, sumMapArr[i][1].right - sumMapArr[i][1].left);
    minRL[i] = min;
  }

  let result = Infinity;
  for (let i = 0; i < sumMapArr.length; i++)
    result = Math.min(result, minLR[i] + minRL[i + minLR[i]] || Infinity);
  return result === Infinity ? -1 : result;
};

console.log(minSumOfLengths([3, 2, 2, 4, 3], 3));
