/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 1) for each element, check whether a number double its
//    value exists
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === 2 * arr[j]) return true;
    }
  }

  return false;
};

console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
