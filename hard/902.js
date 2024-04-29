/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function (digits, n) {
  // find how many numbers can be created using `digits` with a length < the
  // length of `n`
  function getNumbersLengthLessThan() {
    const nLength = n.toString().length;
    let sum = 0;
    for (let length = 1; length < nLength; length++)
      sum += digits.length ** length;
    return sum;
  }

  // find how many numbers can be created using `digits` with a length == the
  // length of `num`, where the value is <= `num`
  function getNumbersLengthEqual(num = n.toString()) {
    const length = num.length;
    if (length === 1) return digits.filter((digit) => digit <= num).length;

    let countLessThan = 0;
    let countEqual = 0;

    for (const digit of digits)
      if (digit < num[0]) countLessThan++;
      else if (digit === num[0]) countEqual++;

    countLessThan *= getNumbersLengthEqual("9".repeat(length - 1));
    countEqual *= getNumbersLengthEqual(num.slice(1));

    return countLessThan + countEqual;
  }

  const numsLengthLessThan = getNumbersLengthLessThan();
  const numsLengthEqual = getNumbersLengthEqual();

  return numsLengthLessThan + numsLengthEqual;
};

console.log(atMostNGivenDigitSet(["1", "3", "5", "7"], 100));

// getNumbersLengthLessThan
// length == 1
// 3 == 3^1

// length == 2
// 3*3 == 3^2

// length == 3
// 3*3*3 == 3^3

// length == 4
// 3*3*3*3 == 3^4

// all => 3^4 + 3^3 + 3^2 + 3^1
