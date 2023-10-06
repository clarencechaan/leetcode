/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => (a > b ? 1 : -1));

  function binarySearchPotions(p) {
    let min = 0;
    let max = potions.length - 1;
    let mid = Math.floor((min + max) / 2);

    while (min < max) {
      if (potions[mid] < p) min = mid + 1;
      else max = mid;
      mid = Math.floor((min + max) / 2);
    }

    return potions[mid] >= p ? mid : mid + 1;
  }

  let result = [];
  for (const s of spells) {
    let minP = Math.ceil(success / s);
    result.push(potions.length - binarySearchPotions(minP));
  }

  return result;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
