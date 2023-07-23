/**
 * @param {number[]} arr
 * @param {number} m
 * @return {number}
 */
var findLatestStep = function (arr, m) {
  if (m === arr.length) return m;

  let binary = [];
  let lastStep = -1;
  let countM = 0;
  for (let i = 0; i < arr.length; i++) {
    const idx = arr[i] - 1;
    let a = binary[idx - 1] || 0;
    let b = binary[idx + 1] || 0;
    let val = 1 + a + b;
    binary[idx] = val;
    binary[idx - a] = val;
    binary[idx + b] = val;
    if (a === m) countM--;
    if (b === m) countM--;
    if (val === m) countM++;
    if (countM) lastStep = i + 1;
  }

  return lastStep;
};

console.log(findLatestStep([3, 5, 1, 2, 4], 1));
