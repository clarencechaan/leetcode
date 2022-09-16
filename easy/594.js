/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let max = 0;
  for (const num of nums) {
    let count1 = 0;
    let count2 = 0;
    if (nums.some((other) => Math.abs(other - num) === 1))
      for (const other of nums)
        if (other - num === 0 || other - num === 1) count1++;
        else if (num - other === 0 || num - other === 1) count2++;
    max = Math.max(count1, count2, max);
  }

  return max;
};

console.log(findLHS([1, 1, 1, 1]));
