/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  arr = arr.filter((word) => new Set(word.split("")).size === word.length);

  function isCharShared(a, b) {
    for (let i = 0; i < a.length; i++)
      for (let j = 0; j < b.length; j++) if (a[i] === b[j]) return true;
    return false;
  }

  function recurse(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (isCharShared(arr[i], arr[j])) {
          return Math.max(
            recurse([...arr.slice(0, i), ...arr.slice(i + 1)]),
            recurse([...arr.slice(0, j), ...arr.slice(j + 1)])
          );
        }
      }
    }

    return arr.reduce((sum, word) => sum + word.length, 0);
  }

  return recurse(arr);
};

console.log(maxLength(["cha", "r", "act", "ers"]));
