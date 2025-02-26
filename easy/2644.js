/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  let answer;
  let max = -1;
  divisors.sort((a, b) => (a > b ? 1 : -1));
  for (const d of divisors) {
    const score = nums.reduce(
      (score, num) => score + (num % d === 0 ? 1 : 0),
      0
    );
    if (score > max) {
      answer = d;
      max = score;
    }
  }
  return answer;
};
