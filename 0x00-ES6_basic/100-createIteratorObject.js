export default function createIteratorObject(report) {
  const allEmployees = [];
 for (const i of Object.values(report.allEmployees)) {
  allEmployees = [
    ...allEmployees,
    ..i
  ];
 }
  return allEmployees;
}
