/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function (access_times) {
  const accessTimeMap = {};
  for (const [employee, time] of access_times) {
    if (!accessTimeMap[employee]) accessTimeMap[employee] = [];
    accessTimeMap[employee].push(time);
  }

  for (const employee in accessTimeMap) accessTimeMap[employee].sort();

  // return time difference in minutes
  function getDifference(time1, time2) {
    const hour1 = +time1.slice(0, 2);
    const hour2 = +time2.slice(0, 2);
    const minute1 = +time1.slice(2);
    const minute2 = +time2.slice(2);

    const minutes1 = hour1 * 60 + minute1;
    const minutes2 = hour2 * 60 + minute2;

    return Math.abs(minutes1 - minutes2);
  }

  function isHighAccess(employee) {
    const times = accessTimeMap[employee];
    for (let i = 0; i + 3 <= times.length; i++) {
      const time1 = times[i];
      const time2 = times[i + 2];
      if (getDifference(time1, time2) < 60) return true;
    }
    return false;
  }

  const answer = Object.keys(accessTimeMap).filter(isHighAccess);
  return answer;
};
