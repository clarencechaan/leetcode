/**
 * @param {string} start
 * @param {string} end
 * @return {boolean}
 */
var canTransform = function (start, end) {
  let startArr = [];
  for (let i = 0; i < start.length; i++)
    if (start[i] === "L" || start[i] === "R") startArr.push([start[i], i]);

  let endArr = [];
  for (let i = 0; i < end.length; i++)
    if (end[i] === "L" || end[i] === "R") endArr.push([end[i], i]);

  if (startArr.length !== endArr.length) return false;

  for (let i = 0; i < startArr.length; i++)
    if (startArr[i][0] !== endArr[i][0]) return false;

  for (let i = 0; i < startArr.length; i++)
    if (
      (startArr[i][0] === "L" && startArr[i][1] < endArr[i][1]) ||
      (startArr[i][0] === "R" && startArr[i][1] > endArr[i][1])
    )
      return false;

  return true;
};

console.log(canTransform("RXXLRXRXL", "XRLXXRRLX"));
