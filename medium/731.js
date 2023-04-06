var MyCalendarTwo = function () {
  this.bookings = [];
  this.overlaps = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  for (const overlap of this.overlaps) {
    if (
      (overlap[0] <= start && start < overlap[1]) ||
      (overlap[0] < end && end <= overlap[1]) ||
      (start <= overlap[0] && overlap[0] < end) ||
      (start < overlap[1] && overlap[1] <= end)
    )
      return false;
  }

  for (const booking of this.bookings) {
    if (booking[0] <= start && start < booking[1])
      this.overlaps.push([start, Math.min(end, booking[1])]);
    else if (booking[0] < end && end <= booking[1])
      this.overlaps.push([Math.max(start, booking[0]), end]);
    else if (start <= booking[0] && booking[0] < end)
      this.overlaps.push([booking[0], Math.min(end, booking[1])]);
    else if (start < booking[1] && booking[1] <= end)
      this.overlaps.push([Math.max(start, booking[0]), booking[1]]);
  }

  this.bookings.push([start, end]);
  return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
