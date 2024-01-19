/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  if (start.replaceAll("_", "") !== target.replaceAll("_", "")) return false;

  let startPositions = [];
  for (let i = 0; i < start.length; i++)
    if (start[i] !== "_") startPositions.push([start[i], i]);

  let targetPositions = [];
  for (let i = 0; i < target.length; i++)
    if (target[i] !== "_") targetPositions.push([target[i], i]);

  for (let i = 0; i < startPositions.length; i++) {
    switch (startPositions[i][0]) {
      case "L":
        if (targetPositions[i][1] > startPositions[i][1]) return false;
        break;
      case "R":
        if (targetPositions[i][1] < startPositions[i][1]) return false;
        break;
    }
  }

  return true;
};

console.log(canChange("_L__R__R_", "L______RR"));
