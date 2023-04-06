/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let answer = [];

  for (let i = 0; i < temperatures.length; i++) {
    let days = 0;
    for (let j = 1; i + j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[i + j]) {
        days = j;
        break;
      }
    }
    answer[i] = days;
  }

  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
