/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  arr.sort((a, b) => (a > b ? 1 : -1));
  const m = arr[Math.floor((arr.length - 1) / 2)];
  arr.sort((a, b) => {
    let diffA = Math.abs(a - m);
    let diffB = Math.abs(b - m);
    if (diffA > diffB || (diffA === diffB && a > b)) return -1;
    return 1;
  });
  return arr.slice(0, k);
};

console.log(getStrongest([1, 2, 3, 4, 5], 2));
