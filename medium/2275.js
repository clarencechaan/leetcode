/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
  candidates = candidates.map((can) => can.toString(2));

  let maxDigits = candidates.reduce((max, str) => Math.max(str.length, max), 0);

  let result = 0;
  for (let digit = 0; digit < maxDigits; digit++)
    result = Math.max(
      result,
      candidates.reduce(
        (count, str) => count + (str[str.length - 1 - digit] === "1" ? 1 : 0),
        0
      )
    );
  return result;
};

console.log(largestCombination([16, 17, 71, 62, 12, 24, 14]));
