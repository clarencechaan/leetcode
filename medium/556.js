/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  let arr = n.toString().split("");

  let from = -1;
  let to = -1;

  for (let i = arr.length - 1; i > 0; i--)
    for (let j = i - 1; j >= 0; j--)
      if ((arr[i] > arr[j] && j > to) || (j === to && arr[i] < arr[from]))
        [from, to] = [i, j];

  if (from === -1 && to === -1) return -1;

  arr = [
    ...arr.slice(0, to),
    arr[from],
    ...arr.slice(to, from),
    ...arr.slice(from + 1),
  ];

  for (let i = arr.length - 1; i > to + 1; i--)
    if (arr[i] < arr[i - 1]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i = arr.length;
    }

  let result = parseInt(arr.join(""));
  if (result > Math.pow(2, 31) - 1) return -1;
  return result;
};

console.log(nextGreaterElement(230241));
