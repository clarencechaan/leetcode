/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countExcellentPairs = function (nums, k) {
  function getSetBits(num) {
    return num.toString(2).replaceAll("0", "").length;
  }

  nums = [...new Set(nums)].map((num) => getSetBits(num));

  let freq = {};
  for (const num of nums) freq[num] = (freq[num] || 0) + 1;

  freq = Object.entries(freq);
  freq.forEach((arr) => (arr[0] = parseInt(arr[0])));
  freq.sort((a, b) => (a[0] > b[0] ? -1 : 1));

  let ans = 0;
  for (let i = 0; i < freq.length; i++) {
    for (let j = i; j < freq.length; j++) {
      if (freq[i][0] + freq[j][0] < k) break;
      const add = freq[i][1] * freq[j][1];
      ans += add;
      if (i !== j) ans += add;
    }
  }

  return ans;
};

console.log(countExcellentPairs([1, 2, 3, 1], 3));
