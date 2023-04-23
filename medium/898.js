/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let bitwiseOR = 0;
    for (let j = i; j < arr.length; j++) {
      bitwiseOR = bitwiseOR | arr[j];
      if (!map[bitwiseOR]) map[bitwiseOR] = new Set();
      if (map[bitwiseOR].has(j)) break;
      map[bitwiseOR].add(j);
    }
  }

  return Object.keys(map).length;
};

console.log(subarrayBitwiseORs([1, 2, 4]));
