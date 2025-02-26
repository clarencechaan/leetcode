var MyCalendarThree = function () {
  this.bookings = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {number}
 */
MyCalendarThree.prototype.book = function (startTime, endTime) {
  const bookings = this.bookings;
  bookings.push(
    { type: "start", time: startTime },
    { type: "end", time: endTime }
  );
  bookings.sort((a, b) =>
    a.time > b.time ||
    (a.time === b.time && a.type === "start" && b.type === "end")
      ? 1
      : -1
  );

  let max = 0;
  let overlap = 0;
  for (const { type } of bookings) {
    if (type === "start") overlap++;
    else if (type === "end") overlap--;
    max = Math.max(max, overlap);
  }

  return max;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(startTime,endTime)
 */
