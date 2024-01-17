/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
var maximumCostSubstring = function (s, chars, vals) {
  let charValMap = {};
  for (let i = 0; i < chars.length; i++) charValMap[chars[i]] = vals[i];

  let valArr = [];
  for (const char of s) {
    if (charValMap[char] !== undefined) valArr.push(charValMap[char]);
    else valArr.push(char.charCodeAt() - 96);
  }

  let runningSum = [0];
  for (const val of valArr)
    runningSum.push(runningSum[runningSum.length - 1] + val);

  let minArr = [0];
  for (let i = 1; i < runningSum.length; i++)
    minArr.push(Math.min(minArr[i - 1], runningSum[i]));

  let maxArr = [];
  maxArr[runningSum.length - 1] = runningSum[runningSum.length - 1];
  for (let i = runningSum.length - 2; i >= 0; i--)
    maxArr[i] = Math.max(maxArr[i + 1], runningSum[i]);

  let result = 0;
  for (let i = 0; i < minArr.length; i++)
    result = Math.max(result, maxArr[i] - minArr[i]);
  return result;
};

console.log(
  maximumCostSubstring((s = "abc"), (chars = "abc"), (vals = [-1, -1, -1]))
);
