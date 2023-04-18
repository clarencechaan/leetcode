/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const n = position.length;
  let cars = [];
  for (let i = 0; i < n; i++) cars.push({ pos: position[i], sp: speed[i] });
  cars.sort((a, b) => (a.pos > b.pos ? 1 : -1));

  let result = n;

  function meetTime(car1, car2, car2time = 0) {
    return (
      car2time +
      (car1.pos + car1.sp * car2time - car2.pos) / (car2.sp - car1.sp)
    );
  }

  for (let i = n - 2; i >= 0; i--) {
    let time = meetTime(cars[i], cars[i + 1], cars[i + 1].time || 0);
    if (time >= 0 && cars[i].pos + cars[i].sp * time <= target) {
      cars[i].pos = cars[i].pos + cars[i].sp * time;
      cars[i].sp = cars[i + 1].sp;
      cars[i].time = time;
      result--;
    }
  }

  return result;
};

console.log(carFleet(13, [10, 2, 5, 7, 4, 6, 11], [7, 5, 10, 5, 9, 4, 1]));
