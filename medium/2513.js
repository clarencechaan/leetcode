/**
 * @param {number} divisor1
 * @param {number} divisor2
 * @param {number} uniqueCnt1
 * @param {number} uniqueCnt2
 * @return {number}
 */
var minimizeSet = function (divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
  let x = divisor1;
  let y = divisor2;
  while (x !== y)
    if (x < y) x += divisor1;
    else y += divisor2;

  let smallestMultiple = x;

  function totalArrLength(num) {
    let one = Math.floor(num / divisor2);
    let two = Math.floor(num / divisor1);
    let intersection = Math.floor(num / smallestMultiple);
    one -= intersection;
    two -= intersection;
    let any = num - one - two - intersection;
    return any + Math.min(uniqueCnt1, one) + Math.min(uniqueCnt2, two);
  }

  let min = 1;
  let max = (uniqueCnt1 + uniqueCnt2) * 2;
  let mid = Math.floor((min + max) / 2);
  while (min < max) {
    if (totalArrLength(mid) < uniqueCnt1 + uniqueCnt2) min = mid + 1;
    else max = mid;
    mid = Math.floor((min + max) / 2);
  }

  return mid;
};

console.log(minimizeSet(2, 7, 1, 3));
