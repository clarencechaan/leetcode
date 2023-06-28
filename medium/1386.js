/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function (n, reservedSeats) {
  let seatMap = {};
  for (const [row, label] of reservedSeats)
    if (!seatMap[row]) seatMap[row] = new Set([label]);
    else seatMap[row].add(label);

  let result = 0;
  for (let row in seatMap) {
    row = parseInt(row);
    if (
      !seatMap[row].has(2) &&
      !seatMap[row].has(3) &&
      !seatMap[row].has(4) &&
      !seatMap[row].has(5) &&
      !seatMap[row].has(6) &&
      !seatMap[row].has(7) &&
      !seatMap[row].has(8) &&
      !seatMap[row].has(9)
    )
      result += 2;
    else if (
      (!seatMap[row].has(2) &&
        !seatMap[row].has(3) &&
        !seatMap[row].has(4) &&
        !seatMap[row].has(5)) ||
      (!seatMap[row].has(4) &&
        !seatMap[row].has(5) &&
        !seatMap[row].has(6) &&
        !seatMap[row].has(7)) ||
      (!seatMap[row].has(6) &&
        !seatMap[row].has(7) &&
        !seatMap[row].has(8) &&
        !seatMap[row].has(9))
    )
      result++;
  }

  result += (n - Object.entries(seatMap).length) * 2;
  return result;
};

console.log(
  maxNumberOfFamilies(3, [
    [1, 2],
    [1, 3],
    [1, 8],
    [2, 6],
    [3, 1],
    [3, 10],
  ])
);
