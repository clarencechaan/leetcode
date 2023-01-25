/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let result = [first];
  for (const num of encoded) result.push(result[result.length - 1] ^ num);
  return result;
};

console.log(decode([6, 2, 7, 3], 4));
