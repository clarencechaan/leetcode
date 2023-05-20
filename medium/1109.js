/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  let result = Array(n).fill(0);
  for (const [first, last, seats] of bookings)
    for (let i = first - 1; i < last; i++) result[i] += seats;
  return result;
};

console.log(
  corpFlightBookings(
    [
      [1, 2, 10],
      [2, 3, 20],
      [2, 5, 25],
    ],
    5
  )
);
