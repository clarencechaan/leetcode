/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let subsets = [];

  function buildSubSets(set = [], idx = 0) {
    subsets.push(set);
    for (let i = idx; i < nums.length; i++)
      buildSubSets([...set, nums[i]], i + 1);
  }

  buildSubSets();

  let result = 0;

  for (const subset of subsets) {
    let totalXOR = 0;
    for (const num of subset) totalXOR = totalXOR ^ num;
    result += totalXOR;
  }

  return result;
};

console.log(subsetXORSum([5, 1, 6]));
