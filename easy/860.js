/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let register = { 5: 0, 10: 0, 20: 0 };

  for (const bill of bills) {
    switch (bill) {
      case 20:
        if (register[10] && register[5]) {
          register[10]--;
          register[5]--;
        } else if (register[5] >= 3) register[5] -= 3;
        else return false;
        register[20]++;
        break;
      case 10:
        if (register[5]) register[5]--;
        else return false;
        register[10]++;
        break;
      case 5:
        register[5]++;
        break;
    }
  }

  return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
