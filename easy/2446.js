/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function (event1, event2) {
  function timeToMinutes(time) {
    return parseInt(time.substring(0, 2)) * 60 + parseInt(time.substring(3));
  }

  let minutes1 = [timeToMinutes(event1[0]), timeToMinutes(event1[1])];
  let minutes2 = [timeToMinutes(event2[0]), timeToMinutes(event2[1])];

  return (
    (minutes1[0] >= minutes2[0] && minutes1[0] <= minutes2[1]) ||
    (minutes1[1] >= minutes2[0] && minutes1[1] <= minutes2[1]) ||
    (minutes2[0] >= minutes1[0] && minutes2[0] <= minutes1[1]) ||
    (minutes2[1] >= minutes1[0] && minutes2[1] <= minutes1[1])
  );
};

console.log(haveConflict(["01:00", "02:00"], ["01:20", "03:00"]));
