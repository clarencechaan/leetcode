/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function (reward1, reward2, k) {
  const n = reward1.length;

  const reward3 = reward1.map((r1, i) => [r1, reward2[i]]);
  reward3.sort((a, b) => (a[0] - a[1] > b[0] - b[1] ? -1 : 1));

  let points = 0;
  for (let i = 0; i < k; i++) points += reward3[i][0];
  for (let i = k; i < n; i++) points += reward3[i][1];

  return points;
};
