/**
 * @param {number} n
 */
var SeatManager = function (n) {
  const bucketSize = Math.ceil(Math.sqrt(n));
  const buckets = [];

  for (let idx = 0; idx * bucketSize < n; idx++) {
    const start = idx * bucketSize + 1;
    const end = Math.min(idx * bucketSize + bucketSize, n);
    const bucket = new Set();
    buckets[idx] = { start, end, bucket };
  }

  this.bucketSize = bucketSize;
  this.buckets = buckets;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  const buckets = this.buckets;

  for (let idx = 0; idx < buckets.length; idx++) {
    const { start, end, bucket } = buckets[idx];
    if (bucket.size < end - start + 1) {
      for (let seat = start; seat <= end; seat++) {
        if (!bucket.has(seat)) {
          bucket.add(seat);
          return seat;
        }
      }
    }
  }
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  const bucketSize = this.bucketSize;
  const buckets = this.buckets;
  const idx = Math.floor((seatNumber - 1) / bucketSize);
  buckets[idx].bucket.delete(seatNumber);
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
