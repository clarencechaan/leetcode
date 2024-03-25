/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function (nums) {
  // problem:
  // array is split into left, mid, right
  // sum of left <= sum of mid <= sum of right

  // brute-force:
  // 1. create a helper function getSum(left, right) that returns the sum of elements in nums from index left to index right
  // 2. count every pair [i,j] where 0 < i < j < nums.length and getSum(0,i) <= getSum(i,j) <= getSum(j,nums.length)
  // (too slow)

  // create an array called sum, where sum[i] === the sum of numbers from index 0 to index i
  let sum = [0];
  for (const num of nums) sum.push(sum[sum.length - 1] + num);

  // returns the sum of elements in nums from index left to index right
  function getSum(left, right) {
    return sum[right] - sum[left];
  }

  // another idea
  // 2. iterate through each index i of nums
  //    => for each i:
  //         assume the subarray left is the subarray of nums from range (0, i), and the subarray mid starts from index i
  //         binary search for the shortest mid can be
  //         binary search for the longest mid can be
  //         add the difference in length to our result
  // 3. return result

  function shortestMid(i) {
    let min = i + 1;
    let max = nums.length - 1;
    let idx = Math.floor((min + max) / 2);
    const leftSum = getSum(0, i);
    while (min < max) {
      if (leftSum <= getSum(i, idx)) max = idx;
      else min = idx + 1;
      idx = Math.floor((min + max) / 2);
    }
    if (leftSum <= getSum(i, idx)) return idx - i;
    return null;
  }

  function longestMid(i) {
    let min = i + 1;
    let max = nums.length - 1;
    let idx = Math.ceil((min + max) / 2);
    while (min < max) {
      const midSum = getSum(i, idx);
      const rightSum = getSum(idx, nums.length);
      if (midSum <= rightSum) min = idx;
      else max = idx - 1;
      idx = Math.ceil((min + max) / 2);
    }
    if (getSum(i, idx) <= getSum(idx, nums.length)) return idx - i;
    return null;
  }

  let result = 0;
  for (let i = 1; i < nums.length; i++) {
    const shortestLength = shortestMid(i);
    const longestLength = longestMid(i);
    if (shortestLength && longestLength && shortestLength <= longestLength)
      result = (result + (longestLength - shortestLength + 1)) % (10 ** 9 + 7);
  }
  return result;
};

console.log(waysToSplit([1, 2, 2, 2, 5, 0]));
