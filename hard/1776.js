/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function (cars) {
  const n = cars.length;
  const answer = Array(n).fill(-1);

  function getCollisionTime(backCar, frontCar) {
    const [bp, bs] = backCar;
    const [fp, fs] = frontCar;
    return (fp - bp) / (bs - fs);
  }

  let speedCurve = [[0, Infinity, ...cars.at(-1)]];

  loop: for (let i = n - 1; i >= 0; i--) {
    const [p1, s1] = cars[i];
    for (let j = 0; j < speedCurve.length; j++) {
      const [ts, te, p2, s2] = speedCurve[j];
      if (s1 <= s2) continue;
      const tc = getCollisionTime([p1, s1], [p2, s2]);
      if (ts <= tc && tc < te) {
        const newElem = [0, tc, p1, s1];
        speedCurve[j][0] = tc;
        speedCurve = [newElem, ...speedCurve.slice(j)];
        answer[i] = tc;
        continue loop;
      }
    }
    speedCurve = [[0, Infinity, p1, s1]];
  }

  return answer;
};

// t = 0..Infinity, p = 7, s = 2
// how does car [4, 3] fit into speed curve?

// t = 0..3, p = 4, s = 3
// t = 3..Infinity, p = 7, s = 2
// how does car [2, 1] fit into speed curve?

// it doesn't
// new speed curve:
// t = 0..Infinity, p = 2, s = 1

// finalBp = bp + bs * time
// finalFp = fp + fs * time
// finalBp = finalFp
// bp + bs * time = fp + fs * time
// bs * time - fs * time = fp - bp
// time * (bs - fs) = fp - bp
// time = (fp - bp) / (bs - fs)
