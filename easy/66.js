/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let arr = [...digits].reverse();
  arr[0]++;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
      arr[i] = 0;
      arr[i + 1] = arr[i + 1] ? arr[i + 1] + 1 : 1;
    }
  }

  return arr.reverse();
};

console.log(plusOne([9, 4, 9]));
