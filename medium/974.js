/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function (nums, k) {
  let map = [1];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    sum = sum % k;
    if (sum < 0) sum += k;
    map[sum] = (map[sum] || 0) + 1;
  }

  let result = 0;
  for (const count of map) if (count) result += ((count - 1) * count) / 2;
  return result;
};

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
