/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function (num) {
  num = num.split("");
  let fiveIdxR = num.lastIndexOf("5");
  let twoIdxL = num.slice(0, fiveIdxR).lastIndexOf("2");
  let sevenIdxL = num.slice(0, fiveIdxR).lastIndexOf("7");

  let zeroIdxR = num.lastIndexOf("0");
  let zeroIdxL = num.slice(0, zeroIdxR).lastIndexOf("0");
  let fiveIdxL = num.slice(0, zeroIdxR).lastIndexOf("5");

  let min = num.length;
  if (fiveIdxR >= 0) {
    if (twoIdxL >= 0) min = Math.min(min, num.length - twoIdxL - 2);
    if (sevenIdxL >= 0) min = Math.min(min, num.length - sevenIdxL - 2);
  }

  if (zeroIdxR >= 0) {
    min = Math.min(min, num.length - zeroIdxL - 2);
    min = Math.min(min, num.length - fiveIdxL - 2);
  }

  return min;
};

console.log(minimumOperations("2245047"));
