/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  let hour = time[0] + time[1];
  let minute = time[3] + time[4];

  if (time[0] === "?" && time[1] === "?") hour = "23";
  else if (time[0] === "?" && time[1] >= "4") hour = "1" + time[1];
  else if (time[0] === "?" && time[1] < "4") hour = "2" + time[1];
  else if (time[0] === "2" && time[1] === "?") hour = "23";
  else if (time[0] < "2" && time[1] === "?") hour = time[0] + "9";

  if (time[3] === "?" && time[4] === "?") minute = "59";
  else if (time[3] === "?") minute = "5" + time[4];
  else if (time[4] === "?") minute = time[3] + "9";

  return hour + ":" + minute;
};

console.log(maximumTime("1?:22"));
