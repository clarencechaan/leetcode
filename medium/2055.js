/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  let candles = [];
  for (let i = 0; i < s.length; i++) if (s[i] === "|") candles.push(i);

  function getNumPlates(left, right) {
    let min = 0;
    let max = candles.length - 1;
    let idxL = Math.floor((min + max) / 2);
    while (min < max && candles[idxL] !== left) {
      if (candles[idxL] < left) min = idxL + 1;
      else if (candles[idxL] > left) max = idxL;
      idxL = Math.floor((min + max) / 2);
    }

    min = 0;
    max = candles.length - 1;
    let idxR = Math.ceil((min + max) / 2);
    while (min < max && candles[idxR] !== right) {
      if (candles[idxR] < right) min = idxR;
      else if (candles[idxR] > right) max = idxR - 1;
      idxR = Math.ceil((min + max) / 2);
    }

    if (idxL >= idxR || idxL < 0) return 0;
    return candles[idxR] - candles[idxL] - (idxR - idxL);
  }

  let result = queries.map(([left, right]) => getNumPlates(left, right));
  return result;
};

console.log(
  platesBetweenCandles("**|**|***|", [
    [2, 5],
    [5, 9],
  ])
);
