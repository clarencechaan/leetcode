/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  const n = energy.length;

  let result = 0;
  let currentEnergy = initialEnergy;
  let currentExperience = initialExperience;

  for (let i = 0; i < n; i++) {
    if (currentEnergy <= energy[i]) {
      result += energy[i] - currentEnergy + 1;
      currentEnergy += energy[i] - currentEnergy + 1;
    }
    currentEnergy -= energy[i];

    if (currentExperience <= experience[i]) {
      result += experience[i] - currentExperience + 1;
      currentExperience += experience[i] - currentExperience + 1;
    }
    currentExperience += experience[i];
  }

  return result;
};

console.log(minNumberOfHours(2, 4, [1], [3]));
