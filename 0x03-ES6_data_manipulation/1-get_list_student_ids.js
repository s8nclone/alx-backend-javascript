export default const getListStudentIds = (students) => {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
};
