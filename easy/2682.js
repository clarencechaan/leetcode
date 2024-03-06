/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  // ith turn: pass to friend i * k steps away clockwise
  // game finished when someone receives ball twice
  // losers: anyone who did not receive the ball
  // return all losers in ascending order

  // declare set "seen" to keep track of friends who have held the ball
  let seen = new Set();

  // plays the game, keeping track of every friend who has held the ball
  function playGame(turn = 1, friend = 0) {
    if (seen.has(friend)) return;
    seen.add(friend);
    const nextFriend = (friend + turn * k) % n;
    playGame(turn + 1, nextFriend);
  }

  playGame();

  // find losers
  let losers = [];
  for (let i = 0; i < n; i++)
    if (seen.has(i)) continue;
    else losers.push(i + 1);
  losers.sort((a, b) => (a > b ? 1 : -1));

  return losers;
};

console.log(circularGameLosers(5, 2));
