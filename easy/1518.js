/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let result = 0;
  let empty = 0;

  while (numBottles) {
    result += numBottles;
    empty += numBottles;
    numBottles = Math.floor(empty / numExchange);
    empty %= numExchange;
  }

  return result;
};

console.log(numWaterBottles(9, 3));
