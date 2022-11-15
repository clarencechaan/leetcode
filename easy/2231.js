/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function (num) {
  let arr = num
    .toString()
    .split("")
    .map((char) => parseInt(char));
  let evens = arr.filter((digit) => digit % 2 === 0).sort();
  let odds = arr.filter((digit) => digit % 2 === 1).sort();
  const parityOrder = arr.map((digit) => (digit % 2 === 0 ? "EVEN" : "ODD"));
  let result = [];
  for (const parity of parityOrder) {
    if (parity === "EVEN") result.push(evens.pop());
    else result.push(odds.pop());
  }
  return parseInt(result.join(""));
};

console.log(largestInteger(65875));
