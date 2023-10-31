class Student {
    firstName: string;
    lastName: string;
    studentID: string;
    courses: string[];
    balance: number;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentID = this.generateStudentID();
        this.courses = [];
        this.balance = 0;
    }

    private generateStudentID(): string {
        return Math.floor(10000 + Math.random() * 90000).toString();
    }

    enroll(course: string): void {
        this.courses.push(course);
    }

    viewBalance(): void {
        console.log(`Balance: $${this.balance}`);
    }

    payTuition(amount: number): void {
        this.balance -= amount;
        console.log(`Thank you for your payment of $${amount}`);
        this.viewBalance();
    }

    showStatus(): void {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log("Courses Enrolled:");
        this.courses.forEach(course => console.log(course));
        this.viewBalance();
    }
}


const student = new Student("Dua", "Latif");
student.enroll("Mathematics");
student.enroll("Economics");
student.viewBalance();
student.payTuition(1000);
student.showStatus();

