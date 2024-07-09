/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function (s1, s2) {
  const even1 = s1.split("").filter((_, idx) => idx % 2 === 0);
  const even2 = s2.split("").filter((_, idx) => idx % 2 === 0);
  const odd1 = s1.split("").filter((_, idx) => idx % 2 === 1);
  const odd2 = s2.split("").filter((_, idx) => idx % 2 === 1);

  return (
    even1.sort().join("") === even2.sort().join("") &&
    odd1.sort().join("") === odd2.sort().join("")
  );
};

console.log(checkStrings("abcdba", "cabdab"));
