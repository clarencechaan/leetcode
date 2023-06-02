/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let aObj = { char: "a", count: a };
  let bObj = { char: "b", count: b };
  let cObj = { char: "c", count: c };
  let arr = [aObj, bObj, cObj];
  arr.sort((a, b) => (a.count > b.count ? -1 : 1));

  let result = "";
  for (let i = 0; i < 3; i++) {
    if (arr[i].count > 0 && result.slice(-2) !== arr[i].char.repeat(2)) {
      result += arr[i].char;
      arr[i].count--;
      arr.sort((a, b) => (a.count > b.count ? -1 : 1));
      i = -1;
    }
  }

  return result;
};

console.log(longestDiverseString(7, 1, 0));
