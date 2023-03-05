/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let counts = {};
  for (const num of nums)
    if (!counts[num]) counts[num] = 1;
    else counts[num]++;

  let arr = [];
  for (const num in counts) arr.push([parseInt(num), counts[num]]);
  arr.sort((a, b) => (a[1] > b[1] ? -1 : 1));
  arr = arr.slice(0, k);
  arr = arr.map((elem) => elem[0]);
  return arr;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
