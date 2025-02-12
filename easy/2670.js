/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  let distinct = new Set();

  const distinctPrefix = [];
  for (let i = 0; i < nums.length; i++) {
    distinct.add(nums[i]);
    distinctPrefix[i] = distinct.size;
  }

  distinct = new Set();
  const distinctSuffix = [];
  distinctSuffix[nums.length] = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    distinct.add(nums[i]);
    distinctSuffix[i] = distinct.size;
  }

  const diff = nums.map(
    (num, idx) => distinctPrefix[idx] - distinctSuffix[idx + 1]
  );
  return diff;
};

console.log(distinctDifferenceArray([1, 2, 3, 4, 5]));
