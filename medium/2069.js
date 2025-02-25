/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function (width, height) {
  this.width = width;
  this.height = height;
  this.loopLength = (width - 1) * 2 + (height - 1) * 2;
  this.loopIdx = 0;
  this.moved = false;
};

/**
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function (num) {
  this.moved = true;
  this.loopIdx = (this.loopIdx + num) % this.loopLength;
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function () {
  if (this.loopIdx <= this.width - 1) return [this.loopIdx, 0];
  if (this.loopIdx <= this.width + this.height - 2)
    return [this.width - 1, this.loopIdx - this.width + 1];
  if (this.loopIdx <= this.width + this.height + this.width - 3)
    return [
      this.width - this.loopIdx + this.width + this.height - 3,
      this.height - 1,
    ];
  return [
    0,
    this.height - this.loopIdx + this.width + this.height + this.width - 4,
  ];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function () {
  if (this.loopIdx === 0) return this.moved ? "South" : "East";
  if (this.loopIdx <= this.width - 1) return "East";
  if (this.loopIdx <= this.width + this.height - 2) return "North";
  if (this.loopIdx <= this.width + this.height + this.width - 3) return "West";
  return "South";
};

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */
