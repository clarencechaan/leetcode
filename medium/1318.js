/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let strA = a.toString(2);
  let strB = b.toString(2);
  let strC = c.toString(2);

  let length = Math.max(strA.length, strB.length, strC.length);

  strA = "0".repeat(length - strA.length) + strA;
  strB = "0".repeat(length - strB.length) + strB;
  strC = "0".repeat(length - strC.length) + strC;

  let result = 0;
  for (let i = 0; i < length; i++)
    if (strC[i] === "1") {
      if (strA[i] === "0" && strB[i] === "0") result++;
    } else {
      if (strA[i] === "1") result++;
      if (strB[i] === "1") result++;
    }

  return result;
};

console.log(minFlips(1, 2, 3));
