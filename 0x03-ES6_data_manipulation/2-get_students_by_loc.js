export default function getStudentsByLocation(array, city) {
  return array.filter((k) => k.location === city);
}
