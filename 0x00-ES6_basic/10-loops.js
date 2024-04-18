export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const index of array) {
    newArr.push(appendString + index);
  }

  return newArr;
}
