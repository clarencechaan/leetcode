/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  let ranks = {};

  [...score]
    .sort((a, b) => (a > b ? -1 : 1))
    .forEach((val, idx) => {
      if (idx === 0) ranks[val] = "Gold Medal";
      else if (idx === 1) ranks[val] = "Silver Medal";
      else if (idx === 2) ranks[val] = "Bronze Medal";
      else ranks[val] = (idx + 1).toString();
    });

  return score.map((val) => ranks[val]);
};

console.log(findRelativeRanks([10, 3, 8, 9, 4]));
