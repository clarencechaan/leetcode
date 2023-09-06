/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function (aliceValues, bobValues) {
  let values = aliceValues.map((val, idx) => [val, bobValues[idx]]);
  values.sort((a, b) => (a[0] + a[1] > b[0] + b[1] ? 1 : -1));

  let score = [0, 0];
  let turn = 0;
  while (values.length) {
    score[turn] += values.pop()[turn];
    turn = (turn + 1) % 2;
  }

  if (score[0] > score[1]) return 1;
  if (score[0] < score[1]) return -1;
  return 0;
};

console.log(stoneGameVI([1, 3], [2, 1]));
