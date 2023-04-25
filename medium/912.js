/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));
  let sorted = [];

  let i = 0;
  let j = 0;
  while (i < left.length || j < right.length) {
    if (left[i] < right[j] || j === right.length) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }

  return sorted;
};

console.log(sortArray([5, 2, 3, 1]));
