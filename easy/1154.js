/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let [year, month, day] = date.split("-").map((str) => parseInt(str));
  let leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  let monthLengths = [
    31,
    leapYear ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  let result = 0;
  for (let i = 0; i < month - 1; i++) result += monthLengths[i];
  result += day;

  return result;
};

console.log(dayOfYear("2019-02-10"));
