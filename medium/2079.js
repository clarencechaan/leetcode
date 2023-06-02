/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let result = 0;
  let water = capacity;
  for (let i = 0; i < plants.length; i++) {
    if (water >= plants[i]) {
      water -= plants[i];
      result++;
    } else {
      water = capacity - plants[i];
      result += 2 * i + 1;
    }
  }

  return result;
};

console.log(wateringPlants((plants = [7, 7, 7, 7, 7, 7, 7]), (capacity = 8)));
