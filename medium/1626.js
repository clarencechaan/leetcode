/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  const n = scores.length;

  let validNeighbours = [];
  for (let i = 0; i < n; i++) {
    validNeighbours[i] = [];
    for (let j = 0; j < n; j++)
      if (
        i === j ||
        ages[j] < ages[i] ||
        scores[j] < scores[i] ||
        (ages[j] === ages[i] && scores[j] === scores[i] && j < i)
      )
        continue;
      else validNeighbours[i].push(j);
  }

  let memo = [];
  function bestScoreFromIdx(idx) {
    if (memo[idx]) return memo[idx];
    let neighboursScore = 0;
    for (const neighbour of validNeighbours[idx])
      neighboursScore = Math.max(neighboursScore, bestScoreFromIdx(neighbour));
    let score = scores[idx] + neighboursScore;
    memo[idx] = score;
    return score;
  }

  let max = 0;
  for (let i = 0; i < n; i++) max = Math.max(max, bestScoreFromIdx(i));
  return max;
};

console.log(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5]));
