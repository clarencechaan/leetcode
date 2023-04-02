/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  let employee = employees.find((employee) => employee.id === id);

  let result = employee.importance;
  for (const sub of employee.subordinates)
    result += GetImportance(employees, sub);
  return result;
};
