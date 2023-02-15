/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => (a > b ? 1 : -1));
  students.sort((a, b) => (a > b ? 1 : -1));

  let result = 0;
  for (let i = 0; i < seats.length; i++)
    result += Math.abs(students[i] - seats[i]);

  return result;
};

console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6]));
