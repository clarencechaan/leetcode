/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let result = 0;
  let done = false;
  while (!done) {
    done = true;
    let divided = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i]) done = false;
      if (nums[i] % 2 === 1) {
        result++;
        nums[i]--;
      }
      if (nums[i]) {
        divided = true;
        nums[i] /= 2;
      }
    }
    if (divided) result++;
  }
  return result;
};

console.log(minOperations([1, 5]));
