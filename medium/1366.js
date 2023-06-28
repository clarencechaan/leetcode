/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  let voteMap = {};
  for (const vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      if (!voteMap[vote[i]]) voteMap[vote[i]] = [];
      voteMap[vote[i]][i] = (voteMap[vote[i]][i] || 0) + 1;
    }
  }

  function winner(team1, team2) {
    for (
      let i = 0;
      i < Math.max(voteMap[team1].length, voteMap[team2].length);
      i++
    )
      if ((voteMap[team1][i] || 0) > (voteMap[team2][i] || 0)) return team1;
      else if ((voteMap[team1][i] || 0) < (voteMap[team2][i] || 0))
        return team2;
    if (team1 < team2) return team1;
    else return team2;
  }

  let result = [];
  for (const team in voteMap) result.push(team);
  result.sort((a, b) => (winner(a, b) === a ? -1 : 1));
  result = result.join("");
  return result;
};

console.log(rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"]));
