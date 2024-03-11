/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
  // 1. declare a map numOfMarbles where numOfMarbles[i] indicates the number of numbers at position i
  // 2. move marbles using moveFrom and moveTo
  // 3. build "occupied" array and return it

  let numOfMarbles = {};
  for (const num of nums) {
    numOfMarbles[num] = (numOfMarbles[num] || 0) + 1;
  }

  for (let i = 0; i < moveFrom.length; i++) {
    if (moveFrom[i] === moveTo[i]) continue;
    numOfMarbles[moveTo[i]] =
      (numOfMarbles[moveTo[i]] || 0) + numOfMarbles[moveFrom[i]];
    delete numOfMarbles[moveFrom[i]];
  }

  let occupied = [];
  for (const pos in numOfMarbles) occupied.push(parseInt(pos));
  occupied.sort((a, b) => (a > b ? 1 : -1));
  return occupied;
};

console.log(relocateMarbles([1, 6, 7, 8], [1, 7, 2], [2, 9, 5]));
