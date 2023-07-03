/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  let frogs = { c: 0, r: 0, o: 0, a: 0, k: 0 };
  let result = 0;
  for (const char of croakOfFrogs) {
    switch (char) {
      case "c":
        if (!frogs.k) result++;
        else frogs.k--;
        frogs.c++;
        break;
      case "r":
        if (!frogs.c) return -1;
        frogs.c--;
        frogs.r++;
        break;
      case "o":
        if (!frogs.r) return -1;
        frogs.r--;
        frogs.o++;
        break;
      case "a":
        if (!frogs.o) return -1;
        frogs.o--;
        frogs.a++;
        break;
      case "k":
        if (!frogs.a) return -1;
        frogs.a--;
        frogs.k++;
    }
  }

  if (frogs.c || frogs.r || frogs.o || frogs.a) return -1;
  return frogs.k;
};

console.log(minNumberOfFrogs("croakcroak"));
