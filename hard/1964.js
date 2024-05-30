/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function (obstacles) {
  const course = [obstacles[0]];

  const ans = Array(obstacles.length).fill(1);

  // search for the index of the first obstacle in `course` that is > `ob`
  function binarySearch(course, ob) {
    let min = 0;
    let max = course.length;
    let mid = Math.floor((min + max) / 2);
    while (min < max) {
      if (course[mid] > ob) max = mid;
      else min = mid + 1;
      mid = Math.floor((min + max) / 2);
    }
    return mid;
  }

  for (let i = 1; i < obstacles.length; i++) {
    const j = binarySearch(course, obstacles[i]);
    course.splice(j, 1, obstacles[i]);
    ans[i] = j + 1;
  }

  return ans;
};

console.log(longestObstacleCourseAtEachPosition([1, 2, 3, 2]));
