/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let arrA = a
    .split("")
    .map((s) => parseInt(s))
    .reverse();
  let arrB = b
    .split("")
    .map((s) => parseInt(s))
    .reverse();

  for (let i = 0; i < arrB.length; i++) {
    if (arrA[i] === undefined) arrA[i] = 0;
    if (arrB[i])
      for (let j = i; j < arrA.length + arrB.length; j++) {
        if (arrA[j]) arrA[j] = 0;
        else {
          arrA[j] = 1;
          break;
        }
      }
  }

  return arrA.reverse().join("");
};

console.log(addBinary("100", "110010"));
