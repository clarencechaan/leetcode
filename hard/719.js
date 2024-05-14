/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  // naive approach:
  // 1. find the distance of each pair, keep it in an array
  // 2. sort it
  // 3. return the k-1-th element

  // try:
  // 1. create a helper function numPairsAtMost(distance) that returns the
  //    number of pairs whose distance is at most `distance`
  // 2. binary search using this helper function for the smallest value of
  //    `distance` where `numPairsAtMost(distance) >= k`

  const n = nums.length;

  const freq = {};
  for (let i = 0; i < n; i++) freq[nums[i]] = (freq[nums[i]] || 0) + 1;

  const numsLTE = Array(Math.max(...nums) + 1).fill(0);
  for (let i = 0; i < numsLTE.length; i++)
    numsLTE[i] += (numsLTE[i - 1] || 0) + (freq[i] || 0);

  // returns the number of elements in range [left, right]
  function numElementsInRange(left, right) {
    return (numsLTE[right] || n) - (numsLTE[left - 1] || 0);
  }

  function numPairsAtMost(distance) {
    let sum = 0;

    for (let num in freq) {
      num = parseInt(num);
      let numElements = (freq[num] * (freq[num] - 1)) / 2;
      numElements += freq[num] * numElementsInRange(num + 1, num + distance);
      sum += numElements;
    }

    return sum;
  }

  let min = 0;
  let max = Math.max(...nums);
  let mid = Math.floor((min + max) / 2);

  while (min < max) {
    if (numPairsAtMost(mid) >= k) max = mid;
    else min = mid + 1;
    mid = Math.floor((min + max) / 2);
  }

  return mid;
};

console.log(smallestDistancePair([1, 3, 1], 1));
