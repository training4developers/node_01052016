"use strict";

class Person {

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return this.firstName + " " + this.lastName;
	}

}

class Student extends Person {

	constructor(studentId, firstName, lastName) {
		super(firstName, lastName);
		this.studentId = studentId;
	}

	getStudentInfo() {
		return this.studentId + " " + this.lastName + ", " + this.firstName;
	}

}

var s = new Student(1, "Bob", "Smith");
console.log(s.getFullName());
console.log(s.getStudentInfo());
console.log(typeof Person);
console.log(typeof Student);
