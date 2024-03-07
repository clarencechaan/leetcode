/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function (processorTime, tasks) {
  // idea: prioritize longest tasks first
  tasks.sort((a, b) => (a > b ? 1 : -1));
  processorTime.sort((a, b) => (a > b ? 1 : -1));

  let result = 0;
  for (const time of processorTime) {
    result = Math.max(result, time + tasks.pop());
    tasks.pop();
    tasks.pop();
    tasks.pop();
  }
  return result;
};

console.log(minProcessingTime([8, 10], [2, 2, 3, 1, 8, 7, 4, 5]));
