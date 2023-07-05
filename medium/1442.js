/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr) {
  let map = [];
  for (let i = 0; i < arr.length; i++) map.push([]);
  for (let i = 0; i < arr.length; i++) {
    let bitwise = arr[i];
    for (let j = i + 1; j <= arr.length; j++) {
      map[i][j] = bitwise;
      bitwise = bitwise ^ arr[j];
    }
  }

  let result = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      for (let k = j; k < arr.length; k++) {
        let a = map[i][j];
        let b = map[j][k + 1];
        if (a === b) result++;
      }

  return result;
};

console.log(countTriplets([2, 3, 1, 6, 7]));
