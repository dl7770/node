var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentID = this.generateStudentID();
        this.courses = [];
        this.balance = 0;
    }
    Student.prototype.generateStudentID = function () {
        return Math.floor(10000 + Math.random() * 90000).toString();
    };
    Student.prototype.enroll = function (course) {
        this.courses.push(course);
    };
    Student.prototype.viewBalance = function () {
        console.log("Balance: $".concat(this.balance));
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
        console.log("Thank you for your payment of $".concat(amount));
        this.viewBalance();
    };
    Student.prototype.showStatus = function () {
        console.log("Name: ".concat(this.firstName, " ").concat(this.lastName));
        console.log("Student ID: ".concat(this.studentID));
        console.log("Courses Enrolled:");
        this.courses.forEach(function (course) { return console.log(course); });
        this.viewBalance();
    };
    return Student;
}());

var student = new Student("Dua", "Latif");
student.enroll("Mathematics");
student.enroll("Economics");
student.viewBalance();
student.payTuition(1000);
student.showStatus();
