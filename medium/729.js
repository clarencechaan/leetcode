var MyCalendar = function () {
  this.bookings = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (
    this.bookings.some(
      (booking) =>
        (booking[0] <= start && start < booking[1]) ||
        (booking[0] < end && end <= booking[1]) ||
        (start <= booking[0] && booking[0] < end) ||
        (start < booking[1] && booking[1] <= end)
    )
  )
    return false;
  this.bookings.push([start, end]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

// [10, 20]
// insert [start, end]:
//  10 <= start < 20
//  10 < end <= 20
//  start <= 10 < end
//  start < 20 <= end
