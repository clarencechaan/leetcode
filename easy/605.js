/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let spaces = 0;
  let arr = [...flowerbed];

  for (let i = 0; i < flowerbed.length; i++) {
    if (!arr[i] && !arr[i - 1] && !arr[i + 1]) {
      arr[i] = 1;
      spaces++;
      i++;
    }
  }

  return spaces >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
