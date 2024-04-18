export default function createIteratorObject(report) {
  const arrIndex = [];
  for (const arr of Object.keys(report)) {
    arrIndex.push(arr);
  }
  return arrIndex;
}
