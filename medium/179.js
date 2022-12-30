/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  function greaterThan(a, b) {
    let strA = a.toString();
    let strB = b.toString();

    let ab = strA + strB;
    let ba = strB + strA;

    return ab > ba;
  }

  let result = nums.sort((a, b) => (greaterThan(a, b) ? -1 : 1));
  if (result.every((digit) => digit === 0)) return "0";
  else return result.join("");
};

console.log(largestNumber([111311, 1113]));
