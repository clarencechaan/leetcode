/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function (num) {
  for (let length1 = 1; length1 <= num.length / 2; length1++) {
    loop: for (let length2 = 1; length2 <= num.length / 2; length2++) {
      let idx = length1 + length2;
      let first = num.substring(0, length1);
      let second = num.substring(length1, length1 + length2);
      let result = [parseInt(first), parseInt(second)];
      while (idx < num.length) {
        let sum = (parseInt(first) + parseInt(second)).toString();
        if (
          (first.length > 1 && first[0] === "0") ||
          (second.length > 1 && second[0] === "0") ||
          num.substring(idx, idx + sum.length) !== sum ||
          sum >= Math.pow(2, 31)
        )
          continue loop;
        [first, second] = [second, sum];
        idx = idx + sum.length;
        result.push(parseInt(sum));
      }
      if (result.length >= 3) return result;
    }
  }

  return [];
};

console.log(splitIntoFibonacci("1101111"));
