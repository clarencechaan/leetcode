/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let num = 0;
  while (true)
    if (num * num > x) return num - 1;
    else num++;
};

console.log(mySqrt(4));
