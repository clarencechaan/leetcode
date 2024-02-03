/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function (tasks, space) {
  let lastCompleted = {};
  let time = 0;
  for (const task of tasks) {
    if (lastCompleted[task] === undefined || time > lastCompleted[task] + space)
      time++;
    else time = lastCompleted[task] + space + 2;
    lastCompleted[task] = time - 1;
  }
  return time;
};

console.log(taskSchedulerII([1, 2, 1, 2, 3, 1], 3));
