export default function appendToEachArrayValue(array, appendString) {
  const k=[];
  for (const idx of array) {
    const value = idx;
    k.push(appendString + value);
  }

  return k;
}
