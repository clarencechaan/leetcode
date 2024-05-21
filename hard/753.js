/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function (n, k) {
  function getPasswords(password = "", arr = []) {
    if (password.length === n) {
      arr.push(password);
      return;
    }
    for (let i = 0; i < k; i++) getPasswords(password + i, arr);
    return arr;
  }

  let passwords = getPasswords();
  let ans = passwords.pop();

  passwords = new Set(passwords);

  while (passwords.size) {
    for (let i = 0; i < k; i++) {
      const password = ans.slice(ans.length - (n - 1)) + i;
      if (passwords.has(password)) {
        ans += i;
        passwords.delete(password);
        break;
      }
    }
  }

  return ans;
};

console.log(crackSafe(1, 2));
