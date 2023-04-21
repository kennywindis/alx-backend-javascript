export default function createIteratorObject(report) {
  const k = [];
  for (const emply of Object.values(report.allEmployees)) {
    k.push(...emply);
  }
  return k;
}
