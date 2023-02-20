/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  nums.sort((a, b) => (a > b ? 1 : -1));
  nums = nums.filter((num) => num);

  let result = 0;
  while (nums.length) {
    let subtract = nums[0];
    for (let i = 0; i < nums.length; i++) {
      nums[i] -= subtract;
    }
    nums = nums.filter((num) => num);
    result++;
  }

  return result;
};

console.log(minimumOperations([1, 5, 0, 3, 5]));
