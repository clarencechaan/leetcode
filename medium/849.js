/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  let emptyInARow = [];

  let emptyLeft = 0;
  for (let i = 0; seats[i] === 0; i++) emptyLeft++;

  let emptyRight = 0;
  for (let i = seats.length - 1; seats[i] === 0; i--) emptyRight++;

  let count = 0;
  for (let i = emptyLeft; i <= seats.length - emptyRight; i++) {
    if (seats[i] === 0) count++;
    else if (count > 0) {
      emptyInARow.push(count);
      count = 0;
    }
  }

  let result = Math.max(emptyLeft, emptyRight);
  for (const empty of emptyInARow)
    result = Math.max(result, Math.ceil(empty / 2));

  return result;
};

console.log(maxDistToClosest([1, 0, 0, 0]));
