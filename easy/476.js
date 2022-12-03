/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  return parseInt(
    num
      .toString(2)
      .split("")
      .map((char) => (parseInt(char) ? 0 : 1))
      .join(""),
    2
  );
};

console.log(findComplement(1));
