class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

let employee = new Employee("anab", 1234, "anab@gmail.com");

module.exports = Employee;
