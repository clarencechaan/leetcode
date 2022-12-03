/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let i = 0;
  let j = 0;
  let count = 0;
  let sortedG = g.sort((a, b) => (a > b ? 1 : -1));
  let sortedS = s.sort((a, b) => (a > b ? 1 : -1));

  while (sortedS[j] && sortedG[i]) {
    if (sortedS[j] >= sortedG[i]) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return count;
};

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
