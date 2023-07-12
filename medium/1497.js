/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  arr = arr.map((num) => (num >= 0 ? num : Math.ceil(-num / k) * k + num) % k);
  let freq = Array(k).fill(0);
  for (const num of arr) freq[num]++;

  if (freq[0] % 2 !== 0) return false;
  for (let i = 1; i < k; i++) if (freq[i] !== freq[k - i]) return false;

  return true;
};

console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5));
