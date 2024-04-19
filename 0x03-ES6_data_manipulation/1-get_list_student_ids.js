export default const getListStudentIds = (students) => {
  const studentArr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  const mappedArr = studentArr.map((student) => student.id);
  if (Array.isArray(obj)) {
    return mappedArr;
  }
  return [];
}
