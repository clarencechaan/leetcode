/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  sandwiches.reverse();

  let done = false;

  while (!done) {
    done = true;
    for (let i = 0; i < students.length; i++)
      if (students[i] === sandwiches[sandwiches.length - 1]) {
        students = [...students.slice(0, i), ...students.slice(i + 1)];
        sandwiches.pop();
        done = false;
      }
  }

  return students.length;
};
