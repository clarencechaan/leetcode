/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
var earliestAndLatest = function (n, firstPlayer, secondPlayer) {
  const startingPlayers = Array(n)
    .fill()
    .map((_, idx) => idx + 1);

  let earliest = Infinity;
  let latest = 0;

  function runTournament(
    players = [...startingPlayers],
    round = 1,
    playerIdx = 0
  ) {
    if (playerIdx >= Math.floor(players.length / 2)) {
      players = players
        .slice(0, Math.ceil(players.length / 2))
        .sort((a, b) => (a > b ? 1 : -1));
      runTournament(players, round + 1, 0);
      return;
    }

    const leftIdx = playerIdx;
    const rightIdx = players.length - 1 - leftIdx;
    const left = players[leftIdx];
    const right = players[rightIdx];

    if (
      (left === firstPlayer && right === secondPlayer) ||
      (left === secondPlayer && right === firstPlayer)
    ) {
      earliest = Math.min(earliest, round);
      latest = Math.max(latest, round);
      return;
    }

    // left player wins
    if (right !== firstPlayer && right !== secondPlayer)
      runTournament(players, round, playerIdx + 1);

    // right player wins
    if (left !== firstPlayer && left !== secondPlayer) {
      players[leftIdx] = right;
      runTournament(players, round, playerIdx + 1);
      players[leftIdx] = left;
    }
  }

  runTournament();

  return [earliest, latest];
};
