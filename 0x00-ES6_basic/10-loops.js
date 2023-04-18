export default function appendToEachArrayValue(array, appendString) {
  const k=[];
  for (var idx of array) {
    const value = idx;
    k.push(appendString + value);
  }

  return array;
}
