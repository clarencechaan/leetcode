/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let arrName = [];
  let arrTyped = [];

  for (const char of name) {
    if (!arrName.length || arrName[arrName.length - 1].char !== char)
      arrName.push({ char, count: 1 });
    else arrName[arrName.length - 1].count++;
  }

  for (const char of typed) {
    if (!arrTyped.length || arrTyped[arrTyped.length - 1].char !== char)
      arrTyped.push({ char, count: 1 });
    else arrTyped[arrTyped.length - 1].count++;
  }

  if (arrName.length !== arrTyped.length) return false;

  for (let i = 0; i < arrName.length; i++)
    if (
      arrName[i].char !== arrTyped[i].char ||
      arrName[i].count > arrTyped[i].count
    )
      return false;

  return true;
};

console.log(isLongPressedName("alex", "aleexa"));
