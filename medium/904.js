/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let max = 0;
  let seen = [];

  for (let i = 0; i < fruits.length; i++) {
    let types = [];
    let length = 0;
    for (let j = i; j < fruits.length; j++) {
      if (types.length === 0) types[0] = fruits[j];
      else if (types.length === 1 && types[0] !== fruits[j]) {
        types[1] = fruits[j];
        types.sort();
      } else if (
        types.length === 2 &&
        types[0] !== fruits[j] &&
        types[1] !== fruits[j]
      )
        break;
      if (!seen[j]) seen[j] = new Set();
      if (seen[j].has(types.toString())) break;
      seen[j].add(types.toString());
      length++;
    }
    max = Math.max(length, max);
  }

  return max;
};

console.log(totalFruit([1, 2, 3, 2, 2]));
