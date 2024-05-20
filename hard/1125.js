/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function (req_skills, people) {
  people = people.map((person, idx) => ({ person: new Set(person), idx }));
  people = people.filter(({ person }) => person.size);
  people.sort((a, b) => (a.person.size > b.person.size ? -1 : 1));

  function contains(a, b) {
    for (const skill of b) if (!a.has(skill)) return false;
    return true;
  }

  people = new Set(people);

  for (const a of people) {
    for (const b of people) {
      if (a === b) continue;
      if (contains(a.person, b.person)) people.delete(b);
    }
  }

  people = [...people];

  function recursion(maxSize, idx = 0, skills = new Set(), team = []) {
    if (team.length > maxSize) return null;
    if (skills.size >= req_skills.length) return [...team];
    if (idx >= people.length) return null;

    const skip = recursion(maxSize, idx + 1, skills, team);

    const addSkills = new Set();
    for (const skill of people[idx].person)
      if (!skills.has(skill)) {
        addSkills.add(skill);
        skills.add(skill);
      }

    if (!addSkills.size) return skip;

    team.push(people[idx].idx);
    const take = recursion(maxSize, idx + 1, skills, team);
    for (const skill of addSkills) skills.delete(skill);
    team.pop();

    if (skip?.length < take?.length || !take) return skip;
    return take;
  }

  for (let size = 1; size <= req_skills.length; size++) {
    const team = recursion(size);
    if (team) return team;
  }
};

console.log(
  smallestSufficientTeam(
    ["java", "nodejs", "reactjs"],
    [["java"], ["nodejs"], ["nodejs", "reactjs"]]
  )
);
