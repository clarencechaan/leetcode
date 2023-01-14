/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let counts = {};
  for (const num of arr)
    if (!counts[num]) counts[num] = 1;
    else counts[num]++;

  let max = -1;
  for (const num in counts)
    if (counts[num] === parseInt(num) && parseInt(num) > max)
      max = parseInt(num);
  return max;
};

console.log(findLucky([2, 2, 2, 3, 3]));
