/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let products = {};
  let product = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    product *= nums[i];
    products["0:" + i] = product;
  }

  product = 1;

  for (let i = nums.length - 1; i >= 1; i--) {
    product *= nums[i];
    products[i + ":" + (nums.length - 1)] = product;
  }

  let result = [];
  result[0] = products["1:" + (nums.length - 1)];
  result[nums.length - 1] = products["0:" + (nums.length - 2)];

  for (let i = 1; i < nums.length - 1; i++)
    result[i] =
      products["0:" + (i - 1)] * products[i + 1 + ":" + (nums.length - 1)];
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
