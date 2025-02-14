/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  // - the best subarray is one where the max frequency of a given number MINUS the frequency of k, is maximized
  // - how to quickly find this subarray given a chosenNumber?
  // - assume we have the subarray with range [left..right); what are some qualities of [0..left) and [right..n)?
  // - our kFrequency is freq[k] in [0..left) + freq[chosenNumber] in [left..right) - freq[k] in [left..right) + freq[k] in [right..n)
  // -
  const n = nums.length;
  const baseKFreq = nums.filter((num) => num === k).length;

  function getKFreq(chosenNumber) {
    let score = 0;
    let runningScore = [0];
    for (let i = 0; i < n; i++) {
      if (nums[i] === chosenNumber) score++;
      else if (nums[i] === k) score--;
      runningScore[i + 1] = score;
    }

    const minScorePrefix = [0];
    for (let i = 1; i <= n; i++)
      minScorePrefix[i] = Math.min(minScorePrefix[i - 1], runningScore[i]);

    const maxScoreSuffix = [];
    maxScoreSuffix[n] = runningScore[n];
    for (let i = n - 1; i >= 0; i--)
      maxScoreSuffix[i] = Math.max(maxScoreSuffix[i + 1], runningScore[i]);

    let surplus = 0;
    for (let i = 0; i <= n; i++)
      surplus = Math.max(surplus, maxScoreSuffix[i] - minScorePrefix[i]);

    return baseKFreq + surplus;
  }

  const set = new Set(nums);
  let result = baseKFreq;
  for (let chosenNumber = 1; chosenNumber <= 50; chosenNumber++)
    if (chosenNumber !== k && set.has(chosenNumber))
      result = Math.max(result, getKFreq(chosenNumber));
  return result;
};
