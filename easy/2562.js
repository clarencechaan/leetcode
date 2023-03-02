/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {
  let value = 0;
  for (let i = 0; i < Math.ceil(nums.length / 2); i++)
    if (i !== nums.length - 1 - i)
      value += parseInt(
        nums[i].toString() + nums[nums.length - 1 - i].toString()
      );
    else value += nums[i];
  return value;
};

console.log(findTheArrayConcVal([7, 52, 2, 4]));
