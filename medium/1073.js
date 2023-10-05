/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function (arr1, arr2) {
  let num1 = 0n;
  for (let i = 0; i < arr1.length; i++)
    if (arr1[arr1.length - 1 - i]) num1 += (-2n) ** BigInt(i);
  let num2 = 0n;
  for (let i = 0; i < arr2.length; i++)
    if (arr2[arr2.length - 1 - i]) num2 += (-2n) ** BigInt(i);

  let val = num1 + num2;

  let min = [0n];
  let max = [1n];

  while (!(min[min.length - 1] <= val && val <= max[max.length - 1])) {
    if (min.length % 2 === 1) {
      min.push(min[min.length - 1] + (-2n) ** BigInt(min.length));
      max.push(max[max.length - 1]);
    } else {
      min.push(min[min.length - 1]);
      max.push(max[max.length - 1] + (-2n) ** BigInt(max.length));
    }
  }

  let base = [1n];
  while (base.length < min.length) base.push(base[base.length - 1] * -2n);

  min.reverse();
  max.reverse();
  base.reverse();

  let result = [];
  for (let i = 0; i < min.length; i++) {
    if (
      val &&
      (i === min.length - 1 || !(min[i + 1] <= val && val <= max[i + 1]))
    ) {
      result.push(1);
      val -= base[i];
    } else result.push(0);
  }

  return result;
};

console.log(addNegabinary([1, 1, 1, 1, 1], [1, 0, 1]));
