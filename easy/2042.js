/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let arr = s
    .split(" ")
    .filter((elem) => elem[0] >= 1 && elem[0] <= 9)
    .map((str) => parseInt(str));
  let prev = null;
  for (const num of arr) {
    if (prev !== null && num <= prev) return false;
    prev = num;
  }
  return true;
};

console.log(
  areNumbersAscending(
    "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
  )
);
