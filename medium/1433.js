/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function (s1, s2) {
  let arr1 = s1.split("").sort();
  let arr2 = s2.split("").sort();

  function canBreak(a, b) {
    for (let i = 0; i < a.length; i++) if (a[i] < b[i]) return false;
    return true;
  }

  return canBreak(arr1, arr2) || canBreak(arr2, arr1);
};

console.log(checkIfCanBreak("abc", "xyz"));
