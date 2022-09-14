/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let answer = [];

  for (let i = 0; i < boxes.length; i++) {
    let moves = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (i === j || boxes[j] == "0") continue;
      moves += Math.abs(j - i);
    }
    answer.push(moves);
  }

  return answer;
};

console.log(minOperations("001011"));
