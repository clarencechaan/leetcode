/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.space = {
    1: { max: big, parked: 0 },
    2: { max: medium, parked: 0 },
    3: { max: small, parked: 0 },
  };
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (this.space[carType].max > this.space[carType].parked) {
    this.space[carType].parked++;
    return true;
  }

  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
