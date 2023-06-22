/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];

  let result = 0;
  for (let i = 0; i + k <= arr.length; i++) {
    if (sum / k >= threshold) result++;
    sum -= arr[i];
    sum += arr[i + k];
  }

  return result;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
