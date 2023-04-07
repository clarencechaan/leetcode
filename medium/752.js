/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  let minTurns = [];

  for (let i = 0; i <= 9; i++) {
    minTurns[i] = [];
    for (let j = 0; j <= 9; j++) {
      minTurns[i][j] = [];
      for (let k = 0; k <= 9; k++) {
        minTurns[i][j][k] = [];
        for (let l = 0; l <= 9; l++) {
          minTurns[i][j][k][l] = Infinity;
        }
      }
    }
  }

  deadends = new Set(deadends);

  function recurse(d1 = 0, d2 = 0, d3 = 0, d4 = 0, turns = 0) {
    if (deadends.has("" + d1 + d2 + d3 + d4) || turns > 20) return;
    minTurns[d1][d2][d3][d4] = turns;
    if (turns + 1 < minTurns[(d1 + 11) % 10][d2][d3][d4])
      recurse((d1 + 11) % 10, d2, d3, d4, turns + 1);
    if (turns + 1 < minTurns[(d1 + 9) % 10][d2][d3][d4])
      recurse((d1 + 9) % 10, d2, d3, d4, turns + 1);
    if (turns + 1 < minTurns[d1][(d2 + 11) % 10][d3][d4])
      recurse(d1, (d2 + 11) % 10, d3, d4, turns + 1);
    if (turns + 1 < minTurns[d1][(d2 + 9) % 10][d3][d4])
      recurse(d1, (d2 + 9) % 10, d3, d4, turns + 1);
    if (turns + 1 < minTurns[d1][d2][(d3 + 11) % 10][d4])
      recurse(d1, d2, (d3 + 11) % 10, d4, turns + 1);
    if (turns + 1 < minTurns[d1][d2][(d3 + 9) % 10][d4])
      recurse(d1, d2, (d3 + 9) % 10, d4, turns + 1);
    if (turns + 1 < minTurns[d1][d2][d3][(d4 + 11) % 10])
      recurse(d1, d2, d3, (d4 + 11) % 10, turns + 1);
    if (turns + 1 < minTurns[d1][d2][d3][(d4 + 9) % 10])
      recurse(d1, d2, d3, (d4 + 9) % 10, turns + 1);
  }

  recurse();
  let result = minTurns[target[0]][target[1]][target[2]][target[3]];
  return result === Infinity ? -1 : result;
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));
