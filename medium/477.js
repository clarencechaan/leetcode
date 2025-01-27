/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  const zeros = Array(30).fill(0);
  const ones = Array(30).fill(0);

  for (const num of nums) {
    const binary = num.toString(2);
    for (let i = 0; i < 30; i++) {
      const bit = binary[binary.length - 1 - i];
      if (bit === "1") ones[29 - i]++;
      else zeros[29 - i]++;
    }
  }

  let total = 0;
  for (const num of nums) {
    const binary = num.toString(2);
    for (let i = 0; i < 30; i++) {
      const bit = binary[binary.length - 1 - i];
      if (bit === "1") {
        total += zeros[29 - i];
        ones[29 - i]--;
      } else {
        total += ones[29 - i];
        zeros[29 - i]--;
      }
    }
  }

  return total;
};

console.log(totalHammingDistance([4, 14, 2]));

// one idea: once we know whether a bit at a certain place is 0 or 1, we can
// find just once how many other numbers where the bit at this place differs,
// and then save this for future calculations

// but we must remember to subtract the bits of the current number we to prevent
// counting duplicate pairs
