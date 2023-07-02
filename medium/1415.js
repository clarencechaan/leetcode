/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  let happyStrings = new Set();

  function buildSet(s = "") {
    if (s.length === n) {
      happyStrings.add(s);
      return;
    }
    if (!s) {
      buildSet("a");
      buildSet("b");
      buildSet("c");
    } else {
      if (s[s.length - 1] !== "a") buildSet(s + "a");
      if (s[s.length - 1] !== "b") buildSet(s + "b");
      if (s[s.length - 1] !== "c") buildSet(s + "c");
    }
  }

  buildSet();

  happyStrings = [...happyStrings].sort();
  return happyStrings[k - 1] || "";
};

console.log(getHappyString(1, 3));
