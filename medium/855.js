/**
 * @param {number} n
 */
var ExamRoom = function (n) {
  this.n = n;
  this.students = [];
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {
  const n = this.n;
  let students = this.students;

  if (!students.length) {
    this.students = [0];
    return 0;
  }

  let idx = 0;
  let max = 0;

  for (let i = 0; i < students.length - 1; i++) {
    const space = Math.floor((students[i + 1] - students[i]) / 2);
    if (space > max) {
      max = space;
      idx = i;
    }
  }

  let leftSpace = students[0];
  let rightSpace = n - 1 - students[students.length - 1];

  if (leftSpace >= max && leftSpace >= rightSpace) {
    this.students = [0, ...this.students];
    return 0;
  } else if (rightSpace > max && rightSpace > leftSpace) {
    this.students = [...this.students, n - 1];
    return n - 1;
  } else {
    this.students = [
      ...students.slice(0, idx + 1),
      students[idx] + max,
      ...students.slice(idx + 1),
    ];
    return students[idx] + max;
  }
};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
  let students = this.students;
  let idx = students.indexOf(p);
  this.students = [...students.slice(0, idx), ...students.slice(idx + 1)];
};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */

// [9]
