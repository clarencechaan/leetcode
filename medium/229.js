/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let counts = {};
  for (const num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  let answer = [];
  const third = nums.length / 3;
  for (const key in counts) {
    if (counts[key] > third) answer.push(parseInt(key));
  }

  return answer;
};

console.log(majorityElement([3, 2, 3]));
