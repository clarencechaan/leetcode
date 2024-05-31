const MOD = BigInt(10 ** 9 + 7);

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfPower = function (nums) {
  // order doesn't matter, sort it
  nums.sort((a, b) => (a > b ? -1 : 1));

  nums = nums.map((num) => BigInt(num));

  const squared = nums.map((num) => num ** 2n % MOD);
  let result = nums[0] ** 3n;

  let sum = 0n;
  for (let i = 1; i < nums.length; i++) {
    sum *= 2n;
    const add = nums[i] * (squared[i] + squared[i - 1] + sum);
    result += add;
    sum += squared[i - 1];
    result %= MOD;
    sum %= MOD;
  }

  return Number(result % MOD);
};

console.log(sumOfPower([97, 96, 82, 76, 24]));

// 0 1 2 3 4 5  6
// 1 1 2 4 8 16 32

//    0   1   2   3   4
// [ 97, 96, 82, 76, 24 ]

// i j
// 0 0 max/min: 97n 97n => 9409n * 97n * 1n
// 0 1 max/min: 97n 96n => 9409n * 96n * 1n
// 0 2 max/min: 97n 82n => 9409n * 82n * 2n
// 0 3 max/min: 97n 76n => 9409n * 76n * 4n
// 0 4 max/min: 97n 24n => 9409n * 24n * 8n
// 1 1 max/min: 96n 96n => 9216n * 96n * 1n
// 1 2 max/min: 96n 82n => 9216n * 82n * 1n
// 1 3 max/min: 96n 76n => 9216n * 76n * 2n
// 1 4 max/min: 96n 24n => 9216n * 24n * 4n
// 2 2 max/min: 82n 82n => 6724n * 82n * 1n
// 2 3 max/min: 82n 76n => 6724n * 76n * 1n
// 2 4 max/min: 82n 24n => 6724n * 24n * 2n
// 3 3 max/min: 76n 76n => 5776n * 76n * 1n
// 3 4 max/min: 76n 24n => 5776n * 24n * 1n
// 4 4 max/min: 24n 24n => 576n * 24n * 1n

//  9409*97*1 + 9409*96*1 + 9409*82*2 + 9409*76*4 + 9409*24*8
// = 9409 * (97*1 + 96*1 + 82*2 + 76*4 + 24*8)
// = 9409 * (97*2**0 + 96*2**0 + 82*2**1 + 76*2**2 + 24*2**3)

// 576*24*1 + 5776*24*1 + 6724*24*2 + 9216*24*4 + 9409*24*8
// = 24 * (576*1 + 5776*1 + 6724*2 + 9216*4 + 9409*8)
// + 76 * (5776*1 + 6724*1 + 9216*2 + 9409*4)
// + 82 * (6724*1 + 9216*1 + 9409*2)
// + 96 * (9216*1 + 9409*1)
// + 97 * (9409*1)

// 576*24*1 + 5776*24*1 + 6724*24*2 + 9216*24*4 + 9409*24*8
// = 24 * (24*24*1 + 76*76*1 + 82*82*2 + 96*96*4 + 97*97*8)
// + 76 * (76*76*1 + 82*82*1 + 96*96*2 + 97*97*4)
// + 82 * (82*82*1 + 96*96*1 + 97*97*2)
// + 96 * (96*96*1 + 97*97*1)
// + 97 * (97*97*1)
