/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function (n) {
  const canWin = Array(n + 1).fill(false);

  for (let i = 0; i < n; i++)
    if (canWin[i]) continue;
    else for (let s = 1; i + s ** 2 <= n; s++) canWin[i + s ** 2] = true;

  return canWin[n];
};

console.log(winnerSquareGame(1));
