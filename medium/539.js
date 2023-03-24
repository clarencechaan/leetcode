/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  function timeToMinutes(time) {
    let [hours, minutes] = time.split(":");
    return parseInt(hours) * 60 + parseInt(minutes);
  }

  let minutesArr = timePoints.map((time) => timeToMinutes(time));
  minutesArr = [...minutesArr, ...minutesArr.map((minutes) => minutes + 1440)];
  minutesArr.sort((a, b) => (a > b ? 1 : -1));

  let min = Infinity;
  for (let i = 0; i < minutesArr.length - 1; i++)
    min = Math.min(min, minutesArr[i + 1] - minutesArr[i]);

  return min;
};

console.log(findMinDifference(["00:00", "04:00", "22:00"]));
