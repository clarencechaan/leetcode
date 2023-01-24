/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => (a[1] > b[1] ? -1 : 1));

  let units = 0;
  let numBoxes = 0;

  for (let i = 0; i < boxTypes.length && numBoxes < truckSize; i++) {
    const boxesToLoad = Math.min(truckSize - numBoxes, boxTypes[i][0]);
    numBoxes += boxesToLoad;
    units += boxesToLoad * boxTypes[i][1];
  }

  return units;
};

console.log(
  maximumUnits(
    [
      [5, 10],
      [2, 5],
      [4, 7],
      [3, 9],
    ],
    10
  )
);
