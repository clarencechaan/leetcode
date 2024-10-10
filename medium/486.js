/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
  function getOptimalGame(i = 0, j = nums.length, player = 0, scores = [0, 0]) {
    if (i === j) return [...scores];

    scores[player] += nums[i];
    const left = getOptimalGame(i + 1, j, (player + 1) % 2, scores);
    scores[player] -= nums[i];

    scores[player] += nums[j - 1];
    const right = getOptimalGame(i, j - 1, (player + 1) % 2, scores);
    scores[player] -= nums[j - 1];

    if (left[player] > right[player]) return left;
    else return right;
  }

  const optimalGame = getOptimalGame();
  return optimalGame[0] >= optimalGame[1];
};

console.log(predictTheWinner([1, 5, 2]));
