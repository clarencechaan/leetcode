/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
  let drank = 0;
  let empty = 0;

  while (numBottles > 0) {
    drank += numBottles;
    empty += numBottles;
    numBottles = 0;
    while (empty >= numExchange) {
      numBottles++;
      empty -= numExchange;
      numExchange++;
    }
  }

  return drank;
};

console.log(maxBottlesDrunk(13, 6));
