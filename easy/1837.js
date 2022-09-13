/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  const converted = basek(n, k);
  let sum = 0;
  for (const num of converted) {
    sum += parseInt(num);
  }
  return sum;
};

function basek(num, k) {
  let str = "";

  for (let i = 0; Math.pow(k, i) <= num; i++) {
    const digit = Math.floor(num / Math.pow(k, i)) % k;
    str = digit + str;
  }

  return str || "0";
}

console.log(sumBase(34, 6));
