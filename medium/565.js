/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
  let lengths = {};

  for (let i = 0; i < nums.length; i++) {
    if (lengths[i] !== undefined) continue;
    let length = 1;
    let num = i;
    let seen = new Set([num]);
    while (!seen.has(nums[num])) {
      seen.add(nums[num]);
      num = nums[num];
      length++;
    }
    for (const i of seen) lengths[i] = length;
  }

  let max = 0;
  for (const i in lengths) max = Math.max(max, lengths[i]);

  return max;
};

console.log(arrayNesting([5, 4, 0, 3, 1, 6, 2]));
