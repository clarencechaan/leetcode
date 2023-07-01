var UndergroundSystem = function () {
  this.checkIns = [];
  this.completedTrips = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkIns[id] = { stationName, t };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  let from = this.checkIns[id].stationName;
  let startTime = this.checkIns[id].t;
  let to = stationName;
  let endTime = t;

  if (!this.completedTrips[from + "," + to])
    this.completedTrips[from + "," + to] = { totalTime: 0, count: 0 };
  this.completedTrips[from + "," + to].totalTime += endTime - startTime;
  this.completedTrips[from + "," + to].count++;
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  const { totalTime, count } =
    this.completedTrips[startStation + "," + endStation];
  return totalTime / count;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
