/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  let sorted = [...nums].sort((a, b) => (a > b ? 1 : -1));
  let result = [];
  let mid = Math.floor((nums.length - 1) / 2);
  let direction = -1;

  for (const num of nums) {
    if (direction === -1) {
      for (let i = mid; i >= 0; i--)
        if (
          sorted[i] !== null &&
          (result.length === 0 || sorted[i] < result[result.length - 1])
        ) {
          result.push(sorted[i]);
          sorted[i] = null;
          break;
        }
    } else if (direction === 1) {
      for (let i = mid; i < nums.length; i++)
        if (sorted[i] !== null && sorted[i] > result[result.length - 1]) {
          result.push(sorted[i]);
          sorted[i] = null;
          break;
        }
    }
    direction *= -1;
  }

  for (let i = 0; i < nums.length; i++) nums[i] = result[i];
};

console.log(wiggleSort([1, 3, 2, 2, 3, 1]));

// 1 1 1 4 5 6

// 1 1 2 2 3 3
