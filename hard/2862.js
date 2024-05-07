/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const perfectSquares = [];
  for (let i = 1; i * i <= nums.length; i++) perfectSquares.push(i * i);

  let result = 0;
  for (let mult = 1; mult <= nums.length; mult++) {
    let sum = 0;
    for (const idx of perfectSquares) {
      const num = nums[idx * mult - 1];
      if (!num) break;
      sum += num;
    }
    result = Math.max(result, sum);
  }

  return result;
};

console.log(maximumSum([8, 7, 3, 5, 7, 2, 4, 9]));
