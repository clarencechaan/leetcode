/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  // 1. create a helper function getPoints(player,turn) that returns the number of points that player `player` scored on turn `turn`
  // 2. calculate the sum of points for each player

  function getPoints(player, turn) {
    let score = player[turn];
    if (player[turn - 1] === 10 || player[turn - 2] === 10) score *= 2;
    return score;
  }

  const score1 = player1.reduce(
    (sum, _, turn) => sum + getPoints(player1, turn),
    0
  );

  const score2 = player2.reduce(
    (sum, _, turn) => sum + getPoints(player2, turn),
    0
  );

  if (score1 > score2) return 1;
  if (score2 > score1) return 2;
  return 0;
};

console.log(isWinner([4, 10, 7, 9], [6, 5, 2, 3]));
