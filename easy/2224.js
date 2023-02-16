/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
  let currentMinutes =
    parseInt(current.substring(0, 2)) * 60 + parseInt(current.substring(3));
  let correctMinutes =
    parseInt(correct.substring(0, 2)) * 60 + parseInt(correct.substring(3));

  let diffMinutes = correctMinutes - currentMinutes;

  let result = 0;
  result += Math.floor(diffMinutes / 60);
  diffMinutes %= 60;
  result += Math.floor(diffMinutes / 15);
  diffMinutes %= 15;
  result += Math.floor(diffMinutes / 5);
  diffMinutes %= 5;
  result += diffMinutes;

  return result;
};

console.log(convertTime("11:00", "11:01"));
