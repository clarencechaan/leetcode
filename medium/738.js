/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  let arr = n
    .toString()
    .split("")
    .map((char) => parseInt(char));

  function monotonize(idx) {
    if (idx === 0 || arr[idx - 1] < arr[idx]) {
      arr[idx]--;
      for (let i = idx + 1; i < arr.length; i++) arr[i] = 9;
      return;
    }
    monotonize(idx - 1);
  }

  for (let i = 0; i < arr.length - 1; i++)
    if (arr[i] > arr[i + 1]) {
      monotonize(i);
      break;
    }

  return parseInt(arr.join(""));
};

console.log(monotoneIncreasingDigits(777616726));
