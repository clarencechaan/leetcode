/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let freqMap = {};
  for (const answer of answers) freqMap[answer] = (freqMap[answer] || 0) + 1;

  let result = 0;
  for (const answer in freqMap) {
    let num = parseInt(answer);
    result += (num + 1) * Math.ceil(freqMap[answer] / (num + 1));
  }

  return result;
};

console.log(numRabbits([0, 0, 1, 1, 1]));

// {0:1} => +1
// {0:2} => +2
// {0:3} => +3

// {1:1} => +2
// {1:2} => +2
// {1:3} => +4
// {1:4} => +4
// {1:5} => +6
// {1:6} => +6

// {2:1} => +3
// {2:2} => +3
// {2:3} => +3
// {2:4} => +6
// {2:5} => +6
// {2:6} => +6
// {2:7} => +9
// {2:8} => +9
// {2:9} => +9

// {3:1} => +4
// {3:2} => +4
// {3:3} => +4
// {3:4} => +4
// {3:5} => +8
