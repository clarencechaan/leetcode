/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  courses.sort((a, b) =>
    a[1] > b[1] || (a[1] === b[1] && a[0] > b[0]) ? 1 : -1
  );

  // return index of first element in ascending queue that is >= num
  function binarySearch(queue, num) {
    let min = 0;
    let max = queue.length;
    let mid = Math.floor((min + max) / 2);

    while (min < max) {
      if (queue[mid] >= num) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }

    return mid;
  }

  const queue = [];
  let time = 0;
  for (const [duration, lastDay] of courses) {
    const idx = binarySearch(queue, duration);
    time += duration;
    queue.splice(idx, 0, duration);
    if (time > lastDay) time -= queue.pop();
  }

  return queue.length;
};

console.log(
  scheduleCourse([
    [100, 200],
    [200, 1300],
    [1000, 1250],
    [2000, 3200],
  ])
);
