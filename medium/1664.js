/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function (nums) {
  const n = nums.length;
  let evenSumArr = [];
  evenSumArr[Math.ceil(n / 2)] = 0;
  let oddSumArr = [];
  oddSumArr[Math.floor(n / 2)] = 0;
  for (let i = n - 1; i >= 0; i--) {
    let j = Math.floor(i / 2);
    if (i % 2 === 0) evenSumArr[j] = evenSumArr[j + 1] + nums[i];
    else oddSumArr[j] = oddSumArr[j + 1] + nums[i];
  }

  function isIdxRemovalFair(idx) {
    let newEvenSum = evenSumArr[0];
    let newOddSum = oddSumArr[0];
    if (idx % 2 === 0) newEvenSum -= nums[idx];
    else newOddSum -= nums[idx];
    let rightEvenSum = evenSumArr[Math.floor(idx / 2) + 1];
    let rightOddSum = oddSumArr[Math.ceil(idx / 2)];
    newEvenSum += rightOddSum - rightEvenSum;
    newOddSum += rightEvenSum - rightOddSum;
    return newEvenSum === newOddSum;
  }

  let result = 0;
  for (let i = 0; i < n; i++) if (isIdxRemovalFair(i)) result++;
  return result;
};

console.log(waysToMakeFair([2, 1, 6, 4]));
