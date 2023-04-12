/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let alphabet = {};
  let curr = 1;
  for (const char of order)
    if (!alphabet[char]) {
      alphabet[char] = curr;
      curr++;
    }

  let result = s.split("");

  function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
      if (alphabet[arr[i]] > alphabet[pivot] || !alphabet[arr[i]])
        right.push(arr[i]);
      else left.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  // result.sort((a, b) => (alphabet[a] > alphabet[b] || !alphabet[a] ? 1 : -1));
  result = quickSort(result);

  return result.join("");
};

console.log(customSortString("cba", "abcd"));
