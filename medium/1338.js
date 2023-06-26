/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  let freqMap = {};
  for (const num of arr) freqMap[num] = (freqMap[num] || 0) + 1;
  arr.sort((a, b) =>
    freqMap[a] > freqMap[b] || (freqMap[a] === freqMap[b] && a > b) ? -1 : 1
  );

  let set = new Set();
  for (let i = 0; i < arr.length / 2; i++) set.add(arr[i]);

  return set.size;
};

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
