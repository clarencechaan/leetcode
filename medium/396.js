/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  const n = nums.length;

  let f = 0;
  for (let i = 0; i < n; i++) f += i * nums[i];
  let max = f;
  const sum = nums.reduce((val, sum) => val + sum, 0);

  for (let i = 1; i < n; i++) {
    f = f + sum - nums[n - i] * n;
    max = Math.max(f, max);
  }

  return max;
};

console.log(maxRotateFunction([-5, -2]));

// sum = 4 + 3 + 2 + 6 = 15
// F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
// F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
// F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
// F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

// F(1) = F(0) + 4 + 3 + 2 + 6(-3) = 16
// F(2) = F(1) + 4 + 3 + 2(-3) + 6 = 23
// F(3) = F(2) + 4 + 3(-3) + 2 + 6 = 26

// k >= 1:
// F(k) = F(k-1) + sum - arr[(n - k) % k] * n
