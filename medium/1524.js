/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  let runningSum = [0];
  for (const num of arr)
    runningSum.push(runningSum[runningSum.length - 1] + num);

  let evenRL = [];
  for (let i = runningSum.length - 1; i >= 0; i--)
    evenRL[i] = (evenRL[i + 1] || 0) + (runningSum[i] % 2 === 0 ? 1 : 0);

  let oddRL = [];
  for (let i = runningSum.length - 1; i >= 0; i--)
    oddRL[i] = (oddRL[i + 1] || 0) + (runningSum[i] % 2 === 1 ? 1 : 0);

  let result = 0;
  for (let i = 0; i < runningSum.length - 1; i++)
    if (runningSum[i] % 2 === 0) result += oddRL[i + 1];
    else if (runningSum[i] % 2 === 1) result += evenRL[i + 1];

  return result % (10 ** 9 + 7);
};

console.log(numOfSubarrays([1, 3, 5]));
