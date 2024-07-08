/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  const friends = Array(n)
    .fill()
    .map((_, idx) => idx + 1);

  let idx = 0;

  while (friends.length > 1) {
    idx = (idx + k - 1) % friends.length;
    friends.splice(idx, 1);
  }

  return friends[0];
};

console.log(findTheWinner(5, 2));
