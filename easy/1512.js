/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let counts = {};
  for (const num of nums)
    if (!counts[num]) counts[num] = 1;
    else counts[num]++;

  let result = 0;
  for (const num in counts) result += ((counts[num] - 1) * counts[num]) / 2;
  return result;
};

console.log(numIdenticalPairs([1, 2, 3]));

// 1 + 2 + 3 + … + n = n * (n + 1) / 2

// three 1s => 3 pairs => 2 + 1
// four 1s => 6 pairs => 3 + 2 + 1
