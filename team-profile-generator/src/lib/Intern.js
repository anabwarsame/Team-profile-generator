const Employee = require("./employee.js");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
let intern = new Intern("anab", 1234, "anab@gmail.com", "highschool");
