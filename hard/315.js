/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  let result = [];
  let greaterMap = {};

  for (let i = nums.length - 1; i >= 0; i--) {
    let count = 0;
    let idx = nums.length;
    if (greaterMap[nums[i]]) [count, idx] = greaterMap[nums[i]];

    for (let j = i + 1; j < idx; j++) if (nums[i] > nums[j]) count++;
    result[i] = count;
    greaterMap[nums[i]] = [count, i];
  }

  return result;
};

console.log(countSmaller([5, 2, 6, 1]));
