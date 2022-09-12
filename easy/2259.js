/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let arr = number.split("").map((str) => parseInt(str));
  let max = Array(number.length - 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == digit) {
      max = maxArr([...arr.slice(0, i), ...arr.slice(i + 1)], max);
    }
  }

  return max.reduce((str, num) => str + num, "");
};

function maxArr(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) return arr1;
    if (arr2[i] > arr1[i]) return arr2;
  }
  return arr1;
}

console.log(removeDigit("551", "5"));
