/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  function isWeightValid(maxWeight) {
    let day = 1;
    let ship = 0;
    for (const w of weights) {
      if (ship + w <= maxWeight) ship += w;
      else if (w <= maxWeight) {
        ship = w;
        day++;
      } else return false;
      if (day > days) return false;
    }
    return true;
  }

  let weight = 0;
  for (let i = 0; i < weights.length; i++) {
    weight += weights[i];
    if (isWeightValid(weight)) break;
  }

  while (isWeightValid(weight - 1)) weight--;
  return weight;
};

console.log(shipWithinDays((weights = [1, 2, 3, 1, 1]), (days = 4)));
