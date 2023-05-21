/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let runningTiringDays = [0];
  let count = 0;
  for (const day of hours) {
    if (day > 8) count++;
    runningTiringDays.push(count);
  }

  for (let length = hours.length; length >= 1; length--)
    for (let i = 0; i + length <= hours.length; i++)
      if (runningTiringDays[i + length] - runningTiringDays[i] > length / 2)
        return length;

  return 0;
};

console.log(longestWPI([9, 9, 6, 0, 6, 6, 9]));
