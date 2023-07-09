/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (h, w, horizontalCuts, verticalCuts) {
  horizontalCuts = horizontalCuts.map((num) => BigInt(num));
  verticalCuts = verticalCuts.map((num) => BigInt(num));
  horizontalCuts.sort((a, b) => (a > b ? 1 : -1));
  verticalCuts.sort((a, b) => (a > b ? 1 : -1));

  h = BigInt(h);
  w = BigInt(w);

  let pieceW = 0n;
  let pieceH = 0n;

  for (let i = 0; i <= horizontalCuts.length; i++) {
    let cutH = (horizontalCuts[i] || h) - (horizontalCuts[i - 1] || 0n);
    if (cutH > pieceH) pieceH = cutH;
  }

  for (let i = 0; i <= verticalCuts.length; i++) {
    let cutW = (verticalCuts[i] || w) - (verticalCuts[i - 1] || 0n);
    if (cutW > pieceW) pieceW = cutW;
  }

  return Number((pieceH * pieceW) % (10n ** 9n + 7n));
};

console.log(maxArea(5, 4, [1, 2, 4], [1, 3]));
