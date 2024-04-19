export default const getStudentsByLocation = (students, city) => {
	students.filter((student) => student.location === city);
}
