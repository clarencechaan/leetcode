/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let counts = {};
  for (const num of nums)
    if (num % 2 === 0)
      if (!counts[num]) counts[num] = 1;
      else counts[num]++;

  let maxCount = 0;
  let maxCountNum = -1;
  for (const num in counts)
    if (
      counts[num] > maxCount ||
      (counts[num] === maxCount && num < maxCountNum)
    ) {
      maxCount = counts[num];
      maxCountNum = parseInt(num);
    }
  return maxCountNum;
};

console.log(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7]));
