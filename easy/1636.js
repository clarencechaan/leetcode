/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let counts = {};
  for (const num of nums)
    if (!counts[num]) counts[num] = 1;
    else counts[num]++;

  let arr = [];
  for (const num in counts)
    arr.push({ num: parseInt(num), count: counts[num] });
  arr.sort((a, b) =>
    a.count === b.count ? (a.num > b.num ? -1 : 1) : a.count > b.count ? 1 : -1
  );
  arr = arr.map((obj) => Array(obj.count).fill(obj.num));

  let result = [];
  for (const sub of arr) result.push(...sub);
  return result;
};

console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
