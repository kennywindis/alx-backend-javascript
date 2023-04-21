export default function appendToEachArrayValue(array, appendString) {
  const k = [];
  for (const value of array) {
    k.push(appendString + array[array.indexOf(value)]);
  }

  return k;
}
