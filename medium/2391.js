/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
// 1) calculate time taken for each garbage type
//  a) add 1 for each occurence of garbage type
//  b) add travel time from 0 to house at last occurence of garbage type
// 2) return sum
var garbageCollection = function (garbage, travel) {
  return (
    truckTime(garbage, travel, "M") +
    truckTime(garbage, travel, "P") +
    truckTime(garbage, travel, "G")
  );
};

function truckTime(garbage, travel, type) {
  let minutes = 0;
  let lastOccurence = 0;

  for (let i = 0; i < garbage.length; i++) {
    for (const char of garbage[i]) {
      if (char === type) {
        minutes++;
        lastOccurence = i;
      }
    }
  }

  for (let i = 0; i < lastOccurence; i++) {
    minutes += travel[i];
  }

  return minutes;
}

console.log(garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3]));
