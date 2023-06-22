/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  let angleMinutes = minutes * 6;
  let angleHour = ((hour + minutes / 60) * 30) % 360;
  let angle1 = Math.min(angleMinutes, angleHour);
  let angle2 = Math.max(angleMinutes, angleHour);
  return Math.min(angle2 - angle1, 360 + angle1 - angle2);
};

console.log(angleClock(12, 30));
