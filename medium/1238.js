/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 */
var circularPermutation = function (n, start) {
  let set = new Set();
  for (let i = 0; i < Math.pow(2, n); i++) set.add(i);

  let result = [];
  result.push(start);
  set.delete(start);

  while (set.size) {
    let str = result[result.length - 1].toString(2);
    str = "0".repeat(n - str.length) + str;
    for (let i = 0; i < n; i++) {
      let nextNum =
        str.substring(0, i) +
        (str[i] === "0" ? "1" : "0") +
        str.substring(i + 1);
      nextNum = parseInt(nextNum, 2);
      if (set.has(nextNum)) {
        result.push(nextNum);
        set.delete(nextNum);
        break;
      }
    }
  }

  return result;
};

console.log(circularPermutation(3, 2));
