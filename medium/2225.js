/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let losses = {};
  for (const [winner, loser] of matches) {
    if (!losses[winner]) losses[winner] = 0;
    if (!losses[loser]) losses[loser] = 0;
    losses[loser]++;
  }

  let answer = [[], []];
  for (const player in losses) {
    if (losses[player] === 0) answer[0].push(parseInt(player));
    else if (losses[player] === 1) answer[1].push(parseInt(player));
  }

  return answer;
};
