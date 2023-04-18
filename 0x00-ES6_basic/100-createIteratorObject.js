export default function createIteratorObject(report) {
  const employee = [];
 
 for (const [departments, employees] of Object.values(report.allEmployees)) {
    for (const employee of employees) {
      employee.push(employee);
    }
  }
  return Employee;
}
