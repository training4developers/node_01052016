function Person(firstName, lastName) {

	this.firstName = firstName;
	this.lastName = lastName;

}
//Person.__proto__ -> function Empty() {}

Person.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
}

var p = new Person("Bob", "Smith");
//p.__proto__ -> Person.prototype

console.log(p.getFullName());

function Student(studentId, firstName, lastName) {
	this._super.call(this, firstName, lastName);
	this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype._super = Person;

Student.prototype.getStudentInfo = function() {
	return this.studentId + " " + this.lastName + ", " + this.firstName;
};

var s = new Student(1, "Bob", "Smith");
console.log(s.getFullName());
console.log(s.getStudentInfo());
