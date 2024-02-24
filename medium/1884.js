/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function (n) {
  let floor = n;
  let moves;
  for (moves = 1; floor > 0; moves++) floor -= moves;
  moves--;
  return moves;
};

console.log(twoEggDrop(2));
