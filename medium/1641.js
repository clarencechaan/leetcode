/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let arr = [1, 1, 1, 1, 1];
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < arr.length; j++) {
      arr[j] += arr[j - 1];
    }
  }
  return arr.reduce((num, sum) => num + sum, 0);
};

console.log(countVowelStrings(33));

// 1
// 1 + 1 + 1 + 1 + 1 = 5

// 2
// 5 + 4 + 3 + 2 + 1 = 15

// 3
// 15 + 10 + 6 + 3 + 1 = 35

// 4
// 35 + 20 + 10 + 4 + 1 = 70
