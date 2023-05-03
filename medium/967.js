/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
  let result = new Set();

  function recurse(str = "") {
    if (str.length === n) {
      result.add(str);
      return;
    }

    let nextDigits = [];
    if (str === "")
      for (let i = 1; i <= 9; i++) {
        if ((0 <= i + k && i + k <= 9) || (0 <= i - k && i - k <= 9))
          nextDigits.push(i);
      }
    else {
      let sum = parseInt(str[str.length - 1]) + k;
      let diff = parseInt(str[str.length - 1]) - k;
      if (0 <= sum && sum <= 9) nextDigits.push(sum);
      if (0 <= diff && diff <= 9) nextDigits.push(diff);
    }

    for (const digit of nextDigits) recurse(str + digit);
  }

  recurse();
  return [...result];
};

console.log(numsSameConsecDiff(2, 1));
