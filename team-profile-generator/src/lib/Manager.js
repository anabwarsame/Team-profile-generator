const Employee = require("./Employee.js");
class Manager extends Employee {
  constructor({ name, id, email, officeNumber }) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "manager";
  }
}

let manager = new Manager("anab", 1234, "anab@gmail.com", "12345");
console.log(manager.getOfficeNumber());
