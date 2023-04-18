export default function createIteratorObject(report) {
  const all = [];
 for (const i of Object.values(report.allEmployees)) {
all.push(...i);
 }
  return all;
}
