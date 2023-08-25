/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  const n = s.length;
  let arr = s.split("").map((char) => parseInt(char));
  let rotations = [0];
  while ((rotations[rotations.length - 1] + b) % n !== rotations[0])
    rotations.push((rotations[rotations.length - 1] + b) % n);

  let evens = [];
  if (b % 2 === 0) {
    evens.push([]);
    for (let i = 0; i < arr.length; i += 2) evens[0].push(arr[i]);
  } else {
    for (let add = 0; ; add++) {
      let even = [];
      for (let i = 0; i < arr.length; i += 2)
        even.push((arr[i] + add * a) % 10);
      if (even[0] === evens[0]?.[0]) break;
      evens.push(even);
    }
  }

  let odds = [];
  for (let add = 0; ; add++) {
    let odd = [];
    for (let i = 1; i < arr.length; i += 2) odd.push((arr[i] + add * a) % 10);
    if (odd[0] === odds[0]?.[0]) break;
    odds.push(odd);
  }

  let min = [...arr];
  for (const r of rotations) {
    for (const even of evens)
      loop: for (const odd of odds) {
        let equal = true;
        let stitched = [];
        const len = n / 2;
        if (r % 2 === 0) {
          for (let i = 0; i < n / 2; i++) {
            let idx = (len - r / 2 + i) % len;
            if (equal) {
              if (even[idx] < min[i * 2]) equal = false;
              else if (even[idx] > min[i * 2]) continue loop;
            }
            if (equal) {
              if (odd[idx] < min[i * 2 + 1]) equal = false;
              else if (odd[idx] > min[i * 2 + 1]) continue loop;
            }
            stitched.push(even[idx], odd[idx]);
          }
        } else if (r % 2 === 1) {
          for (let i = 0; i < n / 2; i++) {
            let idx = (len - (r + 1) / 2 + i) % len;
            let idx2 = (idx + 1) % len;
            if (equal) {
              if (odd[idx] < min[i * 2]) equal = false;
              else if (odd[idx] > min[i * 2]) continue loop;
            }
            if (equal) {
              if (even[idx2] < min[i * 2 + 1]) equal = false;
              else if (even[idx2] > min[i * 2 + 1]) continue loop;
            }
            stitched.push(odd[idx], even[idx2]);
          }
        }
        min = stitched;
      }
  }

  return min.join("");
};

console.log(findLexSmallestString("5525", 9, 2));
