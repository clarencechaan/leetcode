/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function (arr1, arr2) {
  let max = 0;
  for (let i = 0; i < arr1.length - 1; i++)
    for (let j = i + 1; j < arr1.length; j++)
      max = Math.max(
        max,
        Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + j - i
      );
  return max;
};
