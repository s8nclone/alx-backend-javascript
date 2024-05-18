export interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const firstStudent: Student = {
	firstName: "Abdulmuiz",
	lastName: "Adedayo",
	age: 28,
	location: "Lagos, Nigeria",
};

const secondStudent: Student = {
	firstName: "Yomi",
	lastName: "Badmus",
	age: 32,
	location: "Abuja",
};

const studentList: Student[] = [firstStudent, secondStudent];
